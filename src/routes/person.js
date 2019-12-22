let express =  require('express')

let router = express.Router()
// for queries like http://localhost:3000/person?name=Vishwas&age=21
router.get('/person', (req, res)=> {
    if(req.query.name) {
        res.send("You requested for person named " + `${req.query.name}`)
    } else
    res.send("You requested for person")
})

// for queries like http://localhost:3000/person/Vishwas
router.get('/person/:name', (req, res)=> {
    res.send(`You requested for person named ${req.params.name}`)
})

// forr errror 500
router.get('/error', (req, res)=> {
    throw new Error('This is a forced error');
})

module.exports = router