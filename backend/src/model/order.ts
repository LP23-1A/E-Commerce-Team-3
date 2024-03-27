import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "e-user",
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  orderNumber: String,
  status: {
    type: String,
    enum: [
      "New order",
      "Ordered",
      "Preparing to ship",
      "Shipped",
      "Delivered",
      "Cancelled",
    ],
    default: "New order",
  },
  phoneNumber: String,
  Name:String,
  address: String,
  apartment:String,
  city:String, 
  amountPaid: Number,
  amountToPaid: Number,
  zipCode: Number,
  coupon: String,
  description: String,
  orderType: String,
  details: String,
  quantity: [
  ],
  createdAt: Date,
  updatedAt: Date,
});
const orderModel = mongoose.model("e-order", OrderSchema);
export { orderModel };
