import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import { errorHandler } from "./configs/middleware.js";

const PORT = process.env.PORT;
const app = express(); //Library express initialized
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);

// route / path
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello World",
    });
});

// route / path
app.use("*", (req, res) => {
    res.status(404).json({
        message: "not found",
    });
});

// error handling
app.use(errorHandler);

// start the server
app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});
