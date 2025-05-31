
# 📸 Pixisphere Backend

**Pixisphere** is a backend system for an AI-powered photography service marketplace. This project simulates a production-grade backend for managing clients, photographers (partners), and admins using secure role-based authentication and multi-model databases.

---

## 🚀 Features

- ✅ **Role-Based Auth (JWT)** – Client, Partner, and Admin roles
- ✅ **Authentication** – Signup/Login with role assignment
- ✅ **Partner Onboarding** – Document submission and verification flow
- ✅ **Smart Lead Management** – Clients submit inquiries; partners receive matched leads
- ✅ **Portfolio Management** – Partners upload and manage portfolios
- ✅ **Admin Tools** – Moderation, verification approvals, KPI statistics
- ✅ **MongoDB + PostgreSQL** – Multi-database architecture
- ✅ **ES Modules + Clean Folder Structure**

---

## **DEMO VIDEO**

https://github.com/user-attachments/assets/8230d73e-ba18-4471-aba7-1c61e1793270



## 🧱 Tech Stack



| Component      | Technology           |
|----------------|----------------------|
| Language       | Node.js (ES Modules) |
| Framework      | Express.js           |
| Auth           | JWT, Bcrypt          |
| Database (SQL) | PostgreSQL + Sequelize |
| Database (NoSQL)| MongoDB + Mongoose |
| Environment    | dotenv               |
| Dev Tools      | Nodemon, Postman     |

---

## 📁 Folder Structure

```

backend/
├── app.js
├── .env
├── Dockerfile (optional)
├── config/
│   ├── db.mongo.js
│   └── db.pg.js
├── controllers/
├── middlewares/
├── models/
│   ├── mongo/
│   └── postgres/
├── routes/
├── services/
├── utils/
└── README.md

````

---

## ⚙️ Setup & Installation

### 📦 Requirements

- Node.js ≥ 18.x
- MongoDB running locally (default: `mongodb://localhost:27017`)
- PostgreSQL running locally (default: `postgres://postgres:postgres@localhost:5432`)

---

### 🔧 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/pixisphere-backend.git
cd pixisphere-backend

# Install dependencies
npm install
````

---

### 🔐 Create `.env` File

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/pixisphere
PG_URI=postgres://postgres:postgres@localhost:5432/pixisphere
JWT_SECRET=supersecretjwt
```

---

### 🧠 Create PostgreSQL Database

Login to `psql` and run:

```sql
CREATE DATABASE pixisphere;
```

Or use pgAdmin.

---

### ▶️ Run the App

```bash
npm start
```

Visit: `http://localhost:5000`

---

## 📬 API Endpoints

| Method | Endpoint                     | Role    | Description                        |
| ------ | ---------------------------- | ------- | ---------------------------------- |
| POST   | `/api/auth/signup`           | All     | Register with role                 |
| POST   | `/api/auth/login`            | All     | Login and receive JWT              |
| POST   | `/api/inquiry`               | Client  | Submit a service inquiry           |
| GET    | `/api/partner/leads`         | Partner | View matched leads                 |
| POST   | `/api/partner/portfolio`     | Partner | Add to portfolio                   |
| PUT    | `/api/partner/portfolio`     | Partner | Update portfolio item              |
| DELETE | `/api/partner/portfolio/:id` | Partner | Delete portfolio item              |
| GET    | `/api/admin/verifications`   | Admin   | List pending verifications         |
| PUT    | `/api/admin/verify/:id`      | Admin   | Approve/Reject partner application |
| GET    | `/api/admin/stats`           | Admin   | Platform KPIs                      |

---

## 🔒 Authentication

All protected routes require a JWT in the header:

```
Authorization: Bearer <your_token_here>
```

Roles enforced using middleware:

* `authenticate` – validates JWT
* `authorize('admin')` – restricts to specific role(s)

---

## 🧪 Sample Test Users

```json
{
  "client": {
    "email": "client@example.com",
    "password": "123456"
  },
  "partner": {
    "email": "partner@example.com",
    "password": "123456"
  },
  "admin": {
    "email": "admin@example.com",
    "password": "admin123"
  }
}
```

---

## 🧰 Developer Scripts

```bash
npm start       # Start server
npm run dev     # Start with nodemon
```

---

## 💡 Future Improvements

* Swagger/OpenAPI Documentation
* Image upload to S3/Cloudinary
* Unit & integration tests using Jest
* Rate Limiting & Audit Logging
* Docker support (included as optional)

---

## 👨‍💻 Author

**Ujjwal** – Backend Developer

---

## 📄 License

This project is for academic and interview evaluation purposes only. Not intended for production use without enhancements.

---
