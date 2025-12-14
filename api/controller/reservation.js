import ErrorHandler from "../error/erros.js";
import { Reservation } from "../models/reservationSchema.js";


export const sendReservation = async (req, res, next) => {
    const { firstname, lastname, phone, email, date, time } = req.body;
    console.log(firstname, lastname, phone, email, date, time)

    if (!(firstname || lastname || phone || email || date || time)) {
        return next(new ErrorHandler("please fill full detail", 400))
    }

    try{
        await Reservation.create({firstname, lastname, phone, email, date, time});

        console.log(firstname)

        res.status(200).json({
            succes:true,
            message:"reservation sent succefully"
        })
    }
    catch(error){
        if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    return next(error);
    }

}



