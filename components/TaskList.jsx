import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onEdit, onDelete }) {
  if (tasks.length === 0) return <p>No tasks added yet.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
