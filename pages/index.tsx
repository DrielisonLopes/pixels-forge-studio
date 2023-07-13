import Image from 'next/image';
import Header from '../components/header'
import AboutGame from '../components/aboutGame'

import styled from 'styled-components';

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
      <Header/>
      <ImageContainer className="ImageContainer">
        <Image
          src="/images/cityTank/city-tank-bg.png"
          alt="Background Tank Game"
          layout="fill"
          />
      </ImageContainer>
      <AboutGame />
    </div>
  );
};

export default HomePage;
