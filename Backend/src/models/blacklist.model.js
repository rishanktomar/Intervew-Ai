const mongoose = require('mongoose');

const blacklistSchema = new mongoose.Schema({
    token:{
        type: String,
        required :[ true,"token is required to be add in blacklist"]
    }
}, {
    timestamps : true
    
})

const tokenBlacklistModel = mongoose.model('blackListToken', blacklistSchema)

module.exports = tokenBlacklistModel;