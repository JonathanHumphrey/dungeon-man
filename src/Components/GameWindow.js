import React from 'react'

import CombatWindow from './CombatWindow'
import LootWindow from './LootWindow'

export default function GameWindow({player}) {
    return (
        <div className='gameWindow'>
            poop
            <CombatWindow
                player={player}
            />
            <LootWindow />
            
        </div>
    )
}
