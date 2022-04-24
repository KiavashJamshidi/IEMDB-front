import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Movies from './Movies/Movies';
import Movie from './Movie/Movie'
import Signup from './Signup/Signup';
import Watchlist from './Watchlist/Watchlist'

import Actor from './Actor/Actor';

function App() {
  return (
    <Router>
        <div className="App">

          	<Routes >
				<Route path="/watchlist" caseSensitive={false} element={<Watchlist />} />
				<Route path="/movies" caseSensitive={false} element={<Movies />} />
				<Route path="/movie/:movieId" caseSensitive={false} element={<Movie />} />
				<Route path="/login" caseSensitive={false} element={<Login />} />
				<Route path="/signup" caseSensitive={false} element={<Signup />} />
				<Route path="/actor/:actorId" caseSensitive={false} element={<Actor />} />
          	</Routes>

        </div>
      
    </Router>
  );
}

export default App;
