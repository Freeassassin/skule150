import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// const http = require("http");
// const { Server } = require("socket.io");

// const server = http.createServer(App);
// const io = new Server(server, {
//   cors: { origin: "*", methods: ["GET", "POST", "PUT", "PATCH", "DELETE"] },
// });

// server.listen(process.env.PORT || 5001, () => {
//   console.log(`Server is running on port: http://localhost:5001`);
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
