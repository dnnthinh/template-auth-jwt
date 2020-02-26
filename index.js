const express = require('express');
const authRouter = require('./routes/user');
const postRouter = require('./routes/post');

const app = express();

app.use(express.json());

// connect to DB
require('./config/db-pg')

// routes
app.use('/api/user', authRouter);
app.use('/api/posts', postRouter);

app.use('*', (req, res) => res.send("404! Page not found!"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
});