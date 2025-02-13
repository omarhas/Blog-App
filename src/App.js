import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './allComponents/Header';
import Home from './allComponents/Home';
import BlogList from './allComponents/BlogList';
import BlogDetail from './allComponents/BlogDetail';
import Login from './allComponents/Login';
import ContactUs from './allComponents/ContactUs';
import AboutUs from './allComponents/AboutUs';
import { AuthProvider } from './allComponents/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogList" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

