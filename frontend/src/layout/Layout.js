import { useRef } from 'react';
import Header from '../components/Header';
import Intro from '../pages/Intro/Intro';
import Footer from '../components/Footer';
import { Route, Routes } from 'react-router';
import About from '../pages/About/About';
import Portfolio from '../pages/Portfolio/Portfolio';
import Experience from '../pages/Experience/Experience';
import Contact from '../pages/Contact/Contact';
import Button from 'react-bootstrap/Button';
import Home from '../admin/AdminPage/AdminPage';
import AboutIntroForm from '../admin/views/AboutIntroForm/AboutIntroForm';
import AboutForms from '../admin/views/AboutForms/AboutForms';
import ExperienceForm from '../admin/views/ExperienceForm/ExperienceForm';
import PortfolioForm from '../admin/views/PortfolioForm/PortfolioForm';
import ContactForm from '../admin/views/ContactForm/ContactForm';
import EditServiceForm from '../admin/views/ServiceForm/EditServiceForm';
import AddServiceForm from '../admin/views/ServiceForm/AddServiceForm';
import AddTechForm from '../admin/views/TechForm/AddTechForm';
import EditFrontendTechForm from '../admin/views/TechForm/EditFrontendTechForm';
import EditBackendTechForm from '../admin/views/TechForm/EditBackendTechForm';

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

              <Route path='about/'>
                <Route index element={<About />} />
                <Route path='edit/intro/:id' element={<AboutIntroForm />} />
                <Route
                  path='edit/services/:aboutId/:serviceId'
                  element={<EditServiceForm />}
                />{' '}
                <Route
                  path='add/services/:aboutId'
                  element={<AddServiceForm />}
                />
                <Route path='edit/techs' element={<AboutForms />} />
                <Route path='add/techs/:aboutId' element={<AddTechForm />} />
                <Route
                  path='edit/frontend/techs/:aboutId/:techId'
                  element={<EditFrontendTechForm />}
                />{' '}
                <Route
                  path='edit/backend/techs/:aboutId/:techId'
                  element={<EditBackendTechForm />}
                />
                <Route path='edit/devtool' element={<AboutForms />} />
              </Route>

              <Route path='experience' element={<Experience />} />

              <Route path='portfolio' element={<Portfolio />} />

              <Route path='contact' element={<Contact />} />

              <Route path='admin/'>
                <Route index element={<Home />} />
                <Route path='edit/home-view' element={<AboutIntroForm />} />
                <Route path='edit/about-form' element={<AboutForms />} />
                <Route
                  path='edit/experience-form'
                  element={<ExperienceForm />}
                />
                <Route path='edit/portfolio-form' element={<PortfolioForm />} />
                <Route path='edit/contact-form' element={<ContactForm />} />
              </Route>
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
