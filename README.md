# What's Up Guys - Real-Time Chat Application

## 📌 Introduction
What's Up Guys is a real-time chat application built using the MERN stack with WebSockets for seamless communication. It allows users to sign up, log in, and chat in real time with other users.

## 🚀 Features
- User authentication (signup/login/logout)
- Real-time messaging with WebSockets
- Secure password encryption and decryption
- UI built with Tailwind CSS and DaisyUI
- API endpoints for user and message management
- State management with Redux Toolkit
- MongoDB for data storage
- RESTful API for communication between frontend and backend
- Thunder Client used for API testing

## 🛠️ Tech Stack
### **Frontend**
- **HTML, CSS, Tailwind CSS, DaisyUI** - For responsive UI design
- **JavaScript** - Core programming language
- **React** - Component-based UI framework
- **Redux Toolkit** - State management

### **Backend**
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Backend framework for handling routes and APIs
- **MongoDB & Mongoose** - NoSQL database for storing users and messages
- **WebSockets (Socket.IO)** - Real-time bidirectional communication
- **Password Encryption & Decryption** - Secure user authentication using bcrypt
- **Thunder Client** - API testing tool

## 📂 Project Structure
```
GupShup/
├── client/               # Frontend (React)
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Application pages
│   │   ├── store/       # Redux store
│   │   ├── App.js       # Main React component
│   │   ├── index.js     # Entry point
│   ├── public/GupShup/
├── client/               # Frontend (React)
│   ├── node_modules/     # Dependencies
│   ├── src/             # Source files
│   │   ├── components/  # UI components
│   │   ├── pages/       # Application pages
│   │   ├── store/       # Redux store
│   │   ├── App.js       # Main React component
│   │   ├── index.js     # Entry point
│   ├── .env             # Environment variables
│   ├── .gitignore       # Git ignore file
│   ├── eslint.config.js # ESLint configuration
│   ├── index.html       # HTML entry point
│   ├── package.json     # Frontend dependencies
│   ├── tailwind.config.js # Tailwind configuration
│   ├── vite.config.js   # Vite configuration
│   ├── postcss.config.js # PostCSS configuration
│   ├── package-lock.json # Lockfile
├── server/               # Backend (Express, Node.js)
│   ├── controllers/     # API controllers
│   ├── db/             # Database connection
│   ├── middlewares/    # Middleware functions
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── socket/         # WebSocket handlers
│   ├── utilities/      # Utility functions
│   ├── .env            # Environment variables
│   ├── .gitignore      # Git ignore file
│   ├── server.js       # Main server file
│   ├── package.json    # Backend dependencies
│   ├── package-lock.json # Lockfile
│   ├── README.md       # Documentation
├── server/               # Backend (Express, Node.js)
│   ├── controllers/     # API controllers
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── server.js       # Main server file
├── README.md             # Documentation
└── package.json          # Project metadata
```

## ⚙️ Installation & Setup
### Prerequisites
- Node.js & npm installed
- MongoDB set up locally or on MongoDB Atlas

### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/gup-shup.git
   cd gup-shup
   ```

2. **Install dependencies**
   ```sh
   # Install frontend dependencies
   cd client
   npm install
   
   # Install backend dependencies
   cd ../server
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the `server/` directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the application**
   ```sh
   # Start the backend server
   cd server
   npm start
   
   # Start the frontend
   cd ../client
   npm start
   ```

## 📌 API Endpoints
| Method | Endpoint          | Description |
|--------|------------------|-------------|
| POST   | /api/auth/signup | User signup |
| POST   | /api/auth/login  | User login  |
| GET    | /api/users       | Get users   |
| POST   | /api/messages    | Send message |
| GET    | /api/messages    | Fetch messages |

## 👨‍💻 Author
- **Atul Krishna**
---
Feel free to contribute, fork, and enhance What's Up Guys! 🎉
