// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/title/Title";
import Banner from "./components/banner/Banner";
import NavBar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Title
        title="Chasing Waterfalls"
        subtitle="Waterfalls I have visited during my travels"
      />
      <NavBar />
      <Banner introduction="Welcome to my personal collection of cherished memories and captivating tales from the waterfalls I have had the privilege to visit. As an avid explorer and nature enthusiast, I have embarked on countless adventures to witness the awe-inspiring beauty of these cascading wonders. Join me as I take you on a virtual journey to some of the most breathtaking waterfalls I have encountered along my travels." />
    </>
  );
}

export default App;
