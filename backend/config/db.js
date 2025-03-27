import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://adarshad28996:ankitgp555@cluster0.rkemkhs.mongodb.net/reactjs-food-delivery-app').then(()=>{console.log("DB connected")});
}
// adarshad28996
// ankitgp555
//mongodb+srv://adarshad28996:<db_password>@cluster0.ufrbh8l.mongodb.net/