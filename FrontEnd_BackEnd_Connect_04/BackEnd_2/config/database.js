const mongoose = require('mongoose');

const DbConnect = async () => {
    mongoose.connect('mongodb://localhost:27017/Frontend_Backend_Connect', {
        
    })
    .then(() => {
        console.log('Database is connected');
    })
    .catch((err) => {
        console.log(err);
    })
}
module.exports = DbConnect;