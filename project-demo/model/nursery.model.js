const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nurserySchema = new mongoose.Schema({
    nurseryName: {
        type: String,
        required: true,
    },
    nurseryOwnerName: {
        type: String,
        required: true,
    },
    nurseryOwnerEmail: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    nurseryOwnerPassword: {
        type: String,
        required: true,
    },
    nurseryOwnerMobile: {
        type: Number,
        required: true,
        unique: true,
        length: 10
    },
    nurseryAddress: {
        type: String,
        required: true,
    },
    nurseryImage: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeHA9ISQ12axJyzB-gBv30kicd4mfCeR7AQ&usqp=CAU"
    },
    JoinDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("nurseryOwner", nurserySchema);