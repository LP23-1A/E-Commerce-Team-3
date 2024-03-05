import mongoose  from 'mongoose'

const userSchema = new mongoose.Schema ({
username:String,
email:{
    type: String,
    unique:true
},
role:{
    type:String,
    enum:['admin','user'],
    default:'user'
},
phoneNumber:Number,
password:String,
address:String,
zipCode:Number,
cardId:String,
createdAt:Date,
updateAt:Date
})
const userModel =  mongoose.model('USER',userSchema)
export {userModel}