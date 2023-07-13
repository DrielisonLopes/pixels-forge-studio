import Image from "next/image";
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
      <Image src="/images/pfs-logo.png"
       alt="Descrição da imagem"
       width={60}
       height={60}
       />
      <NameIcon>
        <div className="icon">🔍</div>
        <div className="names">Krilin Carec</div>
      </NameIcon>
    </div>
  );
};

export default Header;
