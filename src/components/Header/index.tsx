import React from 'react';

function Header() {
  return (
    <header className='flex py-8 justify-between'>
      <div className='text-white'>klltx</div>
      <div className='flex'>
        <a className='current'>home</a>
        <a className='link'>works</a>
        <a className='link'>about-me</a>
        <a className='link'>contacts</a>
        {/* <div>EN</div> */}
      </div>
    </header>
  );
}

export default Header;
