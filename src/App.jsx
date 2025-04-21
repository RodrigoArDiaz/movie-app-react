import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieList from "./components/MovieList";
import MovieDetail from "./pages/MovieDetail";
import Error from "./pages/Error";
import loadings from "./assets/LOADING.svg";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  

  return (
    <>
      <LanguageProvider>
        <div className="w-full min-h-screen pb-20 h-fit bg-slate-950">
          <Router>
            <Header />
            <Routes>
              <Route
                index
                element={<Home />}
              ></Route>
              <Route path="movie/:id" element={<MovieDetail />}></Route>
              <Route path="movies/:type" element={<MovieList />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Routes>
          </Router>
        </div>
      </LanguageProvider>
    </>
  );
}

export default App;
