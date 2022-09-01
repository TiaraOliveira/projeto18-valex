import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./Routers/index";
dotenv.config()

const server = express();

server.use(cors(), json());

server.use(router);

const PORT = Number(process.env.PORT) || 5000;

server.listen(PORT, ()=>console.log(`Server running successfully at PORT ${PORT}.`))