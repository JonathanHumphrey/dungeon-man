import React, { useState } from 'react'
import useSound from 'use-sound'

import zipper from '../Sounds/zipper.mp3'

export default function Stats({player, inventory, setInventory, classes, charSubmit}) {
    
    // Boolean flag to show (or not) the expanded inventory
    const [show, setShow] = useState(false)

    //Handles the playing of the zipper sound on inventory open
    const [play] = useSound(zipper, {
        volume: 0.15,
    })
    
    //Uses the show flag to toggle the inventory screen
    const toggleShow = () => {
        setShow(!show)
        play()
    }

    //------------------------------------------------------------------------//
    // Deletes the selected item from the inventory
    //   grabs the index of the item in the inventory.items array and splices it out    
    // TODO: 
    // -make it 'drop' the item into the loot window to prevent idiocy
    const delItem = (event) => {
        let index = event.target.id
        inventory.items.splice(index, 1)
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
                <p>Health Points: {charSubmit ? player.healthPoints : null} </p>
                <p>Base Damage: {charSubmit ? player.damage : null}  </p>
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
