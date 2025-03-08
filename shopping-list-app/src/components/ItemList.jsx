import React from 'react'
import '../styles/ItemList.css'

export const ItemList = ({ listItem, deleteItem, toggleStatus}) => {



return (
    <div onClick={() => toggleStatus(listItem.id)} className= {(listItem.bought) ? "bought ItemList": "ItemList"}>
        <div className="item-container">
            <p>{listItem.listItem}</p>
        </div>
        <button style={{opacity: 1}} onClick={(e) => {e.stopPropagation(); deleteItem(listItem.id)}}>Remove</button>
    </div>
    )
}