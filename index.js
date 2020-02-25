const express = require('express');
require('dotenv').config();
const https = require('https');
const fs = require('fs');


const authRouter = require('./routes/user');
const postRouter = require('./routes/post');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;


// connect to DB
require('./config/database')

// routes
app.use('/api/user', authRouter);
app.use('/api/posts', postRouter);

app.use('*', (req, res) => res.send("404! Page not found!"));

const server = https.createServer({
    key: fs.readFileSync('server-key.pem'),
    cert: fs.readFileSync('server-cert.pem')
}, app);

server.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
});