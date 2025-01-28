// API.ts
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
  }
  
  export enum Category {
    GENERAL_KNOWLEDGE = 9,
    BOOKS = 10,
    FILM = 11,
    MUSIC = 12,
    SCIENCE_NATURE = 17,
    COMPUTERS = 18,
    MATHEMATICS = 19,
    SPORTS = 21,
    HISTORY = 23,
    POLITICS = 24,
    ART = 25,
    CELEBRITIES = 26,
    ANIMALS = 27,
    GEOGRAPHY = 22,
  }
  
  export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  };
  
  export type QuestionsState = Question & { answers: string[] };
  
  export const fetchQuizQuestions = async (
    amount: number,
    difficulty: Difficulty,
    category: Category
  ): Promise<QuestionsState[]> => {
    try {
      const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`;
      const response = await fetch(endpoint);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.response_code === 1) {
        throw new Error("No results found for your query.");
      }
      
      if (data.response_code === 2) {
        throw new Error("Invalid parameter in request.");
      }
      
      if (data.response_code === 3 || data.response_code === 4) {
        throw new Error("Session expired or invalid. Please try again.");
      }
      
      return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer
        ]).map(decodeHTML)
      }));
    } catch (error) {
      console.error("Error fetching questions:", error);
      throw error;
    }
  };
  
 
 // Helper function to shuffle answers
const shuffleArray = <T>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  
  
  // Helper function to decode HTML entities
  const decodeHTML = (html: string): string => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };