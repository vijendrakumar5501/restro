import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnection from "./database/dbConnection.js"
import { errorMiddleware } from './error/erros.js';

import ReservationRouter from "./routes/reservationRoute.js"


const app=express();

dotenv.config({path:"./config/config.env"});


app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "OPTIONS"],
    credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1/feedback",ReservationRouter)

dbConnection();
app.use(errorMiddleware);

export  default app;