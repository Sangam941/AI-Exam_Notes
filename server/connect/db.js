import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully...")
    } catch (error) {
        console.log("DB connection failed", error)
        process.exit(1)
    }
}