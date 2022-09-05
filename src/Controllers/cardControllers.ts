import { Request, Response } from "express";
import * as cardService from "../Services/cardService";


export async function createCard(req: Request, res: Response) {
   const {employeeId, type } = req.body;
   const creation = await cardService.createCard(employeeId, res)
   
}

export async function activeCard(req: Request, res: Response) {
   console.log("constrolller")
 }


 export async function viewBalance(req: Request, res: Response) {
    return "oi"
 }

 export async function blockCard(req: Request, res: Response) {
    return "oi"
 }

 export async function unlockCard(req: Request, res: Response) {
    return "oi"
 }