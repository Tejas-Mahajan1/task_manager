import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
     await fetch("http://localhost:3001/api/tasks")
        .then((res) => res.json())
        .then((data) => {
          setTasks(data);
          setFilteredTasks(data);
        });
      //   const data = await res.json();
      // setTasks(data);
      // setFilteredTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
    if (event.target.value === "All") {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter(
        (task) => task.status === event.target.value
      );
      setFilteredTasks(filtered);
    }
  };

  const handleTaskSubmit = async (taskData) => {
    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });
      const newTask = await response.json();
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleTaskDelete = async (taskId) => {
    try {
      await fetch(`/api/tasks/${taskId}`, {
        method: "DELETE",
      });
      const updatedTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(updatedTasks);
      setFilteredTasks(updatedTasks);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleTaskUpdate = async (taskId, updatedData) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      const updatedTask = await response.json();
      const updatedTasks = tasks.map((task) =>
        task._id === taskId ? updatedTask : task
      );
      setTasks(updatedTasks);
      setFilteredTasks(updatedTasks);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Task Manager</h1>
      <TaskForm onSubmit={handleTaskSubmit} />
      <div className="filter-container">
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <TaskList
        tasks={filteredTasks}
        onDelete={handleTaskDelete}
        onUpdate={handleTaskUpdate}
      />
    </div>
  );
}

export default App;
