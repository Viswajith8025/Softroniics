import logo from './logo.svg';
import './App.css';
import { Login } from './Auth/Login';
import { Register } from './Auth/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Auth/Home';


function App() {
  return (
    <>
      {/* <App /> */}
      {/* <TwTest/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
