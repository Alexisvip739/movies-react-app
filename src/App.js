import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './components/header/Header.jsx'
import Home from './pages/home/Home'
import MovieDetail from './pages/movieDetail/movieDetail'
import MovieList from './components/movieList/movieList'

function App() {

  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route path="/movies-react-app" element={<Home />}></Route>
                <Route path="movie/:id" element={<MovieDetail />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App