import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ankithajb63_db_us:QNrXxf4QNTnwMZFX@cluster0.ael0nzr.mongodb.net/FoodDelivery').then(()=>console.log("DB Connected"));
}