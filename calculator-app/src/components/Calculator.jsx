import React from 'react'
import Result from './Result'
import Number from './Number'
import Buttons from './Buttons'
import { useState } from 'react'

function Calculator() {
  const [num, setNum] = useState('');
  const [res, setResult] = useState(0);

  const calculate = (operation) => {
    switch (operation) {
      case "Add": 
        setResult(num+res);
        break;
      case "Subtract": 
        setResult(res-num);
        break;
      case "Multiply": 
        setResult(res*num);
        break;
      case "Divide": 
        setResult(res/num);
        break;
      case "resetInput": 
        setNum('');
        break;
      case "resetResult":
        setResult(0);
        break;
    }
  }
  return (
    <>
    <Result 
    res = {res}/>
    <Number 
    num = {num} onChange={(e) => setNum(parseFloat(e.target.value))}/>
    <Buttons
    onClick = {calculate} />
    </>
  )
}

export default Calculator