import logo from './logo.svg';
import './App.css';
import Ranking from './Pages/Ranking';
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import { Menu } from './Components/Menu/index.jsx';
import Credits from './Pages/Credits';


function App() {

 

  return (
    <div className="App">
      
       <BrowserRouter>
       <Menu/>
      <Routes>
        <Route exact path = '/' element={<Home/>}/>


        <Route path="/ranking" element={<Ranking/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/credits" element={<Credits/>}/>
       
      </Routes>
      </BrowserRouter>
    

        
    </div>
  );
}

export default App;
