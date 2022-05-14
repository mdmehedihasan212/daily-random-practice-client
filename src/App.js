import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'animate.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
