import Image from 'next/image';
import Header from '../components/header'
import AboutGame from '../components/aboutGame'
import Footer from '../components/footer'

import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.9),
  rgba(0, 0, 0, 0.5),
  transparent
);
  }
`;
const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 80vh;
  top: 0;
  z-index: -1;
  }
`;

const HomePage: React.FC = () => {
  return (
    <div>
      <HeaderContainer>
        <Header/>
      </HeaderContainer>
      <ImageContainer className="ImageContainer">
        <Image
          src="/images/cityTank/city-tank-bg.png"
          alt="Background Tank Game"
          layout="fill"
          />
      </ImageContainer>
      <AboutGame />
      <Footer />
    </div>
  );
};

export default HomePage;
