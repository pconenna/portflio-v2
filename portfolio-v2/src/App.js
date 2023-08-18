import React from "react";
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
    <Header/>
    <About/>
    <Work/>
    <Footer/>
    </div>
  );
}

export default App;
