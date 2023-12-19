import React from 'react'

export default function ItemList( {handleChecked, item, handleDelete}) {
    return (
        <li className={`${item.state ? "finish" : ""}`} key={item.key}>
            <input type="checkbox" onChange={(e) => handleChecked("key", item.key, e.target.checked)} />
            {item.count} x {item.description}
            <button onClick={() => handleDelete(item.key)} >❌</button>
        </li>
    )
}
