import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Page(props) {
 const { currentPage } = props;
 const { name } = currentPage;
 const render = () => {
    switch(name) {
        case 'about me': 
            return <About />;
        case 'portfolio':
            return <Portfolio />;
        case 'resume':
            return <Resume />;
        case 'contact':
            return <Contact />;
        
        default: 
        return <About />;
    }
 }
  return (
      <section>
          <h2>{ name }</h2>
          { render() }
    </section>
  );

}

export default Page;