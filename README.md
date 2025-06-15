### Task Management System

## Overview

A simple task management application built with React for the frontend and Node.js/Express for the backend. The application allows users to create, view, update, and delete tasks.

## Features

- Create new tasks with name and description
- View list of all tasks
- Edit existing tasks
- Delete tasks
- Error handling and loading states

## Technologies used

- Frontend: React, Axios
- Backend: Node.js, Express
- Styling: CSS

## Setup instructions

# 1. Clone the repository

``
git clone https://github.com/jobigutenburg02/task-management-system.git
cd task-management-system
``

# 2. Navigate to the backend repository

``
cd backend
``

# 3. Install dependencies

``
npm install
``

# 4. Start the backend server

``
npm start
``

The backend server will run on http://localhost:5000

# 5. Open a new terminal and navigate to the frontend directory

``
cd ../frontend
``

# 6. Install dependencies

``
npm install
``

# 7. Start the React application

``
npm start
``

The frontend application will run on http://localhost:3000

## Project Structure

task-management-system/
├── backend/
│   ├── server.js    
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── services/
    │   ├── App.js
    │   └── index.js
    └── package.json


## API Endpoints

- GET /tasks: Get all tasks

- POST /tasks: Create a new task

- PUT /tasks/:id: Update a task

- DELETE /tasks/:id: Delete a task


## Contact

For questions or feedback, please contact:

- Johan: [jbros2513@gmail.com](jbros2513@gmail.com)
