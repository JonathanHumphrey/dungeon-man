import React from 'react'

import CombatWindow from './CombatWindow'
import LootWindow from './LootWindow'

export default function GameWindow({player, enemyDefeated, setEnemyDefeated}) {
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
            />
            
        </div>
    )
}
