import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './question.css';
import {TestAction} from '../../Redux/actions/testingAction'
import { useNavigate } from "react-router-dom";

export default function Question() {
  const dispatch = useDispatch();
  const {loading, data ={}} = useSelector(state => state.testing);
  const {results: questions = []} = data
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentQuestionLine, setCurrentQuestionLine] = useState(1)
  const [options, setOptions] = useState()
  const [answerselected, setAnswerselected] = useState({answer: '', correct: '', question: ''})
  const [animate, setAnimate] = useState(false);
  const [selected, setSelected] = useState();
  const [answers, setAnswers] = useState([]);
  const [localstorage] = useState(JSON.parse(localStorage.getItem('answers')) || [])
  const navigate = useNavigate();

  useEffect(() => {
      dispatch(TestAction())
  }, [dispatch])
  const handleNextQuestion = () => {
    if (selected) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion)
      animate ? setAnimate(false) : setAnimate(true)
      setCurrentQuestionLine(currentQuestionLine + 1)
      setSelected()
      }
    else {
      return false
    }  
  }
  const handleHomePage = () => {
    navigate('/')
}

useEffect(() => {
  if (questions?.length < 1) {
    console.log('hello');
  } else {
   setOptions(questions && listOfOptions([
     ...questions[currentQuestion]?.incorrect_answers,
       questions[currentQuestion]?.correct_answer
   ])
   );
  }
}, [currentQuestion, questions]);

const listOfOptions = (options) => {
   return options.sort(() => Math.random() - 0.5)
}

const hansleSelected = (option) => {
  if (selected === option) {
    return 'selected'
  } else if(selected === option && selected !== questions[currentQuestion]?.correct_answer){
    return 'wrong'
  } 
}

  const handleAnswers = (amswer, question, correct) => {
    setAnswerselected({answer: amswer, correct: correct, question: question})
    setSelected(amswer)
    setAnswers([...answers, answerselected])
}

  const submitAnswers = () => { 
    const answer = [...localstorage, answers];
    localStorage.setItem('answers', JSON.stringify(answer))
  }

  return (
    <>

    <div className='container-fluid'>
        <div className='row mx-auto justify-content-center'>
          <h1 className="text-center text-white mt-5 mb-5"><b>START YOUR SURVEY</b></h1>
                  {
                loading ? <div className="spinner-grow col-md-6 col-sm-6 col-lg-6 m-5" role="status">
                <span className="visually-hidden">Loading...</span>
              </div> :
                <div className={`col-md-12 col-sm-12 col-lg-12 question_container ${animate ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeInRight'}`}>
                       <div className='text-center'><h2>Question {currentQuestionLine}/{questions?.length-1}</h2></div>
                      <div className='row questions_answers m-3'>
                          <div className='col-md-12 text-center questions'>
                              {questions && questions[currentQuestion]?.question}
                          </div>
                      </div>
                      <div className='row questions_answers m-3 mx-auto justify-content-center'>
                      <div className='col-md-6'>
                            <div className={`row `}>
                              {options && options?.map((option) => 
                              <button key={option} disabled={selected} className={`col-md-6 p-2 mb-2 answers ${selected &&  hansleSelected(option)}`} onClick={() => handleAnswers(option, questions[currentQuestion]?.question, questions[currentQuestion]?.correct_answer)}>{option}</button>
                              )}
                            </div>
                          </div>
                      </div>
                      <div className='row control-buttons mx-auto justify-content-center'>
                        {
                          currentQuestion === 8 ? 
                          <>
                          <button className='col-md-5 text-center mx-1 mb-3 submit' onClick={submitAnswers}>Finish</button>
                          <button  className='col-md-5 text-center mx-1 mb-3 previous' onClick={handleHomePage}>Dashboard</button>
                          </> :
                            <>
                    
                            {
                              currentQuestionLine === 1 ? <button className='col-md-6 mb-3 next text-center' onClick={handleNextQuestion}>Next</button> :   <>
                                      <button className='col-md-5 mx-1 mb-3 text-center next' onClick={handleNextQuestion}>Next</button>
                              <button className='col-md-5 text-center mb-3 mx-1 previous' onClick={handleHomePage}>Dashboard</button>
                              </>
                            }
                          
                            </>
                        }
                      </div>
                </div>
              }
        </div>
    </div>
    </>
  )
}
