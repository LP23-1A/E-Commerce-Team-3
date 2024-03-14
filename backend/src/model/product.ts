import mongoose  from 'mongoose'
const productSchema = new mongoose.Schema ({
    productName : String,
    categoryId : {
    type: mongoose.Schema.Types.ObjectId,
    ref : "category"
    },
    price : Number, 
    quantity : Number,
    thumbnails:String,
    images: {
        type: [String],
        default: [],   
      },
    coupon : String,
    salePercent : Number,
    description : String,
    viewsCount : Number,
},{timestamps:true})

const productModel = mongoose.model ("product" , productSchema)
export {productModel}