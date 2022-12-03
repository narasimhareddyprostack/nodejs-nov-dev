import mongoose from 'mongoose'

let userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isAdmin: { type: String, default: false },
    /*   created: { type: Date, default: new Date.now() */

})
let User = mongoose.model("user", userSchema)
export default User