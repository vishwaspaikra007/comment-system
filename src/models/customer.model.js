let mongoose = require('mongoose')
mongoose.set('useUnifiedTopology', true);
mongoose.connect(`mongodb+srv://paikra:1234@cluster0-cmrci.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true})

let CustomerSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true,
        unique: true
    },
    comment: {
        type : String,
        required : true
    },
    parent: {
        default: 'none',
        type: String
    },
})

module.exports = mongoose.model('commentRecord', CustomerSchema)