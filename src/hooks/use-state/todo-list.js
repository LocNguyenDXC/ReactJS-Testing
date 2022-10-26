import { useState } from "react";

function ToDoList() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem("jobs")) ?? []
  );
  const [isEdit, setIsEdit] = useState(false);
  const [jobEdit, setJobEdit] = useState("");
  const [editIndex, setEditIndex] = useState();

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };

  const handleDelete = (job) => {
    setJobs((prev) => {
      const newJobs = prev.filter((j) => j !== job);
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
  };

  const handleEdit = (job, index) => {
    setIsEdit(true);
    setJobEdit(job);
    setEditIndex(index);
  };

  const acceptEdit = (jobEdit, editIndex) => {
    setJobs((prev) => {
      const newJobs = [...prev];
      newJobs[editIndex] = jobEdit;
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      setIsEdit(false);
      return newJobs;
    });
  };
  return (
    <div className="App" style={{ padding: 20 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <div key={index}>
            <li>{job}</li>
            <button onClick={() => handleEdit(job, index)}>Edit</button>
            <button onClick={() => handleDelete(job)}>X</button>
          </div>
        ))}
      </ul>
      {isEdit && (
        <div>
          <input value={jobEdit} onChange={(e) => setJobEdit(e.target.value)} />
          <button onClick={() => acceptEdit(jobEdit, editIndex)}>Accept</button>
        </div>
      )}
    </div>
  );
}

export default ToDoList;
