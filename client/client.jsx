import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

let state = undefined;

fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(data => {
        state = data
        console.log('Got the state', state)
        render();
    });

function handleModifyAnswerVotes(id, increment) {
    state.answers = state.answers.map(answer => {
        if(answer.answerId !== id) {
            return answer;
        } else {
            return {...answer, upvotes: answer.upvotes + increment}
        }
    })

    render();
}
    

function render() {
    hydrate(<App {...state} handleModifyAnswerVotes={handleModifyAnswerVotes}/>, document.getElementById('root'))
}

//render()