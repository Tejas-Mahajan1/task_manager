import  { useState } from 'react';

function TaskItem({ task, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);
  const [updatedStatus, setUpdatedStatus] = useState(task.status);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    onUpdate(task._id, { title: updatedTitle, description: updatedDescription, status: updatedStatus });
    setEditing(false);
  };

  return (
    <div className="task-item">
      {!editing ? (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </div>
      ) : (
        <form onSubmit={handleUpdateSubmit}>
          <input type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
          <textarea value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} />
          <select value={updatedStatus} onChange={(e) => setUpdatedStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button type="submit">Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default TaskItem;
