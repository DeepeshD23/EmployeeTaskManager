import React from 'react';
import { getStatusColor } from '../../utils/taskUtils';

interface TaskStatusProps {
  status: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
}

export default function TaskStatus({ status, onChange, readOnly = false }: TaskStatusProps) {
  if (readOnly) {
    return (
      <span className={`text-sm rounded-full px-3 py-1 ${getStatusColor(status)}`}>
        {status}
      </span>
    );
  }

  return (
    <select
      value={status}
      onChange={(e) => onChange(e.target.value)}
      className={`text-sm rounded-full px-3 py-1 ${getStatusColor(status)}`}
    >
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
  );
}