require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.use(cors());
app.use(express.json());

/* MongoDB Connection */

mongoose.connect(
  process.env.MONGO_URI || 
  "mongodb+srv://suregowthamkumar_db_user:12345@portfolio.nnzj0fs.mongodb.net/portfolio?retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log(err));

/* API Routes */

app.use("/api/projects", projectRoutes);

app.get("/api", (req,res)=>{
  res.send("Portfolio Backend Running");
});

/* Serve React build in production */

if(process.env.NODE_ENV === "production"){

  const __dirnamePath = path.resolve();

  app.use(express.static(path.join(__dirnamePath, "../client/build")));

  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirnamePath,"../client/build/index.html"));
  });

}

/* Port */

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});
