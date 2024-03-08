import React, { useRef } from 'react';
import Guide from './components/Guide';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  const quizRef = useRef(null); // Create a ref for the quiz section

  const scrollToQuiz = () => {
    // Function to scroll to the quiz section
    quizRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <button onClick={scrollToQuiz} className="scroll-to-quiz">
        Go to Quiz
      </button>
      <Guide />
      <div ref={quizRef}> {/* Attach the ref to the quiz section */}
        <Quiz />
      </div>
    </div>
  );
}

export default App;
