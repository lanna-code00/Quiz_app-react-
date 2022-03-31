import React, { useState } from 'react'
import './result.css'
export default function Resullt() {
    const [localStore] = useState(JSON.parse(localStorage.getItem('answers')) || []);
    const flatten = [].concat.apply([], localStore)
    let emptyObjects = flatten.filter(value => value.answer !== '');

  return (
    <>
    {
       flatten?.length < 1 ? <h2 className='mt-5 text-center text-white'>NO RESULTS FOR YOU YET, TRY TAKING A SURVEY FIRST!</h2> :
        <div className='container'>
          <div  className='row mx-auto justify-content-center'>
                <div className='col-md-12'>
                              <table className='shadow table-bordered'>
                                <thead>
                                  <tr>
                                    <th>QUESTIONS</th>
                                    <th>YOUR ANSWERS</th>
                                    <th>CORRECT ANSWERS</th>
                                  </tr>
                                </thead>
                                <tbody>
                                          {
                                      emptyObjects && emptyObjects?.map(({answer, question, correct}) => 
                                          <tr key={answer}>
                                          <td>{question}</td>
                                          <td>{answer}</td>
                                          <td>{correct}</td>
                                          </tr>
                                      
                                      )
                                  }
                                </tbody>
                              </table>
                </div>
          </div>
        </div>
    }
    </>
  )
}
