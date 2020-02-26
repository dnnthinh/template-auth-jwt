const express = require('express');
const authRouter = require('./routes/user');
const postRouter = require('./routes/post');

const app = express();

app.use(express.json());

// connect to DB
require('./config/database')

// routes
app.use('/api/user', authRouter);
app.use('/api/posts', postRouter);

app.use('*', (req, res) => res.send("404! Page not found!"));

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
