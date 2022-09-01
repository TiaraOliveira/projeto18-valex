import { Router } from "express";
import { createCard } from "../Controllers/cardControllers";

const cardRouter = Router();

cardRouter.post("/createCard", createCard);


export default cardRouter;