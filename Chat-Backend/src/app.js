import 'reflect-metadata'
import  express from 'express'
import {AppDataSource} from './configs/database.js'
//import userRouter from './routes/user.routes.js';

const app = express();
//app.use (express.json());


await AppDataSource.initialize()
    .then(() => {
        console.log("Hello ")
        console.log('database is initialized')
    })
    .catch((e) => {
        console.log(e)
    })

app.listen(3000,() => {
    console.log('Server is listen on port 3000')
});