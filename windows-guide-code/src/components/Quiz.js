import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
  };


  const questions = [
    {
      questionText: 'Hva er DNS',
      answerOptions: [
        { answerText: 'Dynamic Name Service', isCorrect: false },
        { answerText: 'Domain Name Server', isCorrect: true },
        // more answers...
      ],
    },

    {
      questionText: 'Er Nyan kul?',
      answerOptions: [
        { answerText: 'JA!', isCorrect: true },
        { answerText: 'NEI??', isCorrect: false },
        // more answers...
      ],
    },
    // more questions...
  ];

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="section quiz">
      {!quizFinished ? (
        <div>
          <div className='question-section'>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)} key={index}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1>Quiz Completed!</h1>
          <p>Your score: {score} out of {questions.length}</p>
          
          {quizFinished && (
            <button onClick={resetQuiz}>Retry Quiz</button>
          )}        </div>
      )}
    </div>
  );
};

export default Quiz;
