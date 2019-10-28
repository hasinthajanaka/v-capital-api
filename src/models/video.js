const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userid: mongoose.Schema.Types.ObjectId,
    url: String

});

module.exports = mongoose.model('video', videoSchema);