

# A secure Node.js backend application built with Express.js, MongoDB, and JWT authentication 

## Features

- ✅ JWT Authentication
- ✅ Role-based Authorization (User/Admin)
- ✅ CRUD Operations for Users & Tasks
- ✅ MongoDB Atlas Integration
- ✅ Input Validation & Sanitization
- ✅ Secure Password Hashing (bcryptjs)

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JWT
- **Security**: bcryptjs, HTTP-only cookies
- **Environment Management**: dotenv

## API Endpoints

### Authentication
| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| POST   | `/api/auth/signup` | User registration   |
| POST   | `/api/auth/login`  | User login          |
| POST   | `/api/auth/logout` | User logout         |

### User Management
| Method | Endpoint                          | Description                     | Access  |
|--------|-----------------------------------|---------------------------------|---------|
| DELETE | `/api/user/delete/username/:username` | Delete user by username        | Admin   |

### Task Management
| Method | Endpoint               | Description          |
|--------|------------------------|----------------------|
| POST   | `/api/user/tasks`       | Create new task      |
| PUT    | `/api/user/tasks/:id`   | Update task          |
| DELETE | `/api/user/tasks/:id`   | Delete task          |

## Database Models

### User
```javascript
{
  username: String,     // required, unique
  fullname: String,     // required
  email: String,        // required, unique
  password: String,     // required, minLength: 6
  role: String          // required ('user' or 'admin')
}
```

### Task
```javascript
{
  title: String,        // required
  description: String,  // required
  status: String,       // enum: ['Pending', 'In Progress', 'Completed']
  userId: ObjectId,     // reference to User
  createdAt: Date,
  updatedAt: Date
}
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/skygoal-backend.git
   cd skygoal-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```env
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   NODE_ENV=development
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Security Features

- 🔒 Password hashing with bcryptjs
- 🛡️ JWT stored in HTTP-only cookies
- 🔐 Role-based access control
- 🚫 XSS protection via cookie settings
- ✅ Input validation for all endpoints

## Deployment

The application can be deployed to:
- Render
- Railway
- Vercel

Required environment variables:
- `MONGO_URI`
- `JWT_SECRET`
- `PORT`

## Project Structure

```
src/
├── controllers/    # Route handlers
├── models/         # MongoDB models
├── routes/         # Route definitions
├── middlewares/    # Auth middleware
├── utils/          # Helper functions
├── db/             # Database connection
├── services/       # Business logic
└── app.js          # Main application
```

