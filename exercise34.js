const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    res.send(`username: ${username}<br>password: ${password}`);
})

app.listen(port, () => console.log(`Server listening on port ${port}!`));