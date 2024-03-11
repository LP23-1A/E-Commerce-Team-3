import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'e-user',
        required: true
    },
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        require: true
    },

    orderNumber: String,
    status: {
        type: String,
        enum: ['Ordered', 'Preparing to ship', 'Shipped', 'Delivered'],
        default: 'Preparing to ship'
    },
    phoneNumber3213: Number,
    deliveryDate: Date,
    amountPaid: Number,
    amountToPaid: Number,
    coupon: String,
    description: String,
    orderType: String,
    details: String,
    createdAt: Date,
    updatedAt: Date


})
const orderModel = mongoose.model('e-order', OrderSchema)
export { orderModel }