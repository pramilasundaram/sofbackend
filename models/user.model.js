const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    contactDetails: {
        primaryEmail: {
            type: String,
            required: true,
        },
        primaryContactNumber: {
            type: String,
            required: true,
        },
    },
    address: {
        type: Array,
        required: true,
    },
    generalDetails: {
        ProfilePicture: {
            type: String,
            required: false,
        },
        dob: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
    }
})

module.exports=mongoose.model("user",userSchema);