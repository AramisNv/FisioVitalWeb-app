import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//MONGO_URI="mongodb+srv://yutritospecopeco:Cagada123@tiendaonline.2a9gy.mongodb.net/fisioVital";
//PORT=5000;

mongoose.connect('mongodb+srv://yutritospecopeco:Cagada123@tiendaonline.2a9gy.mongodb.net/fisioVital', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

app.use('/api/contact', contactRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));