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

    transform: scale(1);
    transition: transform .25s linear;

    &:hover {
      transform: scale(1.05);
    }
  }

  img {
    width: auto;
    margin: 0 5px;
    border-radius: 4px;
    cursor: pointer;
  }

  &.comingSoon {
    img {
      width: 50%;
      height: auto;
    }
    aside {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 50%;
      padding: 0 36px;

      button {
        width: 160px;
        font-weight: 600; transform: scale(1);
        transition: transform .25s linear;
    
        &:hover {
          transform: scale(1.05);
        }
      }
    }
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
      <div style={{ marginTop: '50px' }}>
        <h3 style={{ letterSpacing: '3px' }}>FEATURED GAMES</h3>
        <GameImages>
          {tankImages.map((image, index) => (
            <div key={index}>
            <Image
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
            className="comingSoon">
          <Image
            src="/images/cityTank/city-tank1.png"
            alt="City Tank Game play Image"
            width={500}
            height={200}
          />
          <aside>
            <h2>Coming soon a NEW MULTIPLAYER GAME to be able to play and have fun with your friends</h2>
            <button>Preview</button>
          </aside>
        </GameImages>

        <h3 style={{ letterSpacing: '3px' }}>RECOMMENDED FOR YOU</h3>
        <GameImages style={{ marginBottom: '60px' }}>
          {tankImages.map((image, index) => (
            <div key={index}>
            <Image
              src={image}
              alt="City Tank Game play Image"
              width={250}
              height={200}
            />
            </div>
          ))}
        </GameImages>
      </div>
  );
}

export default GameList;
