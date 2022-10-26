import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, removeJob } from "./actions";
import logger from "./logger";

function UseReducerToDoList() {
  const [state, dispatch] = useReducer(logger(reducer), initState);

  const { job, jobs } = state;

  const handleClick = () => {
    dispatch(addJob(job));
    h3Ref.current.focus();
  };

  const h3Ref = useRef();

  return (
    <div>
      <h3>Todo</h3>
      <input
        ref={h3Ref}
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(removeJob(index))}
            >
              {" "}
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseReducerToDoList;
