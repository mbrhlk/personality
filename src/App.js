import React, { useState, useEffect } from 'react'

import './App.css'
import './checkbox.css'

import apiQuestions from './questions'
import apiPersonality from './personality'
import Results from './Results'

const App = () => {
  const [questions] = useState(apiQuestions)
  const [personality, setPersonality] = useState(apiPersonality)
  const [currentQuestion, setCurrentQuestion] = useState(-1)

  useEffect(() => {
    setCurrentQuestion(currentQuestion + 1)
    console.log(questions[currentQuestion])
    console.log(personality.N)
  }, [personality])

  const handleAnswer = (e) => setPersonality({
    ...personality,
    [questions[currentQuestion].trait]: {
      ...personality[questions[currentQuestion].trait],
      score: personality[questions[currentQuestion].trait].score + parseInt(e.target.value),
      [questions[currentQuestion].facet]: {
        ...personality[questions[currentQuestion].trait][[questions[currentQuestion].facet]],
        score: personality[questions[currentQuestion].trait][[questions[currentQuestion].facet]].score + parseInt(e.target.value)
      }
    }
  })

  if(!questions[currentQuestion]) return <Results personality={personality} />

  return (
    <div className="app test">
      <div className="questions">
        <h3>I</h3>
        <h1>{questions[currentQuestion].title}</h1>
        <div className="radiogroup">
          <label className="container">
            <input type="radio" name={`${questions[currentQuestion].trait} ${questions[currentQuestion].facet}`} value={questions[currentQuestion].positive ? '1' : '5'} onClick={handleAnswer} />
            <span className="checkmark"></span>
          </label>
          <label className="container">
          <input type="radio" name={`${questions[currentQuestion].trait} ${questions[currentQuestion].facet}`} value={questions[currentQuestion].positive ? '2' : '4'} onClick={handleAnswer} />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <input type="radio" name={`${questions[currentQuestion].trait} ${questions[currentQuestion].facet}`} value={'3'} onClick={handleAnswer} />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <input type="radio" name={`${questions[currentQuestion].trait} ${questions[currentQuestion].facet}`} value={questions[currentQuestion].positive ? '4' : '2'} onClick={handleAnswer} />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            <input type="radio" name={`${questions[currentQuestion].trait} ${questions[currentQuestion].facet}`} value={questions[currentQuestion].positive ? '5' : '1'} onClick={handleAnswer} />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <p className="total">{currentQuestion}/{questions.length}</p>
    </div>
  );
}

export default App;
