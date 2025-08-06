import React from 'react';
import { useAuth } from '../context/AuthContext';

const TestAuthPage = () => {
  const { user, isAuthenticated, token, loading } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Authentication Debug Page</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Current Auth State:</h2>
          
          <div className="space-y-4">
            <div>
              <strong>Loading:</strong> {loading ? 'Yes' : 'No'}
            </div>
            
            <div>
              <strong>Authenticated:</strong> {isAuthenticated ? 'Yes' : 'No'}
            </div>
            
            <div>
              <strong>Token:</strong> {token ? 'Present' : 'None'}
            </div>
            
            {user && (
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">User Details:</h3>
                <div className="space-y-2">
                  <div><strong>Name:</strong> {user.name}</div>
                  <div><strong>Email:</strong> {user.email}</div>
                  <div><strong>Role:</strong> {user.role}</div>
                  <div><strong>ID:</strong> {user._id}</div>
                </div>
              </div>
            )}
            
            {!user && !loading && (
              <div className="text-red-600">
                No user data found. Please log in first.
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Test Admin Access:</h2>
          
          {user?.role === 'admin' ? (
            <div className="text-green-600">
              ✅ You have admin access! You should see the "Admin Panel" option in the user menu.
            </div>
          ) : (
            <div className="text-red-600">
              ❌ You don't have admin access. Current role: {user?.role || 'None'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestAuthPage; 