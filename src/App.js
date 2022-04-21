import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Movies from './Movies/Movies';
import Movie from './Movie/Movie'
import Signup from './Signup/Signup';
import Actor from './Actor/Actor';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Rrr
    //     </a>
    //   </header>
    // </div>
    <Router>
        <div className="App">

          <Routes >

            {/* <Route exact path="/login" >
              <Login />
            </Route >

            <Route exact path="/signup" >
              <Signup />
            </Route >

            <Route exact path="/home" >

              <Header />
              <Home />
            </Route >

            <Route exact path="/dashboard" >
              <Dashboard />
            </Route >

            <Route exact path="/dashboard/product" >
              <ProductForm />
            </Route>

            <Route exact path="/profile">
              <Profile />
            </Route>

            <Route exact path="/store/products">
              <Store_AllProducts />
            </Route>

            <Route exact path="/store">
              <Store />
            </Route>

            <Route >
              <h1>Page not found!</h1>
            </Route> */}

			<Route path="/movies" caseSensitive={false} element={<Movies />} />
			<Route path="/movie" caseSensitive={false} element={<Movie />} />
			<Route path="/login" caseSensitive={false} element={<Login />} />
			<Route path="/signup" caseSensitive={false} element={<Signup />} />
			<Route path="/Actor" caseSensitive={false} element={<Actor />} />
          </Routes>

        </div>
      
    </Router>
  );
}

export default App;
