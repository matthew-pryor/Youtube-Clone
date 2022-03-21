// General Imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.production.min";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {

  const [searchResults, setSearchResults] = useState(['']);

  useEffect(() => {
    getSearchResults()
  }, [])

  async function getSearchResults(searchTerm=""){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyBuzjiMZRf5Ajpg69rAQjY92YIC18cCjS4`)
    console.log(response.data);
    setSearchResults(response.data);
  }


  return (
    <div>
      <Navbar />
      <SearchBar getSearchResults={getSearchResults}/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
