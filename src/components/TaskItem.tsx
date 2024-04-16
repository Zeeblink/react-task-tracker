// src/TaskItem.tsx

import React from "react";
import { Task } from "./types";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggleReminder: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onDelete,
  onToggleReminder,
}) => {
  return (
    <li className="flex justify-between items-center border-b border-gray-200 p-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.reminder}
          onChange={() => onToggleReminder(task.id)}
          className="mr-4"
        />
        <div className={task.reminder ? "line-through" : ""}>
          {/* {task.taskText} */}
          <div>{task.taskText}</div>
          <div className="text-xs">{task.day}</div>
        </div>
        {/* <span className={task.reminder ? "line-through" : ""}>{task.day}</span> */}
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
