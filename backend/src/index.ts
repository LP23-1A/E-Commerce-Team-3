import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDataBase } from './utils/data'
import { product } from './router/product'
dotenv.config()
const start =()=>{
    connectDataBase()

    const app = express()

    app.use(express.json())
    app.use("/product" , product)

    const PORT = process.env.PORT || 8000
    app.get('/',(req,res)=>{
        res.status(200).send({succes:true, msg:'hi'})
    })
    app.listen(PORT,()=>{
        console.log(`${PORT} server on`);
        
    })
}
start()