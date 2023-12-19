import React from 'react'
import ItemList from './itemList';

export default function PackingList({ job, handleChecked, handleDelete, updateJob }) {
    return (
        <div className='list'>
            <ul>
                {job.map(data => <ItemList key={Math.ceil(Math.random() *4000)} handleChecked={handleChecked} item={data} handleDelete={handleDelete} />)
                }
            </ul>
            <div className="actions">
                <select onChange={(e) => updateJob(e.target.value === "description"? job.slice().sort((a,b) => a.description < b.description ? -1 : 1 ) : job.slice().sort((a, b) => a[e.target.value] - b[e.target.value]))} >
                    <option value={"count"}>sort by input order</option>
                    <option value={"description"}>sort by description</option>
                    <option value={"state"}>sort by packed status</option>
                </select>
                <button onClick={() => updateJob([])}>Clear</button>
            </div>
        </div>
    )
}


