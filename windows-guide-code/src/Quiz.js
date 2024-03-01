import React, { useState } from 'react';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: 'Hva er DNS?',
      answerOptions: [
        { answerText: 'Data Network Service', isCorrect: false },
        { answerText: 'Domain Name System', isCorrect: true },
        // flere svaralternativer...
      ],
    },
    // flere spørsmål...
  ];

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <h2>Quiz Section</h2>
      {showScore ? (
        <div>You scored {score} out of {questions.length}</div>
      ) : (
        <div>
          <div>{questions[currentQuestion].questionText}</div>
          <div>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
