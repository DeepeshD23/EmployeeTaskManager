export interface Employee {
  id: string;
  name: string;
  password: string;
}

export interface Task {
  id: string;
  name: string;
  description: string;
  deadline: string;
  employeeId: string;
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  isAdmin: boolean;
  userId: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  deleteTask: (id: string) => void;
}