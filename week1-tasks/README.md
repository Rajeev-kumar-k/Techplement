# Quote of the Day - Week 1 Task

This is a simple full-stack web application that displays a random quote and allows users to search for quotes by author.  
Built as part of **Techplement Internship - Week 1 Task**.

---

## Features
- Fetches and displays a **random quote** from the backend
- Allows searching quotes by **author name**
- Responsive **frontend** (HTML, CSS, JavaScript)
- Backend powered by **Node.js + Express**
- Quotes stored in **MySQL database**
- Styled with clean UI for better user experience

---

## Tech Stack
**Frontend**
- HTML, CSS, JavaScript  

**Backend**
- Node.js
- Express.js
- CORS
- Dotenv

**Database**
- MySQL

---

##  Project Structure
Techplement/
│── week1-tasks/
│ ├── frontend/ # HTML, CSS, JS files
│ │ ├── index.html
│ │ ├── style.css
│ │ └── script.js
│ │
│ └── backend/ # Node.js + Express + MySQL backend
│ ├── server.js
│ ├── db.js
│ ├── package.json
│ └── .env

---

## Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Rajeev-kumar-k/Techplement.git
cd Techplement/week1-tasks
2️⃣ Setup Backend
bash
Copy code
cd backend
npm install
Create a MySQL database:

sql
Copy code
CREATE DATABASE quotesdb;
Inside quotesdb, create the quotes table:

sql
Copy code
CREATE TABLE quotes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  content TEXT NOT NULL,
  author VARCHAR(255) NOT NULL
);
Insert sample quotes:

sql
Copy code
INSERT INTO quotes (content, author) VALUES
('In the middle of difficulty lies opportunity.', 'Albert Einstein'),
('The only limit to our realization of tomorrow is our doubts of today.', 'Franklin D. Roosevelt');
Create a .env file inside backend/:

env
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=quotesdb
PORT=5000
Start the backend:

bash
Copy code
npm start
Your backend runs at: http://localhost:5000

3️⃣ Setup Frontend
Open frontend/index.html in a browser (or use Live Server in VS Code).

The app will connect to the backend and display quotes.