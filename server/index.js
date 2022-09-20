import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import postRouter from './routes/posts.js'

const app = express();

dotenv.config({
    path: './config/.env'
})

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRouter)


const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database Connected')
        app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
    }).catch((error) => console.log(error.message))
