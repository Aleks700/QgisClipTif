import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import SecondSection from "./components/SecondSection";
import SearchAppBar from "./components/SearchAppBar";
import SignUp from "./components/SignUp";
function App() {
  // return (
  // <h1>asfasf</h1>
  // );
  return (
    <Router>
      <Routes>
        <Route element={<SearchAppBar></SearchAppBar>}></Route>
        <Route path="/" exact element={<MainPage></MainPage>}></Route>

        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
