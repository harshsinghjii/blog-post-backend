const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = Schema({
    name:{
        type:String,
        required:true
    }
})

const category = mongoose.model('category', categorySchema)

module.exports = category