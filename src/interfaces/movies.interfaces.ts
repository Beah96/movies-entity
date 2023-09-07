import { z } from "zod";
import { movieCreateSchema, movieListSchema, movieSchema } from "../schemas/movies.schema";
import { DeepPartial } from "typeorm";
import { Movie } from "../entities";

type Movies = z.infer<typeof movieSchema>

type MovieCreate = {
    name: string,
    description?: string,
    duration: number,
    price: number
}

type MovieListReturn = Array<Movie>

type MovieUpdate = DeepPartial<Movie>

export{
    Movies,
    MovieCreate,
    MovieListReturn, 
    MovieUpdate
}
