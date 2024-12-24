import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTask } from '../../context/TaskContext';
import Navbar from '../layout/Navbar';
import TaskCard from '../task/TaskCard';

export default function EmployeeDashboard() {
  const { logout, userId } = useAuth();
  const { tasks } = useTask();
  const employeeTasks = tasks.filter(task => task.employeeId === userId);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onLogout={logout} />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">My Tasks</h3>
              
              <div className="space-y-4">
                {employeeTasks.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onStatusChange={(status) => {}}
                    onEdit={() => {}}
                    onDelete={() => {}}
                    readOnly
                  />
                ))}
                
                {employeeTasks.length === 0 && (
                  <p className="text-center text-gray-500 py-4">No tasks assigned to you yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}