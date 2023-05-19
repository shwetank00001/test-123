import React from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())

    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(function(){
      const allHeld = dice.every(function(item){
        return(item.isHeld)
      })
      const firstValue = dice[0].value
      const allSameValue = dice.every( item => item.value === firstValue)

      if (allHeld && allSameValue){
        setTenzies(true)
        console.log('You Won !')
      }
    },[dice])

    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }
    
    function rollDice() {
      {
        if(!tenzies){
          setDice(function(item){
            return item.map(function(dice){
              return(
                dice.isHeld ? dice : {
                  value: Math.ceil(Math.random() * 6),
                  isHeld: false,
                  id: nanoid()
              })
            })
          })       
        } else {
          setTenzies(false)
          setDice(allNewDice())
        }
      }
    }
    

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
  return (
    <div className="div-app">
      <main className="tenzies-main">
        <div>
            <h1>Tenzies</h1>
            <p>Roll the dices till they get same number.</p>
        </div>

        <div className='div-die'>
          {diceElements}
        </div>
        <button className='div-button' onClick={rollDice}>{tenzies ? "New Game" : "Roll Dice"}</button>
      </main>  
    {tenzies && <Confetti />}
    </div>
  );
}

