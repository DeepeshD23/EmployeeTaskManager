import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import LoginPage from './components/auth/LoginPage';
import Dashboard from './components/Dashboard';
import EmployeeDashboard from './components/employee/EmployeeDashboard';

function PrivateRoute({ children, requireAdmin = false }: { children: React.ReactNode, requireAdmin?: boolean }) {
  const { isAuthenticated, isAdmin } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/employee-dashboard" />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <TaskProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute requireAdmin>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/employee-dashboard"
              element={
                <PrivateRoute>
                  <EmployeeDashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </TaskProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;