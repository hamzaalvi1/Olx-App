
import './App.scss';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import RouteConfig from './Components/RouteConfig';
import {useLocation} from "react-router-dom"




function App() {
  const location = useLocation()
  return (
    <div className="App">
     
     <Header/>
     <RouteConfig/>
     {location.pathname  === "/post" || location.pathname === "/attributes"  ? null : <Footer/>}

    
    </div>
  );
}

export default App;
