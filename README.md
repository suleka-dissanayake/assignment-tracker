# 📚 Student Assignment & Deadline Tracker

A RESTful API backend system that helps students manage their assignments, track deadlines, and organize subjects — built with Node.js, Express.js, and MongoDB.

---

## 📌 Problem Description

Students in higher education struggle to keep track of multiple assignments across different subjects and modules. Missing deadlines or losing track of priorities leads to poor academic performance and unnecessary stress. There is a need for a simple, centralized system where students can log, monitor, and manage their assignments effectively.

---

## 💡 Proposed Solution

A backend REST API that allows students to:
- Add and manage their subjects
- Create assignments with deadlines and priority levels
- Track the status of each assignment (pending, in-progress, completed)
- View upcoming assignments due within the next 7 days

---

## ✨ Features

- Add, view, update, and delete **subjects**
- Add, view, update, and delete **assignments**
- Filter assignments by **upcoming deadlines** (next 7 days)
- Update assignment **status** (pending / in-progress / completed)
- Set **priority levels** (low / medium / high)
- Proper **error handling** and validation on all routes
- MongoDB relationships — assignments are linked to subjects

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | Server-side runtime |
| Express.js | REST API framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling |
| dotenv | Environment variable management |
| cors | Cross-origin resource sharing |
| Postman | API testing |
| GitHub | Version control |

---

## 📁 Project Structure

```
assignment-tracker/
├── models/
│   ├── Assignment.js       # Assignment schema
│   └── Subject.js          # Subject schema
├── routes/
│   ├── assignments.js      # Assignment CRUD routes
│   └── subjects.js         # Subject CRUD routes
├── .env                    # Environment variables (not pushed)
├── .gitignore
├── package.json
├── server.js               # Main entry point
└── README.md
```

---

## 🔗 API Endpoints

### Subjects

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/subjects` | Add a new subject |
| GET | `/api/subjects` | Get all subjects |
| GET | `/api/subjects/:id` | Get a single subject |
| PUT | `/api/subjects/:id` | Update a subject |
| DELETE | `/api/subjects/:id` | Delete a subject |

### Assignments

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/assignments` | Create a new assignment |
| GET | `/api/assignments` | Get all assignments |
| GET | `/api/assignments/upcoming` | Get assignments due in next 7 days |
| GET | `/api/assignments/:id` | Get a single assignment |
| PUT | `/api/assignments/:id` | Update an assignment |
| DELETE | `/api/assignments/:id` | Delete an assignment |

---

## 📦 API Examples

### Create a Subject
**POST** `/api/subjects`
```json
{
  "name": "Web Services and Technology",
  "code": "IT2234",
  "lecturer": "Mr. Perera"
}
```

### Create an Assignment
**POST** `/api/assignments`
```json
{
  "title": "ICA-03 Web Services Project",
  "description": "Build a REST API using Node.js and MongoDB",
  "subject": "<subject_id>",
  "deadline": "2025-06-10T23:59:00.000Z",
  "status": "pending",
  "priority": "high"
}
```

### Update Assignment Status
**PUT** `/api/assignments/:id`
```json
{
  "status": "in-progress"
}
```

---

## ⚙️ Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (free tier)
- [Postman](https://www.postman.com/) for API testing

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/<your-username>/assignment-tracker.git
cd assignment-tracker
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file in the root folder:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/assignmentTrackerDB
PORT=5000
```

**4. Run the project**
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

**5. Test the API**

Open Postman and send requests to:
```
http://localhost:5000/api/assignments
http://localhost:5000/api/subjects
```

---

## 🧪 Testing

All API endpoints were tested using **Postman**. The exported Postman collection is included in this repository as `AssignmentTracker.postman_collection.json`.

---

## 📋 Evaluation Checklist

- [x] Problem Identification & Relevance
- [x] RESTful API Design
- [x] Node.js + Express.js Backend
- [x] MongoDB Database Integration
- [x] Full CRUD Operations (POST, GET, PUT, DELETE)
- [x] Proper Error Handling & Validation
- [x] Postman API Testing
- [x] GitHub Version Control with meaningful commits
- [x] Clean Code Structure

---


## 📄 License

This project is submitted as an academic assignment for the module IT2234 — Web Services and Technology.
