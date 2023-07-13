import styled from 'styled-components';

const GameContent = styled.div`
  padding: 180px 10px;
  max-width: 1300px;
  margin: auto;
  }
`;

const AboutGame = () => {
  return (
    <GameContent>
      <h1 className="">✨ City Tank</h1>
      <p>In a peaceful village, invading machines take control of the city, spreading fear and oppression. However, a brave hero emerges, piloting a powerful tank, determined to fight against the machines and restore peace.</p>
      <button>Play</button>
      <button className="transparent">More info</button>
    </GameContent>
  );
}

export default AboutGame;
