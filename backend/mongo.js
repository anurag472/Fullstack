const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/dummy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
});
const User = mongoose.model('User', userSchema);
module.exports = User;