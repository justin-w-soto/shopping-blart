import React from 'react'
import { Item } from './Item'

export const ItemList = ({ items, onChangeItem, onDeleteItem }) => {
    return (
        <ul>
            {items.map((item) => (
                <li>
                    <Item item={item} onChange={onChangeItem} onDelete={onDeleteItem}/>
                </li>
            ))}
        </ul>
    )
}



