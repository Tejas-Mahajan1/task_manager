# Task Manager

Task Manager is a web application that allows users to manage tasks effectively. It is built with React.js for the frontend and Node.js with Express.js for the backend. The application provides CRUD (Create, Read, Update, Delete) functionalities for tasks, allowing users to organize their tasks efficiently.

## Features

- **Dashboard View**: Displays a list of tasks with the ability to filter tasks by status (e.g., To Do, In Progress, Done).
- **Create New Task**: Includes a form to add a new task with fields for title, description, assigned user, and status.
- **Edit Task**: Provides functionality to edit existing tasks, including updating title, description, assigned user, and status.
- **Delete Task**: Allows users to delete tasks they no longer need.
- **Responsive Design**: Ensures the application works seamlessly on various screen sizes.

## Setup

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running locally or accessible via URL

### Backend Setup

1. Clone the repository:
2. Navigate to the `backend` directory:

3. Install dependencies:


4. Start the backend server:


The backend server will start running on http://localhost:3001 by default.

### Frontend Setup

1. Navigate to the `frontend` directory:

2. Install dependencies:


3. Start the frontend development server:


The frontend server will start running on http://localhost:3000 by default.

4. Open your browser and navigate to http://localhost:3000 to view the Task Manager application.

### Connecting Frontend to Backend

- Ensure both frontend and backend servers are running simultaneously.
- The frontend server proxies requests to the backend server by default, so there's no additional setup required for API communication.

### Project Structure:
![Screenshot 2024-02-29 165058](https://github.com/Tejas-Mahajan1/task_manager/assets/114793178/22ebbdc6-320c-4fc9-967c-8867f5124b7c)





