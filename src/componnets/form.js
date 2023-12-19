import React, { useState } from 'react'

export default function Form({ handleAddItem }) {

    const [Cneed, setCNeed] = useState(1);
    const [need, setNeed] = useState("");
    let count = []

    for (let i = 0; i < 30; i++) {
        count.push(i + 1)
    }

    return (
        <div className="add-form">
            <h3>
                Waht do you need for your 😍 trip?
            </h3>
            <div>
                <select onChange={(e) => setCNeed(e.target.value)}>
                    {
                        count.map(c => <option value={c} key={c} >{c}</option>)
                    }
                </select>
                <input type="text" onChange={(e) => setNeed(e.target.value)} placeholder="waht's you need?" value={need} />
                <button onClick={() => { handleAddItem({ key: Math.ceil(Math.random() * 4000), count: Cneed, description: need, state: false }); setNeed(""); }}>add</button>
            </div>
        </div>

    )
}