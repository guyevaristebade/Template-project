import express, { Express } from 'express';
import compression from 'compression'
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import cors from 'cors';
import { UserRouter } from "../routes";


export const app : Express = express();

app.use(compression())
app.use(bodyParser.json());
app.use(cookieParser())

app.use(cors({
    credentials : true,
    origin: process.env.ALLOWED_ORIGIN
}))

app.use('/api/auth', UserRouter)

