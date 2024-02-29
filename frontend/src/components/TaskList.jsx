
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} onDelete={onDelete} onUpdate={onUpdate}  />
      ))}
    </div>
  );
}

export default TaskList;
