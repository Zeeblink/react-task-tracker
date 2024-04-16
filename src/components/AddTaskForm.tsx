import React, { useState } from "react";
import { Task } from "./types";

interface AddTaskFormProps {
  addTask: (task: Task) => void;
}

const AddTaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [reminder, setReminder] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskText || !day) return;

    addTask({ taskText, day, reminder });
    setTaskText("");
    setDay("");
    setReminder(false);
  };

  return (
    <div className="max-w-xs mx-auto mt-8">
      <div className="mb-4">
        <label
          htmlFor="task"
          className="block text-sm font-medium text-gray-700"
        >
          Task
        </label>
        <input
          type="text"
          id="task"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter Task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="day"
          className="block text-sm font-medium text-gray-700"
        >
          Set day
        </label>
        <input
          type="text"
          id="day"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="Set Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <input
          id="reminder"
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
        <label htmlFor="reminder" className="ml-2 block text-sm text-gray-900">
          Reminder
        </label>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-900 ml-32"
          onClick={handleSubmit}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTaskForm;
