// src/App.tsx

import React, { useState } from "react";
import TaskList from "../src/components/TaskList";
import { Task } from "./types";
import AddTaskForm from "../src/components/AddTaskForm";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      taskText: "Workout",
      day: "12-04-2024",
      reminder: false,
    },
    {
      id: 1,
      taskText: "Debug code",
      day: "14-04-2024",
      reminder: false,
    },
    {
      id: 1,
      taskText: "Video call with Elon",
      day: "01-05-2024",
      reminder: false,
    },
  ]);

  const [showForm, setshowForm] = useState<boolean>(false);
  const [addNewText, setAddNewText] = useState<string>("Add New");

  // Function to toggle add new task
  const toggleForm = () => {
    setshowForm(!showForm);
    setAddNewText((prevText) => (prevText === "Add New" ? "Close" : "Add New"));
  };

  // Function to add new task to task TaskList
  const addTask: Function = (task: Task) => {
    const newTask: Task = {
      ...task,
      id: Math.floor(Math.random() * 99) + 2,
    };
    setTasks([...tasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function to toggle reminder for a task
  const toggleReminder = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task,
      ),
    );
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mt-4 text-center width-full">
        Task Tracker
      </h1>
      {showForm && <AddTaskForm addTask={addTask} />}
      <div className="bg-gray-100 h-screen">
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggleReminder={toggleReminder}
          toggleForm={toggleForm}
          addNewText={addNewText}
        />
      </div>
    </div>
  );
};

export default App;
