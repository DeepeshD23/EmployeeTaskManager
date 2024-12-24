import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

interface TaskActionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export default function TaskActions({ onEdit, onDelete }: TaskActionsProps) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={onEdit}
        className="p-1 text-gray-500 hover:text-blue-600"
      >
        <Pencil className="w-4 h-4" />
      </button>
      <button
        onClick={onDelete}
        className="p-1 text-gray-500 hover:text-red-600"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}