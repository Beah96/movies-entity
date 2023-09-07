import app from "./app";
import {AppDataSource} from "./data-source";


AppDataSource.initialize()
.then((): void=>{
        console.log('Database connected!')
        
        // const PORT: number = parseInt(process.env.PORT!) || 3000

        app.listen(3000,()=>{
            console.log("Server is running")
        })
    }).catch(err =>{
        console.log(err)
    })
