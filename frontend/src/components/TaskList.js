import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Task List</h1>
      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="border p-2 rounded">
            <strong>{task.title}</strong>: {task.description} -{" "}
            {task.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
