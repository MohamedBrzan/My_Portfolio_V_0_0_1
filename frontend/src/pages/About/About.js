import Container from 'react-bootstrap/Container';
import { useGetAboutDataQuery } from '../../store/apis/AboutSlice';
import AboutIntro from './views/AboutIntro';
import Services from './views/Services';
import Techs from './views/Techs';
import Devtools from './views/Devtools';
import './About.css';

const About = () => {
  const {
    data: about,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetAboutDataQuery();

  // const aboutMe = [
  //   {
  //     description:
  //       'Within More Than Year Of Experience As A Professional Web Developer , I Have Acquired The Skills And Knowledge Necessary To Make Your Project A Success. I Enjoy Every Step While Working',
  //     src: '/image/about.jpg',
  //     button: {
  //       text: 'Download CV',
  //       variant: 'secondary',
  //     },
  //   },
  // ];

  // const services = [
  //   {
  //     title: 'Web Design',
  //     description:
  //       'We Design websites that are responsive, user-friendly, and easy to use. We use the latest technologies to create the best possible websites for our clients.',
  //     className: 'design-card',
  //   },
  //   {
  //     title: 'Web Development',
  //     description:
  //       'We build websites that are responsive, user-friendly, and easy to use. We use the latest technologies to create the best possible websites for our clients.',
  //     className: 'develop-card',
  //   },
  //   {
  //     title: 'Rest Api',
  //     description:
  //       'We build Rest Api that are special for our clients. We use the latest technologies to create the best possible Rest Api for our clients.',
  //     className: 'api-card',
  //   },
  //   {
  //     title: 'Integration',
  //     description:
  //       'We integrate Your Website with the latest technologies to create the best possible integration for our clients.',
  //     className: 'integrate-card',
  //   },
  // ];

  // const frontendTechs = [
  //   {
  //     name: 'html',
  //     value: 90,
  //   },
  //   {
  //     name: 'css',
  //     value: 90,
  //   },
  //   {
  //     name: 'javascript',
  //     value: 80,
  //   },
  //   {
  //     name: 'bootstrap',
  //     value: 90,
  //   },
  //   {
  //     name: 'sass',
  //     value: 70,
  //   },
  //   {
  //     name: 'Material UI',
  //     value: 70,
  //   },
  //   {
  //     name: 'redux',
  //     value: 70,
  //   },
  // ];

  // const backendTechs = [
  //   {
  //     name: 'node',
  //     value: 70,
  //   },
  //   {
  //     name: 'mongoDB',
  //     value: 70,
  //   },
  // ];

  // const frontendFrameworks = [
  //   {
  //     name: 'react.js',
  //     value: 90,
  //   },
  // ];

  // const backendFrameworks = [
  //   {
  //     name: 'express',
  //     value: 80,
  //   },
  // ];

  // const devTools = [
  //   {
  //     name: 'visual studio code',
  //     src: '/images/vs-code',
  //   },
  //   {
  //     name: 'git',
  //     src: '/images/git',
  //   },
  //   {
  //     name: 'git bash',
  //     src: '/images/bash',
  //   },
  //   {
  //     name: 'command line',
  //     src: '/images/command-line',
  //   },
  // ];

  return (
    <Container className='mt-5 about'>
      {isLoading ? (
        <p>Loading..</p>
      ) : isSuccess ? (
        <>
          <div className='text-center mb-5'>
            <h2>
              about <span className='intro-title'>me</span>
            </h2>
            <p className='opacity-50'>
              get to know <span className='intro-title'>me</span>
            </p>
          </div>
          {about.map((about, index) => (
            <div key={index}>
              <AboutIntro about={about} />

              <Services about={about} refetch={refetch} />

              <Techs about={about} />

              <Devtools about={about} />
            </div>
          ))}
        </>
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        <p>something went wrong please try again later</p>
      )}
    </Container>
  );
};

export default About;
