import { MovieCreate, MovieListReturn, MovieUpdate } from "../interfaces"
import { Movie } from "../entities"
import { movieRepository } from "../repositories"
import { Pagination, PaginationParams } from "../interfaces/pagination.interfaces"


const createMovie = async (  payload : MovieCreate ) : Promise<Movie>=>{

    const movie : Movie = movieRepository.create(payload)

    await movieRepository.save(movie)

    return movie
}

const getMovies = async ({page, perPage, prevPage, nextPage, order, sort} : PaginationParams) : Promise<Pagination>=>{

    const [movies, count] : Array<MovieListReturn | number> = await movieRepository.findAndCount({
        order:{ [sort] : order},
        skip: page,
        take: perPage
    })
    
    return {
        prevPage: page <= 1 ? null : prevPage,
        nextPage: count - page <= perPage ? null : nextPage,
        count,
        data: movies
    }

}

const updateMovie = async( movie : Movie, payload : MovieUpdate ) : Promise<Movie> =>{

    return await movieRepository.save({...movie,...payload})

}

const deleteMovie = async (movie : Movie) : Promise<void> =>{
    await movieRepository.remove(movie)
}


export default {
    createMovie,
    getMovies,
    updateMovie,
    deleteMovie
}