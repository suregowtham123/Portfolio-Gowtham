const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://suregowthamkumar_db_user:12345@portfolio.nnzj0fs.mongodb.net/portfolio?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log(err));

app.use("/api/projects", projectRoutes);

app.get("/", (req,res)=>{
    res.send("Portfolio Backend Running");
});

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log("Server running on port 5000");
});