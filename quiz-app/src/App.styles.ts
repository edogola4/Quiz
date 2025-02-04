import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${BGImage});
    background-size: cover;
    background-position: center;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }

  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  color: black;

  .start-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background: rgba(0, 0, 0, 0.79);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  /*.settings {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .setting-group {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-size: 0.9rem;
      opacity: 0.8;
    }

    select {
      padding: 8px 12px;
      border-radius: 8px;
      border: 2px solid #d38558;
      background: rgba(255, 255, 255, 0.9);
      //background: rgba(157, 215, 255, 0.89);
      font-size: 1rem;
      min-width: 200px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: white;
        transform: translateY(-2px);
      }
    }
  }*/
  .settings {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;
  animation: fadeIn 0.5s ease-out;
}

.setting-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: slideIn 0.5s ease-out;

  label {
    font-size: 0.9rem;
    opacity: 0.8;
    transition: color 0.3s ease;
  }

  select {
    padding: 8px 12px;
    border-radius: 8px;
    border: 2px solid #d38558;
    background: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    min-width: 200px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: white;
      transform: translateY(-2px);
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    }

    &:focus {
      border-color: #ffa559;
      box-shadow: 0px 0px 5px rgba(255, 165, 89, 0.5);
    }
  }
}

/* Animations */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Mobile Styles */
@media (max-width: 600px) {
  .setting-group select {
    width: 100%;
  }
}


  h1 {
    font-family: 'Fascinate Inline', cursive;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 3.5rem;
    text-align: center;
    margin: 1rem 0;
  }

  .game-info {
    width: 100%;
    margin: 1rem 0;
  }

  .score-time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    p {
      font-size: 1.2rem;
      background: rgba(0, 255, 0, 1);
      padding: 0.5rem 1rem;
      border-radius: 8px;
    }
  }

  .progress-bar {
    height: 10px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    overflow: hidden;

    .progress {
      height: 100%;
      background: linear-gradient(90deg, #87f1ff, #0085a3);
      transition: width 0.3s ease;
    }
  }

  .feedback {
    font-size: 1.5rem;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    text-align: center;
    animation: popIn 0.3s ease;

    @keyframes popIn {
      0% { transform: scale(0.8); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }
  }

  .error {
    color: #ff4444;
    //background: rgba(255, 255, 255, 0.9);
    background: rgba(255, 82, 82, 0.9); /* Soft red for errors */
    padding: 1rem;
    border-radius: 8px;
    margin: 1rem 0;
    text-align: center;
  }

  .high-score {
    font-size: 1.2rem;
    color: #ffd700;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .results {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    color: #fff;
    padding: 2rem;
    border-radius: 15px;
    width: 100%;
    margin-top: 2rem;

    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
    }
  }

  /*.answers-review {
    max-height: 400px;
    overflow-y: auto;
    padding-right: 1rem;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
    }

    &::-webkit-scrollbar-thumb {
      background: #0085a3;
      border-radius: 4px;
    }
  }
    */
  .answers-review {
    max-height: 400px;
    overflow-y: auto;
    padding-right: 1rem;
    scroll-behavior: smooth; /* Smooth scrolling */

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px; /* Soft edges */
    }

    &::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #00a8cc, #0085a3); /* Gradient effect */
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #00c0e4; /* Lighter hover effect */
    }
}


  /*.answer-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;

    p {
      margin: 0.5rem 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
    */
  .answer-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateY(10px);
    animation: fadeIn 0.5s ease-in-out forwards;
    border: 2px solid transparent; 
    transition: background 0.3s ease-in-out, 
                transform 0.2s ease-in-out, 
                border-color 0.3s ease-in-out, 
                box-shadow 0.3s ease-in-out;

    /* Hover effect */
    &:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: scale(1.02); /* Slight zoom effect */
        box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
    }
}

/* ✅ Correct Answer - Green Pulse Effect */
.answer-item.correct {
    border-color: #00c853; /* Green */
    background: rgba(0, 200, 83, 0.1);
    animation: fadeIn 0.5s ease-in-out forwards, pulse 1.5s infinite ease-in-out;
}

/* ❌ Incorrect Answer - Shake Effect */
.answer-item.incorrect {
    border-color: #d32f2f; /* Red */
    background: rgba(211, 47, 47, 0.1);
    animation: fadeIn 0.5s ease-in-out forwards, shake 0.5s ease-in-out;
}

/* Fade In Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ✅ Pulse Effect for Correct Answers */
@keyframes pulse {
    0% {
        box-shadow: 0 0 10px rgba(0, 200, 83, 0.2);
    }
    50% {
        box-shadow: 0 0 20px rgba(0, 200, 83, 0.4);
    }
    100% {
        box-shadow: 0 0 10px rgba(0, 200, 83, 0.2);
    }
}

/* ❌ Shake Effect for Incorrect Answers */
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
}




  /*button {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.3);
    }

    &:active {
      transform: translateY(0);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }

    .settings {
      flex-direction: column;
      width: 100%;
    }

    .setting-group select {
      width: 100%;
    }

    .results {
      padding: 1rem;
    }
  }*/
 button {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
    animation: popIn 0.5s ease-out forwards;
    
    /* Hover Effect */
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 10px 20px rgba(255, 165, 89, 0.5);
        background: linear-gradient(180deg, #fff4e6, #ffa559);
    }

    /* Pressed (Active) Effect */
    &:active {
        transform: translateY(2px);
        box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
    }

    /* Disabled State */
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background: #ccc;
        border: 2px solid #aaa;
        box-shadow: none;
    }

    /* Ripple Effect */
    &::after {
        content: "";
        position: absolute;
        width: 200%;
        height: 200%;
        background: rgba(255, 255, 255, 0.5);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.4s ease-out, opacity 0.4s ease-out;
        border-radius: 50%;
    }

    &:active::after {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
    }
}

/* Animations */
@keyframes popIn {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

/* Mobile Styles */
@media (max-width: 600px) {
    button {
        width: 100%;
        padding: 10px;
    }

    h1 {
        font-size: 2rem;
    }

    .settings {
        flex-direction: column;
        width: 100%;
    }

    .setting-group select {
        width: 100%;
    }

    .results {
        padding: 1rem;
    }
}


`;