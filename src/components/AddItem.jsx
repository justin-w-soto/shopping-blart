import React from 'react'
import { useState } from 'react'

export const AddItem = ({ onAddItem }) => {
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      setText('');
      onAddItem(text);
    };
    return (
        <form onSubmit={handleSubmit} className="form">
        <input
          className="add-item"
          value={text}
          placeholder="Add an Item"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          ADD
        </button>
      </form>
    )
}
