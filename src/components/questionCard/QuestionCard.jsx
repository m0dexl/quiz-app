import React, { useEffect, useState } from "react";
import "./QuestionCard.css";

const QuestionCard = ({
  questionsData,
  score,
  setScore,
  count,
  setCount,
  modal,
  setModal,
  questionsCheckedArr,
  setQuestionsCheckedArr,
}) => {
  const [timer, setTimer] = useState(30);

  const approvedChoice = (e) => {
    console.log(e.target.value);
    const checkAnswer = e.target.value === questionsData[count]?.correct_answer;
    console.log(checkAnswer);

    if (checkAnswer) {
      setScore(score + 100);
    }

    // let translateTrueOrFalse = checkAnswer ? "Doğru" : "Yanlış";

    let newResult = {
      questionNo: `${count + 1}`,
      trueOrFalse: `${checkAnswer}`,
    };

    setQuestionsCheckedArr([...questionsCheckedArr, newResult]);

    setCount(count + 1);
    if (count === 9) setModal(true);
    setTimer(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0 && count < 10) {
        setCount(count + 1);
        setTimer(30);
      } else if (count >= 10) {
        setModal(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="questionCard">
      <div className="questionCard-timer"> {timer}</div>
      <div className="questionCard-title">
        {count + 1}/10 - {questionsData[count]?.question}
      </div>
      {questionsData[count]?.answers?.map((answer, i) => (
        <button key={i} value={answer} onClick={approvedChoice}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
