# 🍲 Food Donation Platform

A web application that connects donors and receivers to reduce food waste and support sustainability.  
Built with **Node.js**, **Express**, **MongoDB**, and a clean frontend interface.

---
>This project was created as part of the Science Day competition to showcase technology for social impact.

## 👥 ZeroWaste Warriors

- **Team Leader / Backend Developer / Database Engineer**: Dhaniya Sri
  - Designed and implemented backend APIs with Express.js  
  - Integrated MongoDB using Mongoose  
  - Integrated frontend with backend APIs  
  - Connected backend and frontend for seamless data flow  

- **UI/Frontend Developers**: Avantika, Haarini, Arumpavai  
  - Responsible for building responsive pages (Donor Dashboard, Receiver Dashboard, Home/Login/Register)  
  - Designed intuitive user interfaces and ensured smooth user experience  
  - Made a clean, modern style frontend
  - styled the website with css to make it attractive

---

## 🚀 Features
- **User Authentication**: Register, login, and logout with secure session handling.
- **Donor Dashboard**: Submit food donations with details like quantity, location, and expiry.
- **Receiver Dashboard**: View available donations (Pending + Requested), update status, and track expiry risk.
- **Geolocation Integration**: Auto-detect location and provide Google Maps links.
- **Status Management**: Donations can be marked as Pending, Requested, or Collected.
- **Responsive UI**: Clean, modern design for both donor and receiver pages.

---

## 🛠️ Tech Stack
- **Frontend**: HTML, CSS, JavaScript (runs via Live Server)
- **Backend**: Node.js, Express.js (runs via npm)
- **Database**: MongoDB (Mongoose ODM)
- **APIs**: Google Maps, OpenStreetMap (Nominatim)

## 📂 Project Structure
```

REPLATE/
├── backend/             # Server-side code
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── server.js
│ ├── frontend/            # Client-side code
│   ├── css/
│   ├── js/
│   └── pages/
│ ├── .env                 # Environment variables (ignored in Git) ├── .gitignore           # Ignore node_modules, logs, secrets, etc.
└── README.md            # Project documentation

```

## ⚙️ Setup & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Dhaniya4/RePlate.git
   cd REPLATE

2. Install backend dependencies
   - cd backend
   - npm install

3. **Configure environment variables**  
   Create a `.env` file inside the `backend/` folder with the following values:

   ```env
   MONGO_URI=mongodb://localhost:27017/food_db
   PORT=4000

4. Run backend and frontend
   - Start backend:
   - npm run dev
   - Backend runs on http://localhost:4000
   - Start frontend: Open frontend/homePage.html with Live Server in VS Code
Frontend runs on http://127.0.0.1:5500 (default Live Server port)

## 🚀 Deployment (Future Work)
- Planned deployment on cloud platforms ( Render + MongoDB Atlas).
- Frontend hosting on GitHub Pages

## demo : 

https://drive.google.com/file/d/1TnGRvgW64KDk6aRQKh-OMsI0vFIXeL1A/view?usp=drive_link