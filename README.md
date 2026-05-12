# 🎬 Chill Streaming API - Advanced Backend Architecture

This project is a RESTful API implementation for a movie streaming platform (Chill). The development focuses on building a solid Backend architecture using Node.js and MySQL, prioritizing Separation of Concerns, dynamic data manipulation, local storage management, and advanced security protocols including JWT authentication and SMTP email verification.

## 🛠️ Tech Stack

This project is built using a modern Backend ecosystem:

- **Runtime Environment**: Node.js
- **Web Framework**: Express.js
- **Database**: MySQL (using `mysql2` driver with Connection Pool).
- **Core Security**: `bcrypt` (one-way password encryption), `cors` (Cross-Origin Resource Sharing), and `dotenv` (Environment variable protection).
- **Authentication**: `jsonwebtoken` (JWT) for stateless identity verification.
- **File Management**: `multer` for robust local file upload handling.
- **Communication Protocol**: `nodemailer` functioning as an SMTP client alongside `uuid` (v4) for generating cryptographically secure verification tokens.

## 📂 Project Structure

This project enforces the Separation of Concerns (SoC) principle. While currently straightforward, it strictly separates business logic from routing.

```bash
chill-backend/
├── database/     # Blueprint files (.sql) for database recreation.
├── postman/      # Postman Collection (.json) as the API interaction manual.
├── src/
│   ├── config/       # MySQL database connection bridge.
│   ├── middleware/   # Security gatekeepers (e.g., JWT extraction & validation).
│   ├── routes/       # URL management and HTTP behavior.
│   ├── services/     # Pure business logic, DB queries, and external service configurations (Multer/SMTP).
├── uploads/      # Physical local storage for user-uploaded images.
├── .env.example  # Setup guide for environment variables.
├── index.js      # Main Entry Point.
└── package.json  # Project identity and dependency map.
```

Note: The current architecture utilizes a streamlined Services-Routes pattern. Implementation of dedicated Controllers and Models is designated for future scaling.

## 📅 Execution Timeline (Mission 1 Advanced)

Development is structured logically, ensuring security gates are established before complex data manipulation is allowed.

- **Session 1 (May 3): Account Foundation & Encryption.**
  Modified database schema to include fullname. Rebuilt Register logic ensuring absolute password hashing via bcrypt before database insertion.
- **Session 2 (May 4): VIP Access & Gatekeeper.**
  Implemented JWT generation upon successful login. Deployed an Authentication Middleware to intercept and protect private routes, returning 401 Unauthorized for invalid access.
- **Session 3 (May 7): Core Data Manipulation.**
  Overhauled the GET /movies route. Engineered a Dynamic SQL Assembly system to handle req.query for Search, Filter, and Sort capabilities simultaneously without syntax collision.
- **Session 4 (May 9): Local File Expedition.**
  Implemented multer for image uploads. Configured destination to the local /upload folder with strict file type and size limitations.
- **Session 5 (May 11): Mail Feature (High Risk).**
  Engineered account verification via Nodemailer. Integrated UUID v4 generation during registration , SMTP email dispatch , and a validation GET route to ensure system and user data integrity.

## 🏗️ Architecture and Security Highlights

The backend logic is designed to anticipate failure and prevent malicious exploitation:

- **JWT Authorization Pipeline:** The middleware actively intercepts requests by splitting the Bearer token , verifying it against the secret key , and injecting the payload into req.user. Invalid tokens immediately trigger a rejection.
- **Dynamic SQL & Injection Prevention:** The search and filter feature does not use static string concatenation. It utilizes a conditions array for SQL clauses and a values array to enforce Prepared Statements , inherently neutralizing SQL Injection attacks.
- **Defensive File Handling (Callback Trap):** Multer execution in the routes is wrapped inside a callback function. This prevents Multer from throwing raw HTML 500 errors to the client during validation failures (e.g., wrong format).
- **Storage Efficiency (Silent Failure):** When a user updates their profile picture, the system utilizes fs.unlink to destroy the old physical file (Orphaned Files prevention). This is wrapped in an independent try...catch block so that if file deletion fails, the main database update process remains unaffected.
- **Atomic Verification & Anti-Information Leakage:** The verification system is built to protect server infrastructure from bot floods.
  - If the SMTP transporter fails to send the verification email, a DELETE query is triggered to erase the newly registered data, preventing "zombie accounts"
  - The 403 Forbidden verification check during login is deliberately placed after bcrypt password validation to prevent Information Leakage (stopping attackers from guessing registered emails).

## ⏩ Future Work

To bring this API to a production-ready level, several areas that need to be implemented in the next development cycle are:

- **Subscription Package Management**: Adding a dedicated GET route to serve the package selection page with subscription prices to users.

- **Transaction Gateway (Order & Payment)**: Implementing a POST route to record subscription decisions (checkout) and a GET route for user billing history.

- **Frontend Integration:** Transitioning this API into a fully functional application by integrating it with a frontend framework to create a complete user interface.

## 🚀 How to Use (Cross-Machine Installation)

1. **Repository Preparation:** Clone this repository and run npm install.

2. **Database Construction:** Import the .sql file located in the database/ folder into MySQL to build the schema structure.

3. **Environment Setup:** Copy .env.example to .env.
   - Configure your MySQL connection.
   - Set up your JWT_SECRET.
   - Add your Google App Password (16 digits) for Nodemailer.

4. **Igniting the Server:** Run npm run dev (if using Nodemon) or node index.js.

5. **Testing API Functionality:** Import the Postman Collection (.json) from the postman/ directory to test all endpoints.

## 👨‍💻 Author

Muhammad Fachrezi Barus

- 🔗 LinkedIn: https://www.linkedin.com/in/muhammad-fachrezi-barus/
- 📧 Email: fachrezibarus@gmail.com

## 📝 License

This project is created for educational and portfolio purposes. Feel free to use and modify it with proper credit.
