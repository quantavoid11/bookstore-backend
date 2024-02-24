import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/bookstore');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

export default  connectDB;
