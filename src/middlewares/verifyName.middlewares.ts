import { NextFunction, Request, Response } from "express"
import { Movie } from "../entities"
import { movieRepository } from "../repositories"
import { AppError } from "../error"

const verifyName = async (
    request : Request,
    response : Response,
    next : NextFunction
) : Promise<void> =>{

    let name = request.body.name

    const verifyName : Movie | null = await movieRepository.findOne({
        where: { name: `${name}` }
    })

    if(verifyName) {
        throw new AppError("Movie already exists.", 409)
    }

    return next()
}

export {
    verifyName
}