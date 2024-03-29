import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { useState } from 'react';


function App() {
  const [loggedIn, setLoggedIn] = useState(false) //проверка,залогинин ли пользователь на данный момент на странице 

  return (
    <div className='page'>
      <Routes>

        <Route path='/signin' element={
          <Main name='signin' setLoggedIn={setLoggedIn} />
        } />

        <Route path='/signup' element={
          <Main name='signup' setLoggedIn={setLoggedIn} />
        } />

        <Route path='/' element={
          <>
            <Header name='home-page' loggedIn={loggedIn} />
            <Main name='home' />
            <Footer />
          </>
        } />

        <Route path='/movies' element={
          <>
            <Header />
            <Main name='movies' />
            <Footer />
          </>
        } />

        <Route path='/saved-movies' element={
          <>
            <Header />
            <Main name='savedmovies' />
            <Footer />
          </>
        } />

        <Route path='/profile' element={
          <>
            <Header />
            <Main name='profile' setLoggedIn={setLoggedIn} />
          </>
        } />

        <Route path='*' element={
          <>
            <Main name='error' />
          </>
        } />

      </Routes>
    </div>
  
  );
}

export default App;
