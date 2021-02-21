import React from 'react'
//TODO: this is where the player will interact with loot that was dropped by the enemy, this will not be random as far as I know
export default function LootWindow({enemyDefeated}) {
    
    const lootItem = () => {
       console.log(enemyDefeated)
    }

    return (
        <div className = 'lootWindow'>
            <h4>Loot</h4>
            {enemyDefeated ?
                <div>
                    <label htmlFor='lootableItem'></label>
                    <button name ='lootableItem' onClick={lootItem}>Loot</button>
                </div>
             : null   
            }
        </div >
    )
}
