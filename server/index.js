import express from 'express';
import { readFileSync } from 'fs';

const app = express();

app.use(express.static('dist'));



app.get('/', (_req, res) => {
    const index = readFileSync(`./public/index.html`, `utf-8`);
    res.send(index);
});

app.listen(3000);

console.log('Server is listening.')