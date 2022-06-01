import React from 'react';
import '../App.css';
// import Project from './Project';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import { useLocation } from 'react-router';


function changeHeadandFoot(location) {
  if (location.hash === ''){
    return "head-and-nav"
  }
  if (location.hash === '#about' ) {
    return "head-and-nav"
  } 
  if (location.hash === '#portfolio') {
    return "head-and-nav green-hue"
  } 
  if (location.hash === '#contact') {
    return "summer-hue head-and-nav"
  } 
  if (location.hash === '#resume') {
    return "fall-hue head-and-nav"
  } 
}

export default function ProfileContainer() {
  // const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (location.hash === ''){
      return <About />
    }
    if (location.hash === '#about') {
      return <About />;
    }
    if (location.hash === '#portfolio') {
      return <Portfolio />;
    }
    if (location.hash === '#contact') {
      return <Contact />;
    }
    if (location.hash === '#resume') {
      return <Resume />;
    }
    // return <Contact />;
  };

  // const handlePageChange = (page) => setCurrentPage(page);
  const location = useLocation();
  console.log(location)
  return (
    <div className='App'>
      <div className={changeHeadandFoot(location)} >
        <Header />
          <Navigation  />
        </div>
          {renderPage()}
      <Footer />
    </div>
    
  );
}

// currentPage={currentPage} handlePageChange={handlePageChange}

// {
//   return (
//     <div className="App">
//       <div className='head-and-nav'>
//         <Header />
//         <Navigation />
//       </div>
//         <Project />
//       <Footer />
//     </div>
//   );
// }
