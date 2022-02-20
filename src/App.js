
import './App.scss';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import RouteConfig from './Components/RouteConfig';
import {useLocation} from "react-router-dom"




function App() {
  const location = useLocation()
  console.log(location)
  return (
    <div className="App">
     
     <Header/>
     <RouteConfig/>
     {location.pathname  !== "/post"  ? <Footer/> : null}
    
    </div>
  );
}

export default App;
