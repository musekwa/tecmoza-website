import mongoose, { Schema} from "mongoose";


const messageSchema = new Schema({
    companyName: {
        type: String
    },
    companyWebsite: {
        type: String
    },
    service: {
        type: String,
        required: true
    },
    isRead: {
        type: Boolean,
        default: false
    },
    isReplied: {
        type: Boolean,
        default: false
    },
    message: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

const Message = mongoose.models.Message ||mongoose.model("Message", messageSchema)

export default Message;