import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviePage from "./pages/MoviePage/MoviePage";
import TvShows from "./pages/TvShows/TvShows";
import NavBar from "./NavBar/NavBar";
import Home from "./pages/Home/Home";
import KidsShowList from "./pages/KidsShowList/KidsShowList";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

//THIS IS DEPLOYED AT :" fam-flix.surge.sh"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <div>
          <NavBar></NavBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movielist" element={<MoviePage />} />
            <Route path="/tvshowlist" element={<TvShows />} />
            <Route path="/kidsshowlist" element={<KidsShowList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
