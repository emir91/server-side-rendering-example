import React from 'react';
import { hydrate } from 'react-dom';
import { handleModifyAnswerVotes } from '../shared/utility';
import App from './App';

let state = undefined;

fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(data => {
        state = data
        render();
    });

function handleVote(answerId, increment){
    state.answers = handleModifyAnswerVotes(state.answers, answerId, increment);
    fetch(`vote/${answerId}?increment=${increment}`);
    
    render();
    
};
    

function render() {
    hydrate(<App {...state} handleVote={handleVote}/>, document.getElementById('root'))
}