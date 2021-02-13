import React, { useState } from 'react'
import useSound from 'use-sound'

import zipper from '../Sounds/zipper.mp3'

export default function Stats({player, inventory, setInventory, classes, charSubmit}) {
    const [show, setShow] = useState(false)

    
    const [play] = useSound(zipper, {
        volume: 0.15,
    })
    
    const toggleShow = () => {
        setShow(!show)
        console.log(zipper)
        play()
    }

    const delItem = (event) => {
        let index = event.target.id
        //console.log(event.target.id)
        //console.log(inventory.items[event.target.id])
        inventory.items.splice(index, 1)
        console.log(inventory.items)
        setInventory({
            ...inventory,
        })
    }
    
    return (
        <div className='statsWindow'>
            <h4>Player Stats</h4>
            <p>Name: {player.name}</p>
            <p>Class: {player.class}</p>
            <div className='health-damage'>
                <p>Health Points: {charSubmit ? classes[player.class].healthPoints : null} </p>
                <p>Base Damage: {charSubmit ? classes[player.class].damage : null}  </p>
            </div>
            

            <div className='inventoryWindow'>
                <div className='actualInventory'>
                    <h4 className='inv' onClick={toggleShow}>Inventory</h4>
                    {show ? 
                        <div className=''>
                            <hr />
                            <p>Gold: {inventory.gold}</p>
                            {inventory.items.map((item, index) => (
                                <ul>
                                    <li key={index}>{item}
                                        <button className='del' onClick={delItem} id={index}>x</button>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    : null
                    }
                </div>
            </div>
        </div>

    )
}
