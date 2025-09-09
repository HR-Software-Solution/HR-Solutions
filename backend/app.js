import express from 'express';
import cors from 'cors';
import canstsdidateRoutes from './routes/candidates.js';

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//API routes
app.use('/api/candidates', canstsdidateRoutes);


export default app;