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

  const [player, setPlayer] = useState({
    name: '',
    class: '',
    healthPoints: 0,
    damage: 0
  })
  const [classes, setClasses] = useState({
    Wizard: {
      healthPoints: 8,
      damage: 9
    },
    Fighter: {
      healthPoints: 10,
      damage: 6
    },
    Rouge: {
      healthPoints: 8,
      damage: 12
    }
  })
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
        classes={classes}
      />
      <div className='gameContainer'>
        <Stats 
          player={player}
          inventory={inventory}
          setInventory={setInventory}
          classes={classes}
          charSubmit={charSubmit}
        />
        <GameWindow
          player={player}
          enemyDefeated={enemyDefeated}
          setEnemyDefeated={setEnemyDefeated}
        />
      </div>
    </div>
  );
}

export default App;
