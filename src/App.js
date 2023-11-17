import './App.css';
import {ToastContainer} from "react-toastify"
import { Nav } from './components/Navbar/Nav';
import { Route, Router, Routes } from 'react-router-dom';
import { StuData } from './components/Student data/StuData';
import { Addcontact } from './components/Register/Addcontact';
import { Editcontact } from './components/Editdata/Editcontact';

function App() {
  return (
    <div>
  <ToastContainer/>
    <Nav/>
 <Routes>
  <Route path='/' element={<Addcontact/>}></Route>
  <Route path='/studentdata' element={<StuData/>}></Route>
  <Route path='/editcontact/:id' element={<Editcontact/>}></Route>
   </Routes>
 

   
    </div>
  );
}

export default App;
