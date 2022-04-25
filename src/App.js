import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Movies from './Movies/Movies';
import Movie from './Movie/Movie';
import Movie_Name from './Movies/Movies_Name';
import Movie_Genre from './Movies/Movies_Genre'
import Signup from './Signup/Signup';
import Watchlist from './Watchlist/Watchlist'
import Actor from './Actor/Actor';

function App() {
  return (
    <Router>
        <div className="App">
          	<Routes >
			  	<Route exact path="/movies/searchMovieByName/:name" caseSensitive={false} element={<Movie_Name />} />
			  	<Route exact path="/movies/searchMovieByGenre/:genre" caseSensitive={false} element={<Movie_Genre />} />
				<Route path="/watchlist" caseSensitive={false} element={<Watchlist />} />
				<Route exact path="/movies" caseSensitive={false} element={<Movies />} />
				<Route path="/movie/:movieId" caseSensitive={false} element={<Movie />} />
				<Route path="/login" caseSensitive={false} element={<Login />} />
				<Route path="/signup" caseSensitive={false} element={<Signup />} />
				<Route path="/actor/:actorId" caseSensitive={false} element={<Actor />} />
				{/* <Route path="/searchMovieByGenre/:Genre" caseSensitive={false} element={<Actor />} />
				<Route path="/searchMovieByDate/:startDate/:endDate" caseSensitive={false} element={<Actor />} /> */}

          	</Routes>

        </div>
      
    </Router>
  );
}

export default App;
