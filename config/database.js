const mongoose = require('mongoose');

const db = mongoose.connect("mongodb+srv://udck:udck@trainingcluster-fn2to.mongodb.net/training?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(db => {
        console.log("Connected correctly to mongo database!");
    })
    .catch(err => console.log(err));
