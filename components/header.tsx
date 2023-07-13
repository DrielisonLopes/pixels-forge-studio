import styled from "styled-components";

const NameIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  }
`;

const Header = () => {
  return (
    <div className="header">
      <div className="logo">🔨 PSF</div>
      <NameIcon>
        <div className="names">Krilin Carec</div>
        <div className="icon">🪙</div>
      </NameIcon>
    </div>
  );
}

export default Header;
