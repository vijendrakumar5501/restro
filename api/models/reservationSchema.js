import mongoose from "mongoose";
import validator from "validator"



const reservationSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength: [3],

    },
    lastname: {
        type: String,
        required: true,
        minLength: [3],

    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email"],

    },
    phone: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
   

});



export const Reservation=mongoose.model("Reservation",reservationSchema);