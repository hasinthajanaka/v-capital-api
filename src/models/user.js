const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: String,
    lastname: String
});

userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('user', userSchema);