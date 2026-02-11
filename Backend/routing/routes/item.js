// this file will store all item specific routes
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dummy.html'))
  })
  

router.post
('/items', (req, res) => {
    //res.send('Got a POST request')
    res.json({"message":"post request received"})
  })


router.put('/items/:id', (req, res) => {
    res.send('Got a PUT request ')
  })


router.delete('/items/:id', (req, res) => {
    res.send('Got a DELETE request ')
  })




module.exports=router;
