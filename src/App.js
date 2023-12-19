import { useState } from "react";
import Logo from "./componnets/logo";
import Form from "./componnets/form";
import PackingList from "./componnets/packingList";
import Stats from "./componnets/stats";


export default function App() {
  const [job, setJob] = useState([])

  function handleAddJob(item) {
    setJob((j) => [...j, item])
  }
  function handleChecked(change, id, val) {
    const update = job.map(j => j[change] === id ? { ...j, state: val } : j)
    setJob(update)
  }
  function handleDelete(id) {
    const del = job.filter((j) => j.key !== id);
    setJob(del)
  }
  function updateJob(item) {
    setJob(item)
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddJob} />
      <PackingList handleChecked={handleChecked} job={job} handleDelete={handleDelete} updateJob={updateJob} />
      <Stats job={job} />
    </div>
  )
}