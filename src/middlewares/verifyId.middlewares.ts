import { NextFunction, Request, Response } from "express"
import { Movie } from "../entities"
import { movieRepository } from "../repositories"
import { AppError } from "../error"

const verifyId = async (
    request : Request,
    response : Response,
    next : NextFunction
) : Promise<void> =>{
   
    const verifiedId : Movie | null = await movieRepository.findOne({
       where: {id: Number(request.params.id)}
    })

    if(!verifiedId){
        throw new AppError("Movie not found", 404)
    } 

    response.locals = { ... response.locals, verifiedId };

    return next()

}

export {
    verifyId
}