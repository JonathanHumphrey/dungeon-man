import React, {useState} from 'react'

import Enemies from '../Data/Enemies'
//TODO: This is where the combat will take place, this will handle crits/ damage / defense (maybe)
export default function CombatWindow({ player, enemyDefeated, setEnemyDefeated }) {

    const [currentEnemy, setCurrentEnemy] = useState(Enemies[0].Goblin)
    

    const useAttack = () => {
        /* console.log(player)
        console.log(currentEnemy)
        console.log(Enemies[0].Goblin) */
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
