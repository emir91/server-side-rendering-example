import express from 'express';

const app = express();

app.get('/', (_req, res) => {
    res.send('<h1>HELLO WORLD</h1>')
});

app.listen(3000);

console.log('Server is listening.')