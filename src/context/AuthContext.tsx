import React, { createContext, useContext, useState } from 'react';
import { AuthContextType } from '../types';
import { employees } from '../data/employees';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    // Check admin credentials
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      setIsAdmin(true);
      setUserId('admin');
      return true;
    }

    // Check employee credentials
    const employee = employees.find(emp => emp.id === username && emp.password === password);
    if (employee) {
      setIsAuthenticated(true);
      setIsAdmin(false);
      setUserId(employee.id);
      return true;
    }

    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}