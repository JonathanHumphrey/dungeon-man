import React, {useState} from 'react'
import './App.css';

//Component Imports
import Header from './Components/Header'
import CharacterCreate from './Components/CharacterCreate'
import GameWindow from './Components/GameWindow'
import Stats from './Components/Stats'

function App() {
  //Boolean flags for commpunication between components
  const [charSubmit, setCharSubmit] = useState(false)
  const [enemyDefeated, setEnemyDefeated] = useState(false)
  
  // Player object that is altered by the CharacterCreate.js component
  const [player, setPlayer] = useState({
    name: '',
    class: '',
    healthPoints: 0,
    damage: 0
  })
  
  // Seperate inventory data, still tied to the player.
  const [inventory, setInventory] = useState({
    gold: 0,
    items: ['rope','lockpick']
  })

  return (
    <div className="App">
      <Header />
      <CharacterCreate
        player={player}
        setPlayer={setPlayer}
        setCharSubmit={setCharSubmit}
      />
      <div className='gameContainer'>
        <Stats 
          player={player}
          inventory={inventory}
          setInventory={setInventory}
          charSubmit={charSubmit}
        />
        <GameWindow
          player={player}
          enemyDefeated={enemyDefeated}
          setEnemyDefeated={setEnemyDefeated}
          inventory={inventory}
          setInventory={setInventory}
        />
      </div>
    </div>
  );
}

export default App;
