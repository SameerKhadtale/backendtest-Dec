import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './Routes/index.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use("/api/v1", router)

app.get('/', function(req,res){res.send('Server Started..')}) 
app.listen("App is running on port 8000 ...")

mongoose.connect()