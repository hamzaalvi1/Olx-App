
import './App.scss';
import {BrowserRouter as Router} from "react-router-dom"
import RouteConfig from './Components/RouteConfig';
import {GlobalProvider} from "./Context"





function App() {

  return (
    <GlobalProvider>
     <Router> 
    <div className="App">
     <RouteConfig/>
    </div>
    </Router>
    </GlobalProvider>
  );
}

export default App;
