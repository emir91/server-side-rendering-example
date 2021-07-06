import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { readFileSync } from 'fs';

import { handleModifyAnswerVotes } from '../shared/utility';
import { data } from './db';
import App from '../client/App';

const app = express();

app.use(express.static('dist'));

app.get("/vote/:answerId", (req, res) => {
    const { query, params } = req;
    data.answers = handleModifyAnswerVotes(data.answers, params.answerId, parseInt(query.increment));
});

app.get('/data', (_req, res) => {
    res.json(data);
})

app.get('/', (_req, res) => {
    const index = readFileSync(`./public/index.html`, `utf-8`);
    const rendered = renderToString(<App {...data}/>);
    
    res.send(index.replace('{{rendered}}', rendered));
});

app.listen(3000);

console.log('Server is listening.');