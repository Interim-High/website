"use client";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const addTask = () => {
    if (!newTask.trim()) return;
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }
    setNewTask("");
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index: number) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Todo List</h2>
        <div className="flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border p-2 flex-1 rounded-l"
            placeholder="Add a new task"
          />
          <button onClick={addTask} className="bg-black text-white p-2 rounded-r">
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
        <ul className="mt-4">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center border-b py-2">
              <span>{task}</span>
              <div>
                <button
                  onClick={() => editTask(index)}
                  className="bg-gray-300 text-black px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
