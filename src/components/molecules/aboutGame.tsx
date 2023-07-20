import React, { ReactNode } from 'react';

import GameList from '@/molecules/GameList';
import { ABOUT_GAME } from '@/constants'
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
  display: flex;
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

  return (
    <GameContent>
      <div className="gameContainer">
        <h1>✨ {ABOUT_GAME.title}</h1>
        <p>{ABOUT_GAME.description}</p>
        <button>Download</button>
        <button className="transparent">More info</button>
      </div>
      <GameList/>
    </GameContent>
  );
}

export default AboutGame;
