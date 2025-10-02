import  express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js"
import connectMongoDB from "./db/connectMongoDB.js";
const app=express();
const PORT=process.env.PORT||5000;
app.use(express.json()); /// middle ware runs req,res parse req.body form data
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use('/api/user', taskRoutes);

app.listen(PORT,()=>{
    console.log(`server is running port ${PORT}`);
    connectMongoDB();
});