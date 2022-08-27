const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gardener = mongoose.Schema({
    gardenerName: {
        type: String,
        required: true
    },
    gardenerEmail: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    gardenerPassword: {
        type: String,
        required: true,
    },
    gardenerMobile: {
        type: String,
        required: true,
        length: 10
    },
    gardenerImage: {
        type: String,
        required: "://encryptedhttps-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeHA9ISQ12axJyzB-gBv30kicd4mfCeR7AQ&usqp=CAU"
    },
    gardenerAddress: {
        type: String,
        required: true
    },
    gardenerJoinDate: {
        type: Date,
        default: Date.now
    },
    gardenerExperience: {
        type: String,
        required: true,
    },
    gardenerRating: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        rate: {
            type: Number,
            min: 1
        },
        review: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    }],
});

