import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () =>{
    try {
        const dbName = process.env.DB_NAME;

        const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${dbName}?retryWrites=true&w=majority&appName=hr-solutions-cluster`;
        await mongoose.connect(uri);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log(`MongoDB connection failed error: ${error}`);
        process.exit(1);
    }
}

export default connectDB;
