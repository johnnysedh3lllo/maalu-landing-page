import mongoose from "mongoose";
import { Schema } from "mongoose";

const subscriber = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }, 
 
},{
    timestamps: true
})


const SubscribeModel = mongoose.model('SubscribeModel', subscriber);
  
export default SubscribeModel;