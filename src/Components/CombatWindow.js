import React, {useState} from 'react'

import Enemies from '../Data/Enemies'
//TODO: handle proficiency/upgrades (item shop maybe??)
export default function CombatWindow({ player, enemyDefeated, setEnemyDefeated }) {
    // Seperates the enemy from the Enemies.js object file so there is no mutation of variables 
    const [currentEnemy, setCurrentEnemy] = useState(Enemies[0].Goblin)
    
    //--------------------------------------------------------------------------//
    // Uses the player's attack power to deduct Hp from the enemy
    // Grabs player damage data from the player object        
    // TODO: 
    // - proficiency stats (+1 or +2 possibly though an item shop of some type)
    const useAttack = () => {
        let damage = player.damage[0]
        let hpLeft = currentEnemy.healthPoints - player.damage
        if (hpLeft <= 0) {
            hpLeft = 0
            setEnemyDefeated(true)
        }
        console.log(hpLeft)
        setCurrentEnemy({
            ...currentEnemy,
            healthPoints: hpLeft
        })
    }

    return (
        <div className='combatWindow'>
            Enemy
             <hr />
            <div>
                <p>Type: {currentEnemy.type}</p>
                <p>Health Points: {currentEnemy.healthPoints !== 0 ? currentEnemy.healthPoints : 'Dead'}</p>
                <p>Base Damage: {currentEnemy.damage}</p>
            </div>
            <hr />
            <button onClick={useAttack}>Attack!</button>
            
        </div>
    )
}
