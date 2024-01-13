import mongoose, { Schema, models } from "mongoose"

const userShcema = new Schema({
    name: 
    {
    type:String, 
    required: true,
    },
    email: 
    {
        type:String,
        required:true,
    },
    password:
    {
    type:String, 
    required: true,
    },
    IBAN:
    {
        type:String,
        required: true,
    },
    balance:
    {
        type:Number,
        required: true,
    }
}, {timestamps: true}
);

const User = models.User || mongoose.model("User", userShcema);

export default User;