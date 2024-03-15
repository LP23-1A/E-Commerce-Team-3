import mongoose from 'mongoose'
 
 const connectDataBase = async () => {
    try {
        const  MONGODB_URI : string = process.env.MONGODB_URI || ''
        await mongoose.connect(MONGODB_URI)
    } catch (error: unknown) {
        console.log(error)
        throw new Error('unsuccess')
    }
 }
 export {connectDataBase}