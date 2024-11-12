import React from 'react';
const Quiz = () => {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Jupiter", "Saturn"],
            correctAnswer: "Mars"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "HCl"],
            correctAnswer: "H2O"
        }
    ];

    const [answers, setAnswers] = React.useState(Array(questions.length).fill(""));
    const [showScore, setShowScore] = React.useState(false);
    const [score, setScore] = React.useState(0);

    const handleAnswerSelection = (index, selectedAnswer) => {
        const newAnswers = [...answers];
        newAnswers[index] = selectedAnswer;
        setAnswers(newAnswers);
    }

    const handleSubmit = () => {
        let newScore = 0;
        questions.forEach((question, index) => {
            if (question.correctAnswer === answers[index]) {
                newScore++;
            }
        });
        setScore(newScore);
        setShowScore(true);
    }

    const handleRestart = () => {
        setAnswers(Array(questions.length).fill(""));
        setShowScore(false);
        setScore(0);
    }

    return (
        <div>
            {!showScore ? (
                <div>
                    <h1>Quiz</h1>
                    {questions.map((question, index) => (
                        <div key={index}>
                            <h2>{question.question}</h2>
                            {question.options.map((option, optionIndex) => (
                                <div key={optionIndex}>
                                    <input 
                                        type="radio" 
                                        id={`option-${index}-${optionIndex}`} 
                                        name={`question-${index}`} 
                                        value={option} 
                                        checked={answers[index] === option}
                                        onChange={() => handleAnswerSelection(index, option)}
                                    />
                                    <label htmlFor={`option-${index}-${optionIndex}`}>{option}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : (
                <div>
                    <h1>Your Score</h1>
                    <p>{`You scored ${score} out of ${questions.length}`}</p>
                    <button onClick={handleRestart}>Restart Quiz</button>
                </div>
            )}
        </div>
    );
}
 export default Quiz