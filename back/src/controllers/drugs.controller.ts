import {Request, Response} from "express"
import drugsService from "../services/drugs.service"


async function getDrugs(req:Request, res:Response){
    
}
async function createDrug(req:Request, res:Response){
    const {body} = req

    await drugsService.createDrug(body)

    res.sendStatus(200)
}

async function deleteDrug(req:Request, res:Response){
    
}
export default {getDrugs, createDrug , deleteDrug}