import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex py-8 justify-between">
      <div className="text-white">1317n0d3</div>
      <div className="flex">
        {/* <Link to={'/home'} className='current'>home</Link> */}
        {/* <a className='link'>works</a>
        <a className='link'>about-me</a>
        <a className='link'>contacts</a> */}
        {/* <div>EN</div> */}
      </div>
    </header>
  );
}

export default Header;
