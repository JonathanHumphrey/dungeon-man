import React, { useState } from 'react'
import useSound from 'use-sound'

import zipper from '../Sounds/zipper.mp3'

export default function Stats({player, inventory}) {
    const [show, setShow] = useState(false)

    
    const [play] = useSound(zipper, {
        volume: 0.15,
    })
    
    const toggleShow = () => {
        setShow(!show)
        console.log(zipper)
        play()
    }

    const delItem = (key) => {
        console.log(inventory.items)
        //delete inventory.items
    }
    return (
        <div className='statsWindow'>
            <h4>Player Stats</h4>
            <p>Name: {player.name}</p>
            <p>Class: {player.class}</p>

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
                                        <button className='del' onClick={delItem} key={index}>x</button>
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
