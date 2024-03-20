import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDataBase } from './utils/data'
import { product } from './router/product'
import { user } from './router/user'
import { order } from './router/order'
import { mainCategory } from './router/mainCategory'
import { subCategory } from './router/subCategory'

const app = express()
dotenv.config()
connectDataBase()


app.use(cors());
app.use(express.json())
app.use("/product", product)
app.use('/sign', user)
app.use("/", order)
app.use("/" , mainCategory)
app.use("/" , subCategory)


const PORT = process.env.PORT || 8000
app.get('/', (req, res) => {
    res.status(200).send({ succes: true, msg: 'hi' })
})
app.listen(PORT, () => {
    console.log(`${PORT} server on`);

})
