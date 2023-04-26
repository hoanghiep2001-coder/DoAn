const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CartSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
    },
    status: {
        type: String,
        enum: ['overdated', 'deleted', 'onBoard']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = mongoose.model('carts', CartSchema)