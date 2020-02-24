const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/training', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(db => {
        console.log("Connected correctly to mongo database!");
    })
    .catch(err => console.log(err));