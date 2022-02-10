
import './App.scss';
import Header from "./Components/Header"
import CategoryDetails from './Components/CategoryDetail';
import Footer from "./Components/Footer"
import Ads from "./Components/Ads"
import Ad from "./Components/Ad"



function App() {
  return (
    <div className="App">
     <Header/>
     <CategoryDetails/>
     <section className="banner">
       
     </section>
      <Ads/>
     <Footer/>

    </div>
  );
}

export default App;
