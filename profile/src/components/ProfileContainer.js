import React, { useState } from 'react';
// import '../App.css';
// import Project from './Project';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function ProfileContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
      return <Resume />;
    
    // return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='App'>
      <div className='head-and-nav'>
        <Header />
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
          {renderPage()}
      <Footer />
    </div>
    
  );
}



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