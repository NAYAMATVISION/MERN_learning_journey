const express = require('express')
const app = express()
const port = 3000

//import router file of router
const item = require('./routes/item')

app.use('/api', item)



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// different requests
// app.get('/', (req, res) => {
//     res.sendFile('./dummy.html' , {root:__dirname})
//   })
  

// app.post
// ('/items', (req, res) => {
//     //res.send('Got a POST request')
//     res.json({"message":"post request received"})
//   })


// app.put('/items/:id', (req, res) => {
//     res.send('Got a PUT request ')
//   })


// app.delete('/items/:id', (req, res) => {
//     res.send('Got a DELETE request ')
//   })





app.listen(port, () =>{ 
  console.log(`Example app listening on port ${port}!`)
})