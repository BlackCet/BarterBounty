import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Reviews} from "./MyComponents/Reviews";
import {Footer} from "./MyComponents/Footer";

function App() {
  
  return (
    <>
    <Header title="BarterBounty"/>
    <Reviews/>
    <Footer/>
    </>
  );
}

export default App;
