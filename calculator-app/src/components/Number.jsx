import React from 'react'
import '../styles/Number.css'

function Number({ num, onChange }) {
  return (
    <div>
        <input type="number"
        value={num}
        onChange={onChange}
        placeholder = "Enter a number"
        />
    </div>
  )
}

export default Number