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
import AboutIntroForm from '../admin/views/AboutIntroForm/AboutIntroForm';
import EditDevToolForm from '../admin/views/DevToolForm/EditDevToolForm';
import EditServiceForm from '../admin/views/ServiceForm/EditServiceForm';
import AddServiceForm from '../admin/views/ServiceForm/AddServiceForm';
import AddingSkillsForm from '../admin/views/SkillsForm/AddingSkillsForm';
import EditFrontendTechForm from '../admin/views/SkillsForm/EditFrontendTechForm';
import EditFrontendFrameworkForm from '../admin/views/FrameworkForm/EditFrontendFrameworkForm';
import EditBackendTechForm from '../admin/views/SkillsForm/EditBackendTechForm';
import EditBackendFrameworkForm from '../admin/views/FrameworkForm/EditBackendFrameworkForm';
import AddDevToolForm from '../admin/views/DevToolForm/AddDevToolForm';
import AddExperienceForm from '../admin/views/ExperienceForm/AddExperienceForm';
import EditProgrammingExpForm from '../admin/views/ExperienceForm/EditProgrammingExpForm';
import EditOtherExpForm from '../admin/views/ExperienceForm/EditOtherExpForm';
import AddPortfolioProjectForm from '../admin/views/PortfolioForm/AddPortfolioProjectForm';
import EditFrontendProjectForm from '../admin/views/PortfolioForm/EditFrontendProjectForm';
import EditBackendProjectForm from '../admin/views/PortfolioForm/EditBackendProjectForm';
import EditFullStackProjectForm from '../admin/views/PortfolioForm/EditFullStackProjectForm';
import EditContactForm from '../admin/views/ContactForm/EditContactForm';

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
      </header>
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
                <Route
                  path='edit/intro/:aboutId'
                  element={<AboutIntroForm />}
                />
                <Route
                  path='edit/services/:aboutId/:serviceId'
                  element={<EditServiceForm />}
                />
                <Route
                  path='add/services/:aboutId'
                  element={<AddServiceForm />}
                />
                <Route
                  path='add/techs/:aboutId'
                  element={<AddingSkillsForm />}
                />
                <Route
                  path='edit/frontend/techs/:aboutId/:techId'
                  element={<EditFrontendTechForm />}
                />
                <Route
                  path='edit/frontend/frameworks/:aboutId/:frameworkId'
                  element={<EditFrontendFrameworkForm />}
                />{' '}
                <Route
                  path='edit/backend/frameworks/:aboutId/:frameworkId'
                  element={<EditBackendFrameworkForm />}
                />
                <Route
                  path='edit/backend/techs/:aboutId/:techId'
                  element={<EditBackendTechForm />}
                />
                <Route
                  path='edit/devtool/:aboutId'
                  element={<AddDevToolForm />}
                />{' '}
                <Route
                  path='edit/devtool/:aboutId/:devtoolId'
                  element={<EditDevToolForm />}
                />
              </Route>

              <Route path='experience/'>
                <Route index element={<Experience />} />
                <Route
                  path='add/experience/:id'
                  element={<AddExperienceForm />}
                />
                <Route
                  path='edit/:id/programming/:experienceId'
                  element={<EditProgrammingExpForm />}
                />{' '}
                <Route
                  path='edit/:id/other/:experienceId'
                  element={<EditOtherExpForm />}
                />
              </Route>

              <Route path='portfolio/'>
                <Route index element={<Portfolio />} />
                <Route path='add/:id' element={<AddPortfolioProjectForm />} />
                <Route
                  path='edit/:id/frontend/:projectId'
                  element={<EditFrontendProjectForm />}
                />{' '}
                <Route
                  path='edit/:id/backend/:projectId'
                  element={<EditBackendProjectForm />}
                />{' '}
                <Route
                  path='edit/:id/fullStack/:projectId'
                  element={<EditFullStackProjectForm />}
                />
              </Route>

              <Route path='contact/'>
                <Route index element={<Contact />} />
                <Route path='edit/:id' element={<EditContactForm />} />
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
