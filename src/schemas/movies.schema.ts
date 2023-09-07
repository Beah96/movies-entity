import { z } from "zod"

const movieSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50),
    description: z.string().nullish(),
    duration: z.number().positive(),
    price: z.number().positive().int()
})

const movieCreateSchema = movieSchema.omit({id: true})
const movieListSchema = movieSchema.array()
const movieUpdateSchema = movieSchema.partial()

export{
    movieSchema,
    movieCreateSchema,
    movieListSchema, 
    movieUpdateSchema
}