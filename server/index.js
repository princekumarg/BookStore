import express from 'express';
import { PORT, MONGO_URL } from './config.js';
const app = express();
import mongoose from 'mongoose';
import BookRoutes from './routes/BookRoutes.js';
import cors from 'cors';

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}
));

app.use('/api', BookRoutes);

mongoose.connect(MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.log(err)
})