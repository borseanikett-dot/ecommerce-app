import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Router>
          <div className="App">
            <Header />
            <main>
              <Routes>
                {/* Default Route - Redirect to Login */}
                <Route path="/" element={<Navigate to="/login" replace />} />
                
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/categories" element={<Products />} />
                <Route path="/about" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><h1 className="text-3xl font-bold text-gray-900 mb-4">About Us</h1><p className="text-gray-600">This is a demo e-commerce application built with React and TypeScript.</p></div></div>} />
                
                {/* Protected Routes */}
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute requiredRole="admin">
                      <AdminDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/staff" 
                  element={
                    <ProtectedRoute requiredRole="staff">
                      <div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><h1 className="text-3xl font-bold text-gray-900 mb-4">Staff Dashboard</h1><p className="text-gray-600">Staff management features coming soon!</p></div></div>
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><h1 className="text-3xl font-bold text-gray-900 mb-4">User Dashboard</h1><p className="text-gray-600">User dashboard features coming soon!</p></div></div>
                    </ProtectedRoute>
                  } 
                />
                
                {/* Error Routes */}
                <Route path="/unauthorized" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><h1 className="text-3xl font-bold text-red-600 mb-4">Unauthorized</h1><p className="text-gray-600">You don't have permission to access this page.</p></div></div>} />
              </Routes>
            </main>
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
                success: {
                  duration: 2000,
                  iconTheme: {
                    primary: '#10B981',
                    secondary: '#fff',
                  },
                },
                error: {
                  duration: 4000,
                  iconTheme: {
                    primary: '#EF4444',
                    secondary: '#fff',
                  },
                },
              }}
            />
          </div>
        </Router>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
