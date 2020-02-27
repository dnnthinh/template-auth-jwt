const mongoose = require('mongoose');

const db = mongoose.connect(process.env.DB_MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(db => {
        console.log("Connected correctly to mongo database!");
    })
    .catch(err => console.log(err));
