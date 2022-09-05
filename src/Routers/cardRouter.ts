import { Router } from "express";
import { createCard, activeCard } from "../Controllers/cardControllers";
import { validateSchema } from "../Middlewares/schemaValidator";
import cardSchema from "../Schemas/cardSchema";
import {validateAPIkey} from "../Middlewares/apiKeyValidator"

const cardRouter = Router();

cardRouter.post('/createCard/:id', validateAPIkey, validateSchema(cardSchema), createCard);
cardRouter.put('/activateCard',validateSchema(cardSchema), activeCard);
cardRouter.put('/lockCard',validateSchema(cardSchema), activeCard);
cardRouter.put('/unlockCard',validateSchema(cardSchema), activeCard);
cardRouter.get('/viewSold',validateSchema(cardSchema), activeCard);

export default cardRouter;