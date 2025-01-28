import React, { useState, useEffect, useRef } from 'react';
import { fetchQuizQuestions } from './API';
import QuestionCard from './components/QuestionCard';
import { QuestionsState, Difficulty, Category } from './API';
import { GlobalStyle, Wrapper } from './App.styles';
import correctSound from './assets/sounds/correct.mp3';
import wrongSound from './assets/sounds/wrong.mp3';
import timesUpSound from './assets/sounds/times-up.mp3';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);
  const [category, setCategory] = useState<Category>(Category.GENERAL_KNOWLEDGE);
  const [timeLeft, setTimeLeft] = useState(15);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [highScore, setHighScore] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const correctAudio = useRef(new Audio(correctSound));
  const wrongAudio = useRef(new Audio(wrongSound));
  const timeUpAudio = useRef(new Audio(timesUpSound));

  useEffect(() => {
    const savedHighScore = localStorage.getItem('quizHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  useEffect(() => {
    if (!gameOver && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !gameOver) {
      timeUpAudio.current.play();
      nextQuestion();
    }
  }, [timeLeft, gameOver]);

  const startTrivia = async () => {
    try {
      setLoading(true);
      setGameOver(false);
      setError(null);
      
      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        difficulty,
        category
      );
      
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setTimeLeft(15);
      setFeedback(null);
    } catch (err) {
      console.error('Error fetching quiz questions:', err);
  setError('Failed to load questions. Please try again.');
      setError('Failed to load questions. Please try again.');
      setGameOver(true);
    } finally {
      setLoading(false);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      
      if (correct) {
        setScore((prev) => prev + 1);
        setFeedback('🎉 Correct!');
        correctAudio.current.play();
        setTimeLeft(prev => Math.min(prev + 5, 30)); // Add bonus time
      } else {
        setFeedback('❌ Oops, wrong answer.');
        wrongAudio.current.play();
        setTimeLeft(prev => Math.max(prev - 5, 5)); // Reduce time
      }

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === TOTAL_QUESTIONS) {
      if (score > highScore) {
        localStorage.setItem('quizHighScore', score.toString());
        setHighScore(score);
      }
      setGameOver(true);
    } else {
      setNumber(nextQ);
      setTimeLeft(15);
      setFeedback(null);
    }
  };

  const progress = ((number + 1) / TOTAL_QUESTIONS) * 100;

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>🧠 Trivia Challenge</h1>
        {gameOver && (
          <div className="start-screen">
            <div className="settings">
              <div className="setting-group">
                <label>Category:</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(Number(e.target.value))}
                >
                  {Object.values(Category)
                    .filter(v => !isNaN(Number(v)))
                    .map((cat) => (
                      <option key={cat} value={cat}>
                        {Category[cat as keyof typeof Category]}
                      </option>
                    ))}
                </select>
              </div>
              <div className="setting-group">
                <label>Difficulty:</label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                >
                  {Object.values(Difficulty).map((diff) => (
                    <option key={diff} value={diff}>
                      {diff.charAt(0) + diff.slice(1).toLowerCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className="start" onClick={startTrivia}>
              {userAnswers.length === TOTAL_QUESTIONS ? 'Play Again' : 'Start Quiz'}
            </button>
            {highScore > 0 && <div className="high-score">🏆 High Score: {highScore}</div>}
          </div>
        )}

        {error && <div className="error">{error}</div>}

        {!gameOver && (
          <div className="game-info">
            <div className="score-time">
              <p className="score">Score: {score}</p>
              <p className="timer">⏳ {timeLeft}s</p>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        {feedback && <div className="feedback">{feedback}</div>}

        {loading && <div className="loading">🔃 Loading Questions...</div>}

        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 && (
            <button className="next" onClick={nextQuestion}>
              {timeLeft > 0 ? 'Next Question ➡️' : 'Time Up! Skip ⏩'}
            </button>
          )}

        {gameOver && userAnswers.length === TOTAL_QUESTIONS && (
          <div className="results">
            <h2>Final Score: {score}/{TOTAL_QUESTIONS}</h2>
            <div className="answers-review">
              {userAnswers.map((answer, index) => (
                <div key={index} className="answer-item">
                  <p dangerouslySetInnerHTML={{ __html: answer.question }} />
                  <p>Your answer: {answer.answer} 
                    {answer.correct ? ' ✅' : ` ❌ (Correct: ${answer.correctAnswer})`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default App;