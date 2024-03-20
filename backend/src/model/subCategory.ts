import mongoose  from 'mongoose'
const subCategorySchema = new mongoose.Schema ({
    subCategoryName : String
},{timestamps:true})

const subCategoryModel = mongoose.model ("subCategory" , subCategorySchema)
export {subCategoryModel}