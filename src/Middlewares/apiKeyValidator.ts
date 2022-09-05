import {findByApiKey} from "../repositories/companyRepository";
import { NextFunction, Request, Response } from "express";

declare module 'http' {
    interface IncomingHttpHeaders {
        "x-api-key"?: string
    }
}

export async function validateAPIkey(req: Request, res: Response, next:NextFunction) {
    const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(401).send("No API send."); 
  }

  try {
    const existsApikey = await findByApiKey(apiKey);
   
    if (!existsApikey) {
      return res.status(401).send("Session not found."); // unauthorized
    }

   
  
   
    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500); // server error
  }  
}