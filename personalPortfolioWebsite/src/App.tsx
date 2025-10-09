import React from 'react';
import { RegPage, LoginPage, NotFoundPage } from '@pages';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import './App.css';

const AuthRoutes = () => (
  <Routes>
    <Route path='/auth' element={<LoginPage />} />
    <Route path='/registration' element={<RegPage />} />
    <Route path='/*' element={<Navigate to='/auth' />} />
  </Routes>
);

const MainRoutes = () => (
  <Routes>
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
);

function App() {
  const [isAuth, setIsAuth] = React.useState(false);
  return <BrowserRouter>{isAuth ? <MainRoutes /> : <AuthRoutes />}</BrowserRouter>;
}

export default App;
