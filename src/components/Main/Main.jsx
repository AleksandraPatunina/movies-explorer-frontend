import './Main.css'
import Promo from "../Promo/Promo";
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Error from '../Error/Error';
import Login from '../Login/Login';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Portfolio from '../Portfolio/Portfolio';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SearchForm from '../SearchForm/SearchForm';
import Techs from '../Techs/Techs';
import { movies, saveMovies } from '../../utils/constants'
import { useEffect, useState } from 'react';

export default function Main({ name, setLoggedIn }) {
  const [allMovies, setAllMovies] = useState([])
  const [saveMovie, setSaveMovie] = useState([])
  const [CheckAllMovies, setCheckAllMovies] = useState(true) //стейт для всех фильмов
  const [CheckSaveMovies, setCheckSaveMovies] = useState(true) // стейт для сохраненных

  useEffect(() => {
    setAllMovies(movies)
    setSaveMovie(saveMovies)
  }, [])

  function onCheckMoviesAll() {
    if (CheckAllMovies) {
      //короткометражки
      setCheckAllMovies(false)
      setAllMovies(allMovies.filter((element) => element.duration <= 40))
    } else {
      setCheckAllMovies(true)
      setAllMovies(movies)
    }
  }
//фильтрую список сохраненных фильмов в зависимости от длительности
  function onCheckMoviesSave() {
    // короткометражки
    if (CheckSaveMovies) {
      setCheckSaveMovies(false)
      setSaveMovie(saveMovie.filter((element) => element.duration <= 40))
    }
    // весь список сохраненных фильмов
     else {
      setCheckSaveMovies(true)
      setSaveMovie(saveMovies)
    }
  }

  return (
    <main className="main">
      {{
        home:
          <>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
          </>,
        signin: <Login name={name} setLoggedIn={setLoggedIn} />,
        signup: <Register name={name} setLoggedIn={setLoggedIn} />,
        error: <Error />,
        profile: <Profile name={name} setLoggedIn={setLoggedIn} />,
        movies:
          <>
            <SearchForm isCheck={CheckAllMovies} changeBox={onCheckMoviesAll} />
            <MoviesCardList movies={allMovies} />
          </>,
        savedmovies:
          <>
            <SearchForm isCheck={CheckSaveMovies} changeBox={onCheckMoviesSave} />
            <MoviesCardList movies={saveMovie} />
          </>
      }[name]}
    </main>
  )
}
