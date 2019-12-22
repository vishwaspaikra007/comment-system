let express =  require('express')
let customerRoute = require('./routes/customer')
let personRoute = require('./routes/person')
let path = require('path')
let app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use((req,res,next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
})
app.use(personRoute)
app.use(customerRoute)  
app.use(express.static("public"))

// error 404 => resource not found
app.use((req, res, next) => {
    res.status(404).send("I think you don't know what you are doing")
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`port has started on ${PORT}`)
})