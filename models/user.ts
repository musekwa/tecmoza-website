import mongoose, { Schema} from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    isSubscribed: {
        type: Boolean,
        default: false
    },

}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema) 

export default User;