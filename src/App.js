import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page';
import React, { useState } from 'react';

function App() {
  const [pages] = useState([
    {
      name: "about me"
    },
    {
      name: "portfolio"
    },
    {
      name: "contact"
    },
    {
      name: "resume"
    },
  ])

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header pages= { pages } setCurrentPage= { setCurrentPage } currentPage= { currentPage } />
      <main>
        <p> something in it </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
