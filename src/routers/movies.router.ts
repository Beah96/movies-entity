import { Router } from "express";
import middlewares from "../middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schemas/movies.schema";
import { moviesControllers } from "../controllers";

const movieRouter : Router = Router()

movieRouter.post("",
    middlewares.validateBody(movieCreateSchema),
    middlewares.verifyName,
    moviesControllers.createMovie
)

movieRouter.get("",
    middlewares.listPagination,
    moviesControllers.getMovies
)

movieRouter.patch("/:id",
    middlewares.verifyId,
    middlewares.verifyName,
    middlewares.validateBody(movieUpdateSchema),
    moviesControllers.updateMovie    
)

movieRouter.delete("/:id",
    middlewares.verifyId,
    moviesControllers.deleteMovie
)

export default  movieRouter