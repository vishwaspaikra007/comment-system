let customerModel = require('../models/customer.model')
let express = require('express')
let router = express.Router()

// this is where mongo db is doing a work

router.post('/customer',(req, res)=> {
    if(!req.body) {
        return res.status(400).send("Request body is missing")
    }
    let model = new customerModel(req.body)
    console.log(req);
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0) {
            return res.status(500).send(doc)
        }
        res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err);
    })
})  

router.get('/customer',(req, res)=> {
    if(!req.body) {
        return res.status(400).send("Request body is missing")
    }
    // customerModel.findOne({
    //     email:req.query.email
    // })
    customerModel.find({})
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
// ................................................................
router.put('/customer',(req, res)=> {
    if(!req.body) {
        return res.status(400).send("Request body is missing")
    }
    customerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, {
        new: true
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/customer',(req, res)=> {
    if(!req.body) {
        return res.status(400).send("Request body is missing")
    }
    customerModel.findOneAndDelete({
        email:req.query.email
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
 
module.exports = router