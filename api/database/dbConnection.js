import mongoose from "mongoose";

const dbConncetion=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"restro"
    }).then(()=>{
        console.log('coonetd db sucefully')
    }).catch(()=>{
        console.log(' db faild')
        
    })
}

export default dbConncetion