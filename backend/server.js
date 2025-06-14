const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const connect = require('./connectDB');
const postRoutes=require("./routes/route");
dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

connect();

app.use("/api/posts",postRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log("listning server"));