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
import StartPage from './Pages/StartPage';


function App() {

 

  return (
    <div className="bg-neutral-800 m-0 p-0 w-screen">
      
       <BrowserRouter >
       <Menu/>
      <Routes>
        <Route exact path = '/' element={<StartPage/>}/>
        <Route  path = '/home' element={<Home/>}/>

        <Route path="/ranking" element={<Ranking/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/credits" element={<Credits/>}/>
       
      </Routes>
      </BrowserRouter>
    

        
    </div>
  );
}

export default App;
