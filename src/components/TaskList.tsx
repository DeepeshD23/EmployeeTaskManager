import React from 'react';
import { useTask } from '../context/TaskContext';
import { employees } from '../data/employees';
import { Pencil, Trash2 } from 'lucide-react';

export default function TaskList() {
  const { tasks, updateTask, deleteTask } = useTask();

  const getEmployeeName = (id: string) => {
    return employees.find(emp => emp.id === id)?.name || 'Unknown';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-medium mb-4">Task List</h3>
        
        <div className="space-y-4">
          {tasks.map(task => (
            <div key={task.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{task.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                  <div className="mt-2 space-x-2">
                    <span className="text-sm text-gray-500">
                      Assigned to: {getEmployeeName(task.employeeId)}
                    </span>
                    <span className="text-sm text-gray-500">
                      Deadline: {new Date(task.deadline).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <select
                    value={task.status}
                    onChange={(e) => updateTask(task.id, { status: e.target.value as any })}
                    className={`text-sm rounded-full px-3 py-1 ${getStatusColor(task.status)}`}
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                  
                  <button
                    onClick={() => {
                      const newStatus = prompt('Enter new task name:', task.name);
                      if (newStatus) updateTask(task.id, { name: newStatus });
                    }}
                    className="p-1 text-gray-500 hover:text-blue-600"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this task?')) {
                        deleteTask(task.id);
                      }
                    }}
                    className="p-1 text-gray-500 hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {tasks.length === 0 && (
            <p className="text-center text-gray-500 py-4">No tasks assigned yet</p>
          )}
        </div>
      </div>
    </div>
  );
}