# CHAT-APPLICATION

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: RUTIK PAWAR

*INTERN ID*: CT08DL940

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

*DESCRIPTION*:
Project Title: Real-Time Chat Application Using Socket.IO and Node.js
The Real-Time Chat Application is a web-based communication tool that enables two-way instant messaging between users. It is built using Node.js, Socket.IO, HTML/CSS, and JavaScript, and uses a MySQL database to persist chat messages. The project demonstrates a strong integration of frontend and backend technologies, providing an interactive and real-time chatting experience in a dual-panel layout.

Project Overview:
This project consists of a user-friendly interface that allows two users—referred to as Sender and Receiver—to exchange messages in real time. The application uses WebSockets (via the Socket.IO library) to achieve real-time bidirectional communication, which ensures messages are instantly broadcasted and displayed on both users' screens without page reloads.

Each user inputs their name and message in their respective panels. Once a message is sent, it is instantly visible to both sender and receiver, styled with chat bubbles. The application maintains a responsive and elegant design using custom CSS and animation for a smooth user experience.

Frontend Details:
The frontend is built with HTML, CSS, and vanilla JavaScript. It features:

A split layout with separate panels for the sender and receiver.

Input fields for name and message with a clean form design.

Message display areas styled with animated and color-coded message bubbles.

Responsive design that adapts to various screen sizes for usability across devices.

The interface enhances usability with clear visual distinctions between messages sent by the user and those received from others.

Backend Architecture:
The backend is powered by Node.js with an integrated Socket.IO server that listens for client connections and message events. Key backend features include:

An HTTP server serving static files such as index.html, style.css, and the client-side socket.io.js script.

Real-time handling of chat message events, which includes:

Broadcasting the message to all connected clients.

Saving messages to a MySQL database for persistence.

A MySQL database named chatdb is used, with a messages table storing each message along with the sender’s name. Upon a new connection, the server retrieves and displays all previous messages to maintain chat history.

Database Integration:
A MySQL2 connection is established within the backend (index.js) to manage database operations:

Fetching stored messages and sending them to newly connected clients.

Inserting new chat entries into the database to maintain a complete log of conversations.

This integration ensures data durability and allows the application to serve as more than just a temporary chat—users can see previous exchanges on reload.

Key Technologies Used:
Frontend: HTML5, CSS3, JavaScript

Backend: Node.js, Socket.IO

Database: MySQL

Additional Tools: MySQL2 package, animations, and responsive design principles

Conclusion:
The Real-Time Chat Application is a practical demonstration of modern web development techniques and real-time communication using WebSockets. It successfully integrates frontend aesthetics with backend functionality and data persistence, making it suitable for learning, demonstrations, or as a foundation for more advanced chat systems. With scalability and modularity in mind, this project serves as a solid starting point for future enhancements such as user authentication, group chats, or media attachments.

OUTPUT- 

![Image](https://github.com/user-attachments/assets/bf2c2831-516c-4c6f-b20c-98e14417f6a9)
