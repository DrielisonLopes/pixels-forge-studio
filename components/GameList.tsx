import React, { ReactNode } from 'react';

import Image from "next/image";
import styled from 'styled-components';

interface GameContentProps {
  children: ReactNode;
}

const GameImages = styled.div<GameContentProps>`
  display: flex;

  div {
    display: flex;
    justify-content: center;
    width: 250px;
    margin: 0 5px;
    border-radius: 4px;
    overflow: hidden;
  }

  img {
    width: auto;
    margin: 0 5px;
    border-radius: 4px;
  }
`;

const GameList: React.FC = (): ReactNode => {

  const tankImages = [
    "/images/cityTank/city-tank2.png",
    "/images/cityTank/city-tank1.png",
    "/images/cityTank/city-tank3.png",
    "/images/tank.jpg",
    "/images/tank2.jpeg",
  ];

  return (
      <div>
        <h3 style={{ letterSpacing: '3px' }}>FEATURED GAMES</h3>
        <GameImages 
              className="">
          {tankImages.map((image, index) => (
            <div>
            <Image
              key={index}
              src={image}
              alt="City Tank Game play Image"
              width={250}
              height={200}
            />
            </div>
          ))}
        </GameImages>

        <h3 style={{ letterSpacing: '3px' }}>COMING SOON</h3>
        <GameImages 
              className="">
          <Image
            src="/images/cityTank/city-tank1.png"
            alt="City Tank Game play Image"
            width={510}
            height={200}
          />
          <aside>
            <h2>Em breve aqui um jogo muito Jogável</h2>
            <button>Preview</button>
          </aside>
        </GameImages>

        <h3 style={{ letterSpacing: '3px' }}>RECOMMENDED FOR YOU</h3>
        <GameImages 
              className="">
          {tankImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="City Tank Game play Image"
              width={250}
              height={200}
            />
          ))}
        </GameImages>
      </div>
  );
}

export default GameList;
