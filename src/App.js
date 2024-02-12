import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Newsitem from './component/Newsitem';
import News from './component/News';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    
    <BrowserRouter>
      <div>
        <Navbar/>
      
      <Routes>
      <Route path="/" element={  <News key="general"  pagesize={6} category={"general"}/> } />
      <Route path="business"  element={ <News key="business" pagesize={6} category={"business"}/> } />
      <Route path="entertainment"  element={<News key="entertainment" pagesize={6} category={"entertainment"}/>} />
      <Route path="general"  element={ <News key="general" pagesize={6} category={"general"}/> } />
      <Route path="health"  element={ <News key="health" pagesize={6} category={"health"}/> } />
      <Route path="science"  element={ <News key="science" pagesize={6} category={"science"}/> } />
      <Route path="sports" element={ <News  key="ports" pagesize={6} category={"sports"}/> } />
      <Route path="technology" element={ <News key="echnology" pagesize={6} category={"technology"}/> } />
      </Routes>
    
   </div>
      
     
      

        
       
  </BrowserRouter> 
  
  );
}

export default App;
