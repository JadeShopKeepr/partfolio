import { LoginPage } from './Pages/Login/loginPage';
import { BrowserRouter } from 'react-router';
import './App.css';
import { Routes } from 'react-router';
import { Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
