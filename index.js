const http = require('http');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');

// Create HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/socket.io/socket.io.js') {
        const socketIoPath = path.join(
            __dirname,
            'node_modules',
            'socket.io',
            'client-dist',
            'socket.io.js'
        );
        fs.readFile(socketIoPath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('socket.io.js not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(data);
            }
        });
    } else if (req.url === '/style.css') {
        fs.readFile(path.join(__dirname, 'style.css'), (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('CSS not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            }
        });
    } else if (req.url === '/script.js') {
        fs.readFile(path.join(__dirname, 'script.js'), (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('JS file not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(data);
            }
        });
    }
});

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yamini20',
    database: 'chatdb'
});

db.connect((err) => {
    if (err) throw err;
    console.log('✅ Connected to MySQL');
});

// Socket.IO setup
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('🔌 A user connected');

    // Send old messages from DB to the new user
    db.query('SELECT * FROM messages ORDER BY id ASC', (err, results) => {
        if (!err) {
            results.forEach(row => {
                socket.emit('chat message', {
                    name: row.name,
                    message: row.message
                });
            });
        } else {
            console.error('❌ Failed to load messages from DB');
        }
    });

    // Listen for new chat messages
    socket.on('chat message', (data) => {
        console.log(`📥 Message from ${data.name}: ${data.message}`);

        // Save to DB
        db.query('INSERT INTO messages (name, message) VALUES (?, ?)', [data.name, data.message], (err) => {
            if (err) {
                console.error('❌ Error saving message:', err);
            }
        });

        // Broadcast to all users
        io.emit('chat message', data);
    });

    socket.on('disconnect', () => {
        console.log('❌ A user disconnected');
    });
});

// ✅ Auto-port switching logic
const DEFAULT_PORT = 5000;
server.listen(DEFAULT_PORT, () => {
    console.log(`✅ Server is listening at http://localhost:${DEFAULT_PORT}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        const fallbackPort = DEFAULT_PORT + 1;
        console.warn(`⚠️ Port ${DEFAULT_PORT} is in use. Trying http://localhost:${fallbackPort}...`);
        server.listen(fallbackPort, () => {
            console.log(`✅ Server switched to http://localhost:${fallbackPort}`);
        });
    } else {
        throw err;
    }
});
