import React from 'react';
import './App.css';
import Header from './components/Header'; // Corrected import statement
import Navigation from './components/Navigation'; // Corrected import statement
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/FooterMain'; // Corrected import statement

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <AboutMe />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
