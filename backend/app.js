import dotenv from 'dotenv';
import express from 'express';
import mongoose from './config/db.mongo.js';
import pgClient from './config/db.pg.js';

dotenv.config();

const app = express();

app.use(express.json());

import authRoutes from './routes/auth.routes.js';
import inquiryRoutes from './routes/inquiry.routes.js';
import partnerRoutes from './routes/partner.routes.js';
import adminRoutes from './routes/admin.routes.js';

app.use('/api/auth',authRoutes);
app.use('/api/inquiry',inquiryRoutes);
app.use('/api/partner',partnerRoutes);
app.use('/api/admin',adminRoutes);

app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});
