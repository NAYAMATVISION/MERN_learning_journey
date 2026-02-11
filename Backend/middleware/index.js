const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

//loading middleware into the app
// ok what we did is we tried to pass json in the body then when we checked the terminal
//it says undefined why? because it was not able to parse the json that is why we used a built in middleware
// what is parsing means 
//parsing means to convert the data into text format to JS object that can be used so for this
// parsing we used inbuilt middleware
// app.use(express.json())

// middlewares to be created loggin->auth->validation
//order matters
// create middleware functions above routers

// const logginMiddleware = function(req, res, next){
//     console.log("logging in");
//     next() 
// }
// app.use(logginMiddleware); //loading middleware into application


// const authMiddleware = function(req, res, next){
//     console.log("authenticating");
//     next()
// }
// app.use(authMiddleware);


// const validationMiddleware = function(req, res, next){
//     console.log("validating");
//     next()
// }
// app.use(validationMiddleware)
const router = require('../middleware/routes/routes')
app.use('/api' , router)



app.get('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})