import { Request, Response } from "express"
import { Movie } from "../entities"
import { moviesServices } from "../services"
import { Pagination } from "../interfaces/pagination.interfaces"

const createMovie = async ( request : Request, response : Response) : Promise<Response> => {
    
    const movie : Movie = await moviesServices.createMovie(request.body)

    return response.status(201).json(movie)
}

const  getMovies =async ( request : Request, response : Response) : Promise<Response> => {
    const { paginationList } = response.locals
    const moviesList : Pagination = await moviesServices.getMovies(paginationList)

    return response.status(200).json(moviesList)
}

const updateMovie =async ( request : Request, response : Response) : Promise<Response> => {
    const { verifiedId } = response.locals
    const updatedMovie : Movie = await moviesServices.updateMovie(verifiedId, request.body)

    return response.status(200).json(updatedMovie)
}

const deleteMovie =async ( request : Request, response : Response) : Promise<Response> => {
    const { verifiedId } = response.locals
    await moviesServices.deleteMovie(verifiedId)
    
    return response.status(204).json()
}

export default{ 
    createMovie,
    getMovies,
    updateMovie,
    deleteMovie
}