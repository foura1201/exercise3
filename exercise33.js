const express = require('express');
const app = express();
const port = 3000;

app.get('/factorial/:number', (req, res) => {
    const {number} = req.params;
    let factorial = 1;
    for(let i = 0; i < number; i++) factorial *= (i+1);
    res.send(`${factorial}`);
});

app.get('/factorial', (req, res) => {
    const {number} = req.query;
    let factorial = 1;
    for(let i = 0; i < number; i++) factorial *= (i+1);
    res.send(`${factorial}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));