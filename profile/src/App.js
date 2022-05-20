import './App.css';
import Project from './components/Project';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
        <Project />
      <Footer />
    </div>
  );
}

export default App;
