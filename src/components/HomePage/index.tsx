import React from 'react';
import Header from '../Header';

function HomePage() {
  return (
    <div className='wrapper'>
      <Header />
      <div>
        <div>
          <h1>Konstantin is a <span className='text-purple'>front-end developer</span></h1>
          <p>Coding</p>
          <button>Contact me!</button>
        </div>
      </div>
      <div>
        <h1>projects</h1>
      </div>
    </div>
  );
}

export default HomePage;
