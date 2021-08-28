import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Head from "./components/Head";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import MyStory from "./components/MyStory";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";


<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

function App() {
  return (
    <div>
      <Head/>
      <NavBar />
      <Header/>
      <MyStory/>
      <Projects/>
      <Clients/>
      <ContactMe/>
      <Footer/>
    </div> 
  );
}

export default App;
