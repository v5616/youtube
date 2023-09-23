const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProductSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    revenue:{
        type:Number,
        required: true,
    },
    subscriber:{
        type:Number,
        required: true,
    },
    monetized:{
        type:Boolean,
        required: true,
    },
    language:{
        type:String,
        required: true,
    },
    category:{
        type:String,
        required: true,
    },
    tag:{
        type:String,
        required: true,
    }
})


const Product = mongoose.model('product', ProductSchema)
module.exports = Product