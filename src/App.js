import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Headers from './components/Headers';
import CartDetails from "./components/CartDetails"
import { Route, Routes } from 'react-router-dom';
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<CartDetails/>}/>
      </Routes>
      <Toaster/>
    </>
  );
}

export default App;
