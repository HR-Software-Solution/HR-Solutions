import app from './app.js';
import connectDB from './config/db.js';


const PORT = process.env.PORT;

const startServer = async () =>{
    try{
        //Connect to MongoDB
        connectDB();
        
        //start server
        app.listen(PORT, () =>{
            console.log(`Server running on port ${PORT}`);
        })

    }catch(error){
        console.error('Failed to connect to the database', error);
        process.exit(1);
    }
}

startServer();

