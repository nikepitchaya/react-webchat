const express = require('express')
const app = express();
const http = require('http');
const server = http.createServer(app);
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routers/routes')

dotenv.config()
app.use(express.json())
app.use(cors());
app.use(router);

mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) console.log(err)
    else console.log("Mongdb is connected");
})

server.listen(8080, (() => {
    console.log('Start server at port 8080')
}))