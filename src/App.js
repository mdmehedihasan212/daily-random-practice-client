import './App.css';
import 'animate.css';
import Navbar from './components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import SignUp from './components/Login/SignUp';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
