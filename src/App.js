import './App.scss';
import Card from './components/card/Card';
import { useEffect,useState } from 'react'
import Deck from './components/deck/Deck';
const SUITS=["♠","♥","♣","♦"]
const VALUES =["A","2","3","4","5","6","7","8","9","10","K","Q","J"]



function App() {
  const [cards, setCards] =useState([])


  const cleanDeck = (value, suit) =>{
    let deck = []
    for(let i = 0; i < SUITS.length; i++){
      for(let x=0; x < VALUES.length; x++){
        let card = {value: VALUES[x], suit: SUITS[i]};
        deck.push(card);
        deck.map((card)=> ({...card, id:({suit:suit}+{value:value})}))
        setCards(deck)
      }
    }
    console.log("clean Deck created!");
  }

  const pop = (cards) =>{
    cards.shift()
  }
  const push = (card) =>{
    cards.push(card)
  }

  const shuffle = (deck) =>{
    for (let i = cards.length - 1; i>0; i--){
      const newIndex = Math.floor(Math.random() * (i+1))
      const oldValue = cards[newIndex]
      cards[newIndex] = cards[i]
      cards[i]=oldValue
    }
    console.log("shuffled!")
    console.log(cards)
  }

  const deckSetup = () =>{
    cleanDeck()
    shuffle()
  }


useEffect(() =>{

})

  return (
    <div className="App">
      <h1>Black Jack</h1>
      <button onClick={deckSetup}>Start Game</button>
      <div className="DecksAligned">
      <Deck/>
      </div>
    </div>
  );
}

export default App;
