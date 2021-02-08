import React, {useState} from 'react'
import './App.css';

//Component Imports
import Header from './Components/Header'
import GameWindow from './Components/GameWindow'
import Stats from './Components/Stats'

function App() {

  const [player, setPlayer] = useState({
    name: 'Jimmy',
    class: 'Wizard',
    healthPoints: 5
  })
  const [inventory, setInventory] = useState({
    gold: 0,
    items: ['rope','lockpick']
  })

  return (
    <div className="App">
      <Header />
      <div className='gameContainer'>
        <Stats 
          player={player}
          inventory={inventory}
        />
        <GameWindow />
      </div>
    </div>
  );
}

export default App;
