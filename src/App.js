// import './App.css';
// import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
// import {dataPartie,dataFonction} from './Components/showData.js'
import dataPartieDuDiscours from "./Components/dataPartieDeDiscours.js"
import Input from "./Components/input.js"
import "./Components/page/index.css"

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isChecked, setChecked] = useState()

  function handleNextButtonClick() {
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < dataPartieDuDiscours.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      alert("Vous avez fini votre teste.")
    }
    setChecked(isChecked==="null")

  }

  // regarder button check answer
  function handleCheckAnwer(e) {
    const answerCorrect = e.target.value;
    if(answerCorrect === "true") {
      alert("Bravo!")
    } else {
      alert('Désolé')
    }
  }

  return (
    <div>
      <h1>{currentQuestion + 1}/{dataPartieDuDiscours.length}</h1>
      <h1>{dataPartieDuDiscours[currentQuestion].question}</h1>
      <h2>{dataPartieDuDiscours[currentQuestion].phrase}</h2>
      <h2>{dataPartieDuDiscours[currentQuestion].reponses.map((reponse,index) => (
        <label htmlFor={index} key={index}>
          <Input 
          type="radio" 
          name="radio" 
          checked={isChecked}
          value={reponse.correct}
          onClick = {handleCheckAnwer}
          />
          {reponse.texte}
        </label>
      ))}</h2>
      <button onClick={handleNextButtonClick}>Next Question</button>
    </div>

  );
}

export default App;
