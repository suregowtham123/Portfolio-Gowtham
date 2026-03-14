# 🌐 Gowtham's Developer Portfolio (MERN Stack)

This project is a **full-stack developer portfolio website** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.
It showcases my **projects, skills, research papers, certifications, and achievements** in a modern and interactive web application.

The backend provides API endpoints to serve project data, while the React frontend displays the information in a clean and responsive UI.

---


# 📌 Features

### 👨‍💻 Hero Section

* Developer introduction
* Resume download
* Social media links (LinkedIn, GitHub, Email, etc.)

### 📖 About Section

* Professional summary
* Key highlights and achievements

### 🛠 Skills Section

Displays technical skills including:

* JavaScript
* React
* Node.js
* Express.js
* MongoDB
* Python
* Machine Learning
* DevOps Tools
* Cloud Technologies

### 📂 Projects Section

Projects are **dynamically fetched from the backend API**.

Each project includes:

* Title
* Description
* GitHub repository link

Example projects included:

* Typhoon Detection using AI
* Brain Stroke Prediction
* NLP Product Review Analysis
* Ride Together Smart Carpooling App

### 🏆 Achievements Section

Divided into:

**Technical**

* Research paper published:
  *Heart Stroke Prediction Using Neural Networks (IJACEN – May 2025)*

**Non-Technical**

* 2 Badminton medals
* 2 Cricket medals

### 📄 Research Papers

Users can **download research papers directly from the portfolio**.

Example:

* Heart Stroke Prediction Using Neural Networks
* An Integrated NLP System for Verdict Generation from YouTube and Product Reviews via Telegram Bot

### 📜 Certifications

Certifications from:

* Coursera
* Microsoft
* Scaler Academy
* IIT Bombay

Certificates can be viewed in **full-screen preview**.

### 📬 Contact Section

Provides:

* Phone number
* Email
* LinkedIn
* Instagram

---

# 🧰 Tech Stack

### Frontend

* React.js
* CSS / Tailwind Styling
* Axios
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* REST API

### Deployment

* Render
* GitHub

---

# 🏗 Project Structure

```
Portfolio-Gowtham
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── assets
│   │   └── App.js
│   │
│   └── package.json
│
├── server
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation (Local Setup)

### 1️⃣ Clone Repository

```
git clone https://github.com/suregowtham123/Portfolio-Gowtham.git
cd Portfolio-Gowtham
```

---

### 2️⃣ Install Backend Dependencies

```
cd server
npm install
```

---

### 3️⃣ Install Frontend Dependencies

```
cd ../client
npm install
```

---

### 4️⃣ Setup Environment Variables

Create a `.env` file inside the **server folder**

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

### 5️⃣ Run Backend

```
cd server
npm start
```

---

### 6️⃣ Run Frontend

```
cd client
npm start
```

Frontend runs on:

```
http://localhost:3000
```

Backend runs on:

```
http://localhost:5000
```

---

# 🌍 Deployment

This project is deployed using **Render**.

Steps used:

1. Push project to GitHub
2. Create a Web Service on Render
3. Set build command

```
cd client && npm install && npm run build
```

4. Start server

```
node server/server.js
```

5. Configure environment variables on Render

---

# 📊 API Endpoints

```
GET /api/projects
```

Returns the list of projects displayed in the portfolio.

---

# 👨‍💻 Author

**Sure Gowtham**

Computer Science Engineer
Full Stack Developer | AI Enthusiast | Machine Learning Explorer

LinkedIn
https://www.linkedin.com/in/sure-gowtham-577692278/

GitHub
https://github.com/suregowtham123

---

# ⭐ Future Improvements

* Blog section for technical articles
* Admin dashboard to manage projects
* Dark / Light theme toggle
* Contact form with email integration

---

# 📜 License

This project is open source and available under the **MIT License**.
