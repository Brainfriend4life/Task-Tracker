import { useState } from "react";

export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const handleEdit = () => {
    if (isEditing) onEdit(task.id, newName);
    setIsEditing(!isEditing);
  };

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "0.5rem",
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {isEditing ? (
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          style={{ marginLeft: "1rem", flexGrow: 1 }}
        />
      ) : (
        <span
          style={{
            marginLeft: "1rem",
            textDecoration: task.completed ? "line-through" : "none",
            flexGrow: 1,
          }}
        >
          {task.name}
        </span>
      )}
      <button onClick={handleEdit} style={{ marginLeft: "0.5rem" }}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        onClick={() => onDelete(task.id)}
        style={{ marginLeft: "0.5rem" }}
      >
        Delete
      </button>
    </li>
  );
}
