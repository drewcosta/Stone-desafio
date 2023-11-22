import styled from 'styled-components'
import backgroundImage from '../assets/bg-home.svg'
import graphImage from '../assets/graph.svg'
import Image from 'next/image';
import { Header } from "./Header";
import { CurrencyCard } from './Currency';

export const Home = () => {
  return (
    <>
      {/* <Background>
        <Image
          src={backgroundImage}
          alt="imagem"
          layout="fill"
          quality={100}
        />
      </Background>

      <GraphImage>
        <Image
          src={graphImage}
          alt="imagem"
          quality={100}
        />
      </GraphImage> */}

      <Container>
        <Header />
        <CurrencyCard />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 105px;
  padding: 64px;
`

export const Background = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -2;
`;

export const GraphImage = styled.div`
  position: absolute;
  right: 255px;
  top: 220px;
  z-index: -1;
`



