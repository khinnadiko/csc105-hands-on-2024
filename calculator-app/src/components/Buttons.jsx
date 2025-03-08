import React from 'react'
import '../styles/Buttons.css'

function Buttons({ onClick }) {
  return (
    <div>
      <div className="operation-buttons">
          <button onClick={() => onClick("Add")}>Add</button>
          <button onClick={() => onClick("Subtract")}>Subtract</button>
          <button onClick={() => onClick("Multiply")}>Multiply</button>
          <button onClick={() => onClick("Divide")}>Divide</button>
        </div>
        <div className="reset-buttons">
          <button onClick={() => onClick("resetInput")}>Reset Input</button>
          <button style={{backgroundColor: '#e03444'}} onClick={() => onClick("resetResult")}>Reset Result</button>
        </div>
    </div>
  )
}

export default Buttons