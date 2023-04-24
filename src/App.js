import HeaderComponent from "./Components/Header";
import NavComponent from "./Components/Nav";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Missing from "./Components/Missing";
import NewPost from "./Components/NewPost";
import PostDetails from "./Components/PostDetails";

import { Route, Routes, usehistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <NavComponent></NavComponent>
      <Routes>
        <Route path="/" Component={Home} />
        <Route exact path="/Post" Component={NewPost} />
        <Route path="/Post/:id" Component={PostDetails} />
        <Route path="/About" Component={About} />
        <Route path="*" Component={Missing} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
