const express = require('express');
const app = express();
const connectDB = require('../mongoDb/db');
const users = require('../mongoDb/routes/users')
const port = 3000;

app.use(express.json())

connectDB();

app.use('/api' , users)

app.get('/' ,(req,res) => {
    console.log("server started");
    res.send('hello !!!!!')
})

app.listen
(port, () => console.log(`server running on port ${port}`))