import './App.scss';
import Card from './components/card/Card';
import { useEffect,useState } from 'react'
import Deck from './components/deck/Deck';
const SUITS=["♠","♥","♣","♦"]
const VALUES =["A","2","3","4","5","6","7","8","9","10","K","Q","J"]



function App() {
  const [cards, setCards] =useState([])
  const value = ""
  const string= ""

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
    console.log(deck);
    // return SUITS.flatMap(suit =>{
    //     return VALUES.map(value=>{
    //         return new Card(suit, value)
    //     })
    // })
  }

useEffect(() =>{
   //makeDeck()
  //console.log(cleanDeck)
})

  return (
    <div className="App">
      <h1>Black Jack</h1>
      <button onClick={cleanDeck}>Start Game</button>
      <div className="DecksAligned">
      <Deck/>
      {cards.map(card => (
      <Card
      key = {card.id}
      card = {card}
      value={card.value}
      suit={card.suit}
      />
      ))}

      </div>
    </div>
  );
}

export default App;
