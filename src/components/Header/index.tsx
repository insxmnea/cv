import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../constants/colors";

function Header() {
  return (
    <HeaderElement>
      <Title>1317n0d3</Title>
      <Links>
        {/* <Link to={'/home'} className='current'>home</Link> */}
        {/* <a className='link'>works</a>
        <a className='link'>about-me</a>
        <a className='link'>contacts</a> */}
        {/* <div>EN</div> */}
      </Links>
    </HeaderElement>
  );
}

const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
`;

const Links = styled.div`
  display: flex;
`;

const Title = styled.div`
  color: ${color.white};
`;

export default Header;
