import React from 'react';
import Header from '../Header';

function HomePage() {
  return (
    <div className='wrapper'>
      <Header />
      <div>
        <div>
          <h1>Konstantin is a front-end developer</h1>
          <p>Coding</p>
          <button>Contact me</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
