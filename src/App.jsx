import Home from "./components/Home/Home";
import AboutPage from './components/AboutPage/AboutPage'
import Tour from "./components/Tour/Tour";
import ContactPage from './components/ContactPage/ContactPage'
import Destination from "./Destination/Destination";
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
const App = () => {
    

    return (
   
   
        <div>
            <BrowserRouter>
            <Routes>
                <Route index element ={<Home/>} />
                <Route path="/home" element ={<Home/>}/>
                <Route path="/about" element ={<AboutPage/>}/>
                <Route path="/contact" element ={<ContactPage/>}/>
                <Route path="/destination" element ={<Destination/>}/>
                <Route path="/tour" element ={<Tour/>}/>
                
            </Routes>
            
            
            
            </BrowserRouter>

            
        </div>
        
    );
};

export default App;
