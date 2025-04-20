import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Praveen:wdSjvJX0CRm2oY6q@cluster0.tp3h4.mongodb.net/food-del').then(()=>console.log("DB connected"));
}