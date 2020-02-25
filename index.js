const express = require('express');
const authRouter = require('./routes/user');
const postRouter = require('./routes/post');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
});

// connect to DB
require('./config/database')

// routes
app.use('/api/user', authRouter);
app.use('/api/posts', postRouter);

app.use('*', (req, res) => res.send("404! Page not found!"));