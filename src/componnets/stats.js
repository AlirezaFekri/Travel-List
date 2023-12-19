export default function Stats({ job }) {

    return (
        <footer className="stats">
            <em>
                You have {job.length} items on your list, and you already packed {job.length > 0 ? job.filter(j => j.state === true).length : 0} ({job.filter(j => j.state === true).length > 0 ? Math.ceil((job.filter(j => j.state === true).length * 100) / job.length) : 0}%💼)
            </em>
        </footer>
    )
}

