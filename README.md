#  Finance Tracker Backend API

A scalable backend system for managing financial transactions with JWT authentication, role-based access control, and dashboard analytics.

---

## 🌐 Live API

https://finance-tracker-backend-4-veya.onrender.com

---

## 📌 Features

- 🔐 User Authentication (JWT-based)
- 👥 Role-Based Access Control (Admin, Analyst, Viewer)
- 💸 Transaction Management (CRUD APIs)
- 📊 Dashboard Summary APIs (Aggregated Data)
- ⚠️ Input Validation & Error Handling
- 🧱 Clean Architecture (MVC + Service Layer)

---

## 🧱 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JSON Web Tokens (JWT)  
- **Security:** bcrypt (password hashing)

---

## 📁 Project Structure
src/
│
├── controllers/ # Request handling logic
├── models/ # Database schemas
├── routes/ # API routes
├── services/ # Business logic (dashboard)
├── middleware/ # Auth & role-based access
├── config/ # Configuration files
├── utils/ # Utility functions
└── app.js # Entry point
