import React from 'react';
import { Task } from '../../types';
import { formatDate } from '../../utils/dateUtils';
import TaskStatus from './TaskStatus';
import TaskActions from './TaskActions';
import { employees } from '../../data/employees';

interface TaskCardProps {
  task: Task;
  onStatusChange: (status: string) => void;
  onEdit: () => void;
  onDelete: () => void;
  readOnly?: boolean;
}

export default function TaskCard({ task, onStatusChange, onEdit, onDelete, readOnly = false }: TaskCardProps) {
  const employeeName = employees.find(emp => emp.id === task.employeeId)?.name || 'Unknown';

  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium">{task.name}</h4>
          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
          <div className="mt-2 space-x-2">
            <span className="text-sm text-gray-500">
              Assigned to: {employeeName}
            </span>
            <span className="text-sm text-gray-500">
              Deadline: {formatDate(task.deadline)}
            </span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <TaskStatus 
            status={task.status} 
            onChange={onStatusChange}
            readOnly={readOnly}
          />
          {!readOnly && (
            <TaskActions 
              onEdit={onEdit}
              onDelete={onDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
}