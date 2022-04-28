import './App.scss';
import Card from './components/card/Card';
import Deck from './components/deck/Deck.jsx';

function App() {
  return (
    <div className="App">
      <div className="DecksAligned">
      <Deck/>
      <Card value={10} suit={"♥"}/>
      <Card value={8} suit={"♦"}/>

      </div>

    </div>
  );
}

export default App;
