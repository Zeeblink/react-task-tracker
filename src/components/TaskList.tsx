// src/TaskList.tsx

import React from "react";
import { Task } from "../types";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggleReminder: (id: number) => void;
  toggleForm: () => void;
  addNewText: string;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDelete,
  onToggleReminder,
  toggleForm,
  addNewText,
}) => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center border-b border-gray-500 p-4">
        <h3 className="text-lg font-semibold mb-4 ml-3">Tasks</h3>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-900"
          onClick={toggleForm}
        >
          {addNewText}
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggleReminder={onToggleReminder}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
