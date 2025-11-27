// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';





function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-24 flex flex-col gap-24">
        <About />
        <Services />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default App;
