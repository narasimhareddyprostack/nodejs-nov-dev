//create Product Schema
import mongoose from 'mongoose'

let ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
});
let Product = mongoose.model('product', ProductSchema)
export default Product