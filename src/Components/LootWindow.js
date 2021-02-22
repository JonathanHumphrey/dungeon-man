import React, {useState} from 'react'
//TODO: Handle items as well as gold, also to handle dropped inventory items to prevent misclicks
export default function LootWindow({ enemyDefeated, inventory, setInventory }) {
    
    //Boolean flag to remove the item from the loot window when it is looted
    const [looted, setLooted] = useState(false)

    //-------------------------------------------------------------//
    // Loots Items that are in the loot window
    // Checks the given ID and affords the player that item        
    // TODO: 
    // -Handle item looting (possible refactoring)

    const lootItem = (event) => {
        let lootedItem = Number(event.target.value)
        if (event.target.previousSibling.id === 'gold') {
            let prevGold = inventory.gold
            setInventory({
                ...inventory,
                gold: prevGold += lootedItem
            })
            setLooted(true)
        }
        
    }

    return (
        <div className = 'lootWindow'>
            <h4>Loot</h4>
            {enemyDefeated && !looted ?
                <div>
                    <label htmlFor='lootableItem' id='gold'>Gold Pieces x5</label>
                    <button name ='lootableItem' onClick={lootItem} value='5'>Loot</button>
                </div>
             : null   
            }
        </div >
    )
}
