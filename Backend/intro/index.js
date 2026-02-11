const express = require('express');  //includeing express module
const app = express(); //initialising the app

const port = 3000;  //variable storing port number

app.get('/', (req, res) => { //we defined a GET request for this path 
  res.send('Hello World!');
});

//starting server 
app.listen(port, () => console.log(`Server running on port ${port}!`));
