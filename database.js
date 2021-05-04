const mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {
    // mongoose.connect(' mongodb:localhost:27017/uploadFilesDB')

    mongoose.connect(
        process.env.DATABASE, 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        }
    )
    .then(() => console.log('DB Connected'));
}