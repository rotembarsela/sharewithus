import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    createdBy: {
        type: String,
        required: true
    },
    // Name of the Category
    categoryId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
    },
    comments: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

export default Post