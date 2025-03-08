import React from 'react'
import { v4 as uuidv4 } from "uuid";
import {AddItem} from './AddItem';
import {ItemList} from './ItemList';
import { useState } from 'react'
import '../styles/ListWrapper.css'

export const ListWrapper = () => {
    const [items, setItems] = useState([]);

    //Add item
    const addItem = (item) => {
        setItems([
            ...items,
            { id:uuidv4(), listItem: item, bought: false}
        ]);
    }

    // Delete item
    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    }

    //Mark if item has been bought
    const toggleStatus = (id) => {
        setItems(
            items.map((item) => item.id === id? {...item, bought: !item.bought }: item)
        );
    }

    return (
        <div className="ListWrapper">
             <AddItem addItem={addItem} /> 
         {items.map((item) => (
            <ItemList
                key={item.id}
                listItem={item}
                deleteItem={deleteItem}
                toggleStatus={toggleStatus}
            />
        ))}
        </div>
    );
}