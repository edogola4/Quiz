import styled from 'styled-components';

// Wrapper for each question card with some responsive layout
export const Wrapper = styled.div`
  max-width: 1100px;
  background: #ebfeff; /* Light blue background */
  border-radius: 10px; /* Rounded corners */
  border: 2px solid #0085a3; /* Blue border */
  padding: 20px; /* Space inside the wrapper */
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25); /* Soft shadow for depth */
  text-align: center; /* Center align text inside the wrapper */

  p {
    font-size: 1rem; /* Font size for question number and other text */
  }
  
  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    background: #333;
    border-color: #555;
    color: #fff;
  }
`;

// Styled button wrapper with dynamic styles for correctness and user interaction
type ButtonWrapperProps = {
  $correct: boolean; // Whether the answer is correct
  $userClicked: boolean; // Whether the user clicked this answer
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease; /* Smooth transition for hover effects */
  
  :hover {
    opacity: 0.8; /* Slight fade when hovering over buttons */
  }

  button {
    cursor: pointer; /* Pointer cursor for button */
    user-select: none; /* Prevent text selection */
    font-size: 0.8rem; /* Font size for buttons */
    width: 100%; /* Full width button */
    height: 40px; /* Fixed button height */
    margin: 5px 0; /* Space between buttons */
    background: ${({ $correct, $userClicked }) =>
      // Change background color depending on answer correctness and whether it was clicked
      $correct
        ? 'linear-gradient(90deg, #56FFA4, #59BC86)' // Green for correct answers
        : !$correct && $userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)' // Red for wrong answers the user clicked
        : 'linear-gradient(90deg, #56ccff, #6eafb4)'}; /* Default blue background for unclicked answers */

    border: 3px solid #ffffff; /* White border */
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1); /* Slight shadow for depth */
    border-radius: 10px; /* Rounded corners for buttons */
    color: #fff; /* White text color */
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25); /* Soft shadow for text */

    /* Focus state for accessibility */
    :focus {
      outline: 2px solid #ffcc00; /* Golden border for focus */
    }

    /* Active state on button click for a slight shrink effect */
    :active {
      transform: scale(0.98); /* Slight shrink on click */
    }
  }
`;

