import React from 'react'
import './App.css';

function App() {
  
  const randomNumber1 = Math.floor(Math.random() * 6) + 1
  const randomImage1 = `dice${randomNumber1}`

  const randomNumber2 = Math.floor(Math.random() * 6) + 1
  const randomImage2 = `dice${randomNumber2}`

  let result  = <h1 className="title">Refresh Me</h1>

  if (randomNumber1 > randomNumber2) {
    result = <h1 className="title">🚩 Player 1 Wins!</h1>
  } else if (randomNumber1 < randomNumber2) {
    result = <h1 className="title">Player 2 Wins! 🚩</h1>
  } else {
    result = <h1 className="title">Draw</h1>
  }
  
  return (
    <div className="App">
      <div className="container">

        {result}

        <div className="dice">
          <p>Player 1</p>
          <img className="img1" src={require(`./asset/${randomImage1}.png`)} alt="dice"/>
        </div>

        <div className="dice">
          <p>Player 2</p>
          <img className="img2" src={require(`./asset/${randomImage2}.png`)} alt="dice"/>
        </div>
      </div>
      <footer>Copyright 2022. All rights reserved. M.A.A.</footer>
    </div>
  );
}

export default App;
