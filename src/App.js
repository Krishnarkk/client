
import './App.css';
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';
import AllUsers from './components/AllUsers';
import Kitti from './components/Kitti';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <Navbar/>
      <Routes>      
       <Route path="/" element={<Kitti/>}/>
       <Route path="/all" element={<AllUsers/>}/>
       <Route path="/add" element={<Adduser/>}/>
       <Route path="/edit/:id" element={<Edituser/>}/>
     
      </Routes>

    </BrowserRouter>
  );
}

export default App;
