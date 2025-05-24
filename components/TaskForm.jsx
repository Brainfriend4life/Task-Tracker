import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    onAdd(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: "0.5rem", width: "80%" }}
      />
      <button type="submit" style={{ padding: "0.5rem" }}>
        Add
      </button>
    </form>
  );
}
