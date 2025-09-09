import express from 'express';
import cors from 'cors';

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//test route
app.get('/candidates', (req, res) =>{
    res.status(200).json({
        message: 'List of candidates',
        status: 'success'
    })
})


export default app;