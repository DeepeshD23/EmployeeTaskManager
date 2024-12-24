import React from 'react';
import { LockKeyhole } from 'lucide-react';
import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-500 p-3 rounded-full">
            <LockKeyhole className="w-8 h-8 text-white" />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Admin Login</h2>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}