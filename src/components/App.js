import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Footer/Footer";


function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/tves/"><Home/></Route>
      <Footer/>      
    </Router>
  );
}

export default App;
