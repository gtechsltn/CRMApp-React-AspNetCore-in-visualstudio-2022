# CRMAppReactAspNetCore

A full-stack CRM (Customer Relationship Management) demo application built with React.js frontend and ASP.NET Core Web API backend. The app uses MongoDB for data storage and implements role-based access control with three roles: Admin, Super, and Customer.

---

## Features

- **User Authentication** with JWT tokens.
- Role-based authorization for Admin, Super, and Customer users.
- User registration with role assignment.
- Protected routes with React Router.
- Clean UI built with React functional components and hooks.
- Backend API built with ASP.NET Core Web API.
- MongoDB integration via an ORM (e.g., MongoDB.Driver).
- User management page (add users with roles).
- Dashboard pages tailored per user role.
- Persistent login with localStorage.
- Basic error handling and notifications.

---

## Tech Stack

- **Frontend:** React.js, React Router, Axios
- **Backend:** ASP.NET Core Web API (.NET 7+)
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **ORM:** MongoDB.Driver (official MongoDB driver for .NET)

---

## Screenshots

### Login Page
![Login Page](screenshots/crmlogin.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Add User Form
![Add User](screenshots/adduser.png)

### Register Page
![Register Page](screenshots/crmregister.png)


## Prerequisites

- [.NET 7 SDK or later](https://dotnet.microsoft.com/en-us/download)
- [Node.js 18+](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) installed locally or use MongoDB Atlas
- Visual Studio 2022 or any IDE of your choice

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/CRMAppReactAspNetCore.git
cd CRMAppReactAspNetCore
2. Backend Setup (ASP.NET Core API)

Navigate to the backend project folder, e.g., CRMAppReactAspNetCore.Api.

Update the connection string for MongoDB in appsettings.json:

"ConnectionStrings": {
  "MongoDb": "mongodb://localhost:27017/CRMDatabase"
}


Update JWT configuration in appsettings.json:

"Jwt": {
  "Key": "your-secret-key-here",
  "Issuer": "yourapp",
  "Audience": "yourappusers"
}


Run the backend API:

dotnet run


The API should be available at https://localhost:7018/ (or your configured port).

3. Frontend Setup (React.js)

Navigate to the React client folder, e.g., crmappreactaspnetcore.client.

Install dependencies:

npm install


Start the React development server:

npm start


By default, React runs on http://localhost:3000 and proxies API requests to the ASP.NET Core backend.

Usage

Register a new user with the role Super to manage users.

Login with your credentials.

Based on your role, you will be redirected to your respective dashboard.

Super users can navigate to User Management to add Admins or Customers.

Admins and Customers have access to their dashboards only.

Project Structure
/CRMAppReactAspNetCore
├── /crmappreactaspnetcore.client       # React frontend
│   ├── /src
│   │   ├── /components                 # Reusable components (Navbar, Login, Register, etc.)
│   │   ├── /context                    # React context for auth state
│   │   ├── /dashboards                 # Role-based dashboard pages
│   │   ├── /routes                     # Protected routes and route guards
│   │   └── /services                   # Axios API wrapper
├── /CRMAppReactAspNetCore.Api          # ASP.NET Core Web API backend
│   ├── /Controllers                    # API Controllers
│   ├── /Models                         # Database Models
│   ├── /Services                       # Business logic, token generation, etc.
│   └── Program.cs / Startup.cs         # App setup and middleware
└── README.md                          # This file

Security

Passwords are currently stored as plain text for demo purposes — please use hashed passwords in production!

JWT tokens expire after 1 hour.

Use HTTPS in production environments.

Ensure your JWT secret key is secure and never committed to public repos.

Future Improvements

Add user editing and deleting functionality.

Implement password hashing with bcrypt.

Add refresh tokens for seamless authentication.

Add better UI with Material-UI or Tailwind CSS.

Implement logging and error tracking.

Add tests (unit/integration) for backend and frontend.

License

This project is open source under the MIT License. See LICENSE
 for details.
