import "express-async-errors"
import express, { Application, json } from 'express'
import "dotenv/config"
import middlewares from './middlewares'
import movieRouter from "./routers/movies.router"

const app : Application = express()
app.use(json())

app.use("/movies", movieRouter)
app.use(middlewares.handleError)

export default app