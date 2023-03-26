import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import connectdb from './config/db.js';
import emailRoute from './route/email.js';
import { fileURLToPath } from 'url';
import path from 'path'


const app = express();

dotenv.config();

connectdb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     next();
//   });

// get dirname
const dirname = fileURLToPath(new URL('.', import.meta.url));
//serving css files
app.use(express.static(dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(dirname, '../maalu-landing-page/index.html'))
})

app.get('/home', (req, res) => {
    console.log('homepage')
})

app.use('/', emailRoute)

const PORT = process.env.PORT || 5500
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})