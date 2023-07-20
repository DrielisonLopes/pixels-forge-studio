import Image from "next/image";

import styled from "styled-components";
import { LuSearch } from "react-icons/lu";
import { PiUserCircleFill, PiCaretDownBold } from "react-icons/pi";

const NameIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  
  div {
    display: flex;
    align-items: center;
    font-family: monospace;
    background: #494949;
    height: 100%;
    margin: 0 4px;
    padding: 6px 22px;
    border-radius: 4px;
    cursor: pointer;
    transition: background ease 0.3s, border ease 0.3s;
    
    &:hover {
      background: #562684;
    }
  }
`;

const Header = () => {
  return (
    <div className="header">
      <Image src="/images/pfs-logo.png"
      className="logo"
       alt="Pixels Forge Studio Logo"
       width={60}
       height={60}
       />
      <NameIcon>
        <div className="icon"><LuSearch/></div>
        <div className="rain">0.00 RAIN</div>
        <div className="user">
          <span className="userIcon"><PiUserCircleFill/></span>
          <span>Krilin Carec</span>
          <span><PiCaretDownBold/></span>
        </div>
      </NameIcon>
    </div>
  );
};

export default Header;
