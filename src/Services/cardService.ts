import * as cardRepository from "../repositories/cardRepository";
import * as employeeRepository from "../repositories/employeeRepository"
import { Request, Response } from "express";



export async function createCard(employeeId: number, res: Response) {
   // title must be unique
   const existingEmployed = await employeeRepository.findById(employeeId);
   if (!existingEmployed) {
       return res.status(401).send("No API send."); 
     }
   
 
   const cardData: cardRepository.CardInsertData = {
       number: "",
       employeeId: employeeId,
       cardholderName: "",
       securityCode: "",
       expirationDate: "",
       isVirtual: false,
       isBlocked: false,
       type: "groceries"
   }
 
   await cardRepository.insert(cardData);
}
