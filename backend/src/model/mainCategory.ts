import mongoose  from 'mongoose'
const mainCategorySchema = new mongoose.Schema ({
    mainCategoryName : String
},{timestamps:true})

const mainCategoryModel = mongoose.model ("mainCategory" , mainCategorySchema)
export {mainCategoryModel}