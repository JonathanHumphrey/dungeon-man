import React from 'react'

import Classes from '../Data/Classes'

export default function CharacterCreate({player,setPlayer, setCharSubmit, classes}) {
    
    const createClass = (event) => {
        event.preventDefault()
        setCharSubmit(true)
        
        let name = event.target[0].value
        let playerClass = event.target[1].value
        console.log(Classes[0].Wizard.damage)
        if (playerClass === 'Wizard') {
            setPlayer({
                name: [name],
                class: [playerClass],
                healthPoints: [Classes[0].Wizard.healthPoints],
                damage: [Classes[0].Wizard.damage]
            })
        } else if (playerClass === 'Fighter') {
            setPlayer({
                name: [name],
                class: [playerClass],
                healthPoints: [Classes[0].Fighter.healthPoints],
                damage: [Classes[0].Fighter.damage]
            })
        } else if (playerClass === 'Rouge') {
            setPlayer({
                name: [name],
                class: [playerClass],
                healthPoints: [Classes[0].Rouge.healthPoints],
                damage: [Classes[0].Rouge.damage]
            })
        }
        
    }

    const handleChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
    }

    return (
        <div className='characterCreate'>
            <form onSubmit={createClass}>
                <label htmlFor='name'>Enter Your Name
                    <input
                        name='name'
                        type='text'
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>Select Your Class</label>
                <select onChange={handleChange}>
                    <option value='' defaultValue>Select</option>
                    <option value='Wizard'>Wizard</option>
                    <option value='Fighter'>Fighter</option>
                    <option value='Rouge'>Rouge</option>
                </select>
                <br/>
                <input
                    type='submit'
                    value='Create!'
                />
            </form>
        </div>
    )
}
