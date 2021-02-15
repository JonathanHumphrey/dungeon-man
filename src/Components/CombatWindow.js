import React, {useState} from 'react'

import Enemies from '../Data/Enemies'
//TODO: This is where the combat will take place, this will handle crits/ damage / defense (maybe)
export default function CombatWindow({player}) {

    const [currentEnemy, setCurrentEnemy] = useState(Enemies[0].Goblin)
    

    const useAttack = () => {
        console.log(player)
        console.log(currentEnemy)
        let damage = player.damage[0]
        let damageDone = currentEnemy.healthPoints - player.damage
        console.log(damageDone)
        setCurrentEnemy({
            ...currentEnemy,
            healthPoints: [damageDone]
        })
    }

    return (
        <div className='combatWindow'>
            Enemy
             <hr />
            <div>
                <p>Type: {currentEnemy.type}</p>
                <p>Health Points: {Enemies[0].Goblin.healthPoints}</p>
                <p>Base Damage: {Enemies[0].Goblin.damage}</p>
            </div>
            <hr />
            <button onClick={useAttack}>Attack!</button>
            
        </div>
    )
}
