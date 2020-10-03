let mongoose = require('mongoose');

const server = 'ds221609.mlab.com:21609'
const db = 'rest-api-workshop'
const user = 'theoutlander'
const password = 'fZsMGZXQMx8FCTgkBwgFtEvwD7ML'

//esto es para cnectarse en la base de datos
mongoose.connect(`mongodb://${user}:${password}@${server}/${db}`, {'useNewUrlParser': true})
mongoose.set('useCreateIndex', true);

let CustomerSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    }
})

module.exports = mongoose.model('Customer',CustomerSchema);