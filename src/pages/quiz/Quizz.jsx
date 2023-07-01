import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { useParams } from "react-router-dom";
import * as api from "../../api/api";
import QuestionCard from "../../components/questionCard/QuestionCard";
import Modal from "../../components/modal/Modal";

const Quizz = () => {
  const { difficulty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [questionsCheckedArr, setQuestionsCheckedArr] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
    };
    getData();
  }, []);

  console.log(questionsData, "questionsdata");

  return (
    <div className="quiz">
      {modal ? (
        <Modal score={score} questionsCheckedArr={questionsCheckedArr} />
      ) : (
        <QuestionCard
          questionsData={questionsData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
          questionsCheckedArr={questionsCheckedArr}
          setQuestionsCheckedArr={setQuestionsCheckedArr}
        />
      )}
    </div>
  );
};

export default Quizz;
