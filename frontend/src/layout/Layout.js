import React, { useRef } from 'react';
import Header from '../components/Header';
import Intro from '../articles/Intro/Intro';
import Footer from '../components/Footer';
import { Route, Routes } from 'react-router';
import About from '../articles/About/About';
import Portfolio from '../articles/Portfolio/Portfolio';
import Experience from '../articles/Experience/Experience';
import Contact from '../articles/Contact/Contact';
import Button from 'react-bootstrap/Button';

const Layout = () => {
  const ScrollToUp = useRef();

  window.onscroll = () => {
    if (window.scrollY >= 400) {
      ScrollToUp.current.classList.add('active');
    } else {
      ScrollToUp.current.classList.remove('active');
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>{' '}
      <Button
        ref={ScrollToUp}
        className='scroll-to-up'
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <i className='fa-solid fa-arrow-up'></i>
      </Button>
      <main className='App-main'>
        <section>
          <Routes>
            <Route path='/'>
              <Route index element={<Intro />} />
              <Route path='about' element={<About />} />
              <Route path='experience' element={<Experience />} />
              <Route path='portfolio' element={<Portfolio />} />
              <Route path='contact' element={<Contact />} />
            </Route>
          </Routes>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
