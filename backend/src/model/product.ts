import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
    productName: String,
    mainCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mainCategory'
    },
    subCategory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory'
    }],
    price: Number,
    quantity: Number,
    thumbnails: String,
    images: {
        type: [String]
    },
    coupon: String,
    salePercent: Number,
    description: String,
    viewsCount: Number,
    productId: String,
    tag: String

}, { timestamps: true })

const productModel = mongoose.model("product", productSchema)
export { productModel }