import React from 'react'

import CombatWindow from './CombatWindow'
import LootWindow from './LootWindow'

export default function GameWindow({player, enemyDefeated, setEnemyDefeated, inventory, setInventory}) {
    return (
        <div className='gameWindow'>
            <h4>Combat</h4>
            <CombatWindow
                player={player}
                enemyDefeated={enemyDefeated}
                setEnemyDefeated={setEnemyDefeated}
            />
            <LootWindow
                enemyDefeated={enemyDefeated}
                inventory={inventory}
                setInventory={setInventory}
            />
            
        </div>
    )
}
