import React from 'react';

const App = ({questions, answers, handleVote}) => {
    return (
        <div>
            <h1>Q&A Tool</h1>
          {questions.map(({questionId, content}) => (
              <div key={questionId}>
                  <h3>{content}</h3>
                  <div>
                    {answers
                        .filter(answer => answer.questionId === questionId)
                        .map(({answerId, upvotes, content}) => (
                            <div key={answerId}>
                                 <span>{content} - {upvotes}</span>
                                 <button onClick={() => handleVote(answerId, 1)}>+</button>
                                 <button onClick={() => handleVote(answerId, -1)}>-</button>
                            </div>
                         ))}
                  </div>
              </div>
          ))} 
        </div>
    );
};

export default App;