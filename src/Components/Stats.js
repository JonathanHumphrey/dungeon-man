import React from 'react'

export default function Stats({player, inventory}) {
    return (
        <div className='statsWindow'>
            <h4>Player Stats</h4>
            <p>Name: {player.name}</p>
            <p>Class: {player.class}</p>

            <div className='inventoryWindow'>
                <h4>Inventory</h4>
                <p>Gold: {inventory.gold}</p>
                <hr />
                {inventory.items.map((item, index) => (
                    <ul>
                        <li key={index}>{item}</li>
                    </ul>
                ))}
            </div>
        </div>

    )
}
