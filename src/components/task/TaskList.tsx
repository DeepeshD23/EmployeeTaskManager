import React from 'react';
import { useTask } from '../../context/TaskContext';
import TaskCard from './TaskCard';

export default function TaskList() {
  const { tasks, updateTask, deleteTask } = useTask();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-medium mb-4">Task List</h3>
        
        <div className="space-y-4">
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={(status) => updateTask(task.id, { status: status as any })}
              onEdit={() => {
                const newName = prompt('Enter new task name:', task.name);
                if (newName) updateTask(task.id, { name: newName });
              }}
              onDelete={() => {
                if (confirm('Are you sure you want to delete this task?')) {
                  deleteTask(task.id);
                }
              }}
            />
          ))}
          
          {tasks.length === 0 && (
            <p className="text-center text-gray-500 py-4">No tasks assigned yet</p>
          )}
        </div>
      </div>
    </div>
  );
}