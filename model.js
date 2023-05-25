const mongoose = require('mongoose')

const  city = mongoose.Schema({
    Sector : {
        type : String,
        required:true,
    },
    topic : {
        type : String,
        require:true,

    }

    
})
module.exports = mongoose.model('Sector',city)