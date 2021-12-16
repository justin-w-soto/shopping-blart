import React from 'react'
import { useReducer } from 'react'

// create reducer function to handle state flux
// use switch inside reducer
// use dispatch to update state
// set initial value for useReducer
// include add edit delete functionality
// behavior test all 
const initialItems = [
    { id: 0, text: 'yellow', done: false }, 
    { id: 1, text: 'green', done: false }, 
    { id: 2, text: 'blue', done: false } 
]

const customReducer = (items, action) => {
    // switch lives in here 
    switch (action.type) {
        case 'added': {
            return [
                ...items,
                {
                    id: action.id,
                    text: action.text,
                    done: false
                }
            ]
        }
        case 'updated': {
            return items.map((item) => {
                if (item.id === action.task.id) {
                    return action.task
                }
                return item
            })
        }
        case 'deleted': {
            return items.filter((item) => 
            item.id !== action.id)
        }
        default: {
            initialItems
        }
    }

}

export const Shopping = () => {
const [someState, dispatch] = useReducer(customReducer, initialItems)

    return (
        <div>
            
        </div>
    )
}
