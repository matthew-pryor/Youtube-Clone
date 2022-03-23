// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

const [searchResults, setSearchResults] = useState([]);

useEffect(() => {
  getSearchResults()
}, [])
  
async function getSearchResults(searchTerm="bob ross"){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&search?q=${searchTerm}&type=video&key=AIzaSyBuzjiMZRf5Ajpg69rAQjY92YIC18cCjS4`)
  console.log(response.data);
  console.log(response.data.items.map((entry) => {
    return(
      entry.snippet.thumbnails.default
    )
  }))
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
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
