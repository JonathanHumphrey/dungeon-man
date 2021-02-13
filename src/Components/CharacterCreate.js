import React from 'react'

export default function CharacterCreate({player,setPlayer, setCharSubmit}) {
    
    const createClass = (event) => {
        event.preventDefault()
        setCharSubmit(true)
        console.log(event.target[0].value)
        setPlayer({
            name: [event.target[0].value],
            class: [event.target[1].value]
        })
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
                    <option value='' selected disabled hidden>Select</option>
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
