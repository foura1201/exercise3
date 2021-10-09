const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    const obj = req.query;
    const string = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
    res.send(string);
});

app.post('/', (req, res) => {
    const obj = req.body;
    const string = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
    res.send(string);
});

app.delete('/', (req, res) => {
    const obj = req.body;
    const string = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
    res.send(string);
});

app.put('/', (req, res) => {
    const obj = req.body;
    const string = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
    res.send(string);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));