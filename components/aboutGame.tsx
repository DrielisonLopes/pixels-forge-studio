import React, { ReactNode } from 'react';

import Image from "next/image";
import styled from 'styled-components';

interface GameContentProps {
  children: ReactNode;
}

const GameContent = styled.div<GameContentProps>`
  padding: 0 10px;
  max-width: 1300px;
  margin: auto;

  .gameContainer {
    width: 50%;
    padding: 150px 10px 50px;
  }
`;

const GameImages = styled.div<GameContentProps>`
  dispay: flex;
  justify-content: center;
  padding: 0;
  position: relative;
  height: 100%;
  overflow: hidden;

  img {
    align-self: normal;
    max-width: none;
    margin: 0 5px;
    border-radius: 4px;
  }
`;

const AboutGame: React.FC = (): ReactNode => {

  const tankImages = [
    "/images/cityTank/city-tank2.png",
    "/images/cityTank/city-tank1.png",
    // Adicione aqui os caminhos de outras imagens "tank"
  ];

  return (
    <GameContent>
      <div className="gameContainer">
        <h1>✨ City Tank</h1>
        <p>In a peaceful village, invading machines take control of the city, spreading fear and oppression. However, a brave hero emerges, piloting a powerful tank, determined to fight against the machines and restore peace.</p>
        <button>Download</button>
        <button className="transparent">More info</button>
      </div>
      <div>
        <h3>GAME PLAY</h3>
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
    </GameContent>
  );
}

export default AboutGame;
