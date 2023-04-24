import HeaderComponent from "./Components/Header";
import NavComponent from "./Components/Nav";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Missing from "./Components/Missing";
import NewPost from "./Components/NewPost";
import PostDetails from "./Components/PostDetails";

import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <HeaderComponent title="Blog"></HeaderComponent>
      <NavComponent></NavComponent>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Post" element={<NewPost></NewPost>} />
        <Route path="/About" element={<About></About>} />
        <Route path="/Post/:id" element={<PostDetails></PostDetails>} />
        {/* this dynamic url is to be used in the home page for certain books to bring it to that books details page */}
        <Route path="*" element={<Missing></Missing>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
