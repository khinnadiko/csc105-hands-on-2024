import React from 'react'
import { useState } from 'react';
import "../styles/AddItem.css";

export const AddItem = ({ addItem }) => {
    const [value, setValue] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        if (value) {
            addItem(value);
            setValue("");
        }
    }

    return (
        <form onSubmit={handleAdd} className="AddItem">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="item-input"
                placeholder="Add a new item"
            />
            <button type="submit" className="item-btn">Add</button>
        </form>
    )
}