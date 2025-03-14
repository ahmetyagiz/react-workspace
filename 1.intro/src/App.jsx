import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Javascript kodları yazılır
  let a = 15;
  const firstName = "Ahmet";

  let grade1 = 60;
  let grade2 = 80;

  let eligibility = true;

  let names = [
    "Emma",
    "Jack",
    "Bruce",
    "Brian"
  ]

  return (
    <div>
      <p>a variable value is: {a}</p>
      <p>Customer name: {firstName}</p>
      <p>Grade Average: {(grade1 + grade2) / 2}</p>
      {eligibility ? <p>You are "ELIGIBLE" to get a driving license</p> : <p>You are "NOT ELIGIBLE" to get a driving license</p>}

      {
        names.map((name, index) => (
          <div style={{
            backgroundColor: 'orange',
            border: '1px solid black'
          }} key={index}>{name}</div>
        ))
      }
    </div>
  )
}

export default App
