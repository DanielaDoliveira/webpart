import logo from './logo.svg';
import './App.css';
import Ranking from './Pages/Ranking';
import Home from './Pages/Home'


import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import { Menu } from './Components/Menu/index.jsx';


function App() {

 

  return (
    <div className="App">
      
       <BrowserRouter>
       <Menu></Menu>
      <Routes>
        <Route exact path = '/' element={<Home/>}/>


        <Route path="/ranking" element={<Ranking/>}/>
        
       
      </Routes>
      </BrowserRouter>
    

        
    </div>
  );
}

export default App;
