import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div `
//     background-image: url(${db.bg});
//     flex: 1;
//     background-size: cover;
//     background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('Retorno useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title>Alura Quiz - Pokémon</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Alura Quiz - Pokémon" />
        <meta name="description" content="Quiz realizado durante a Imersão React Next.js organizada pela Alura." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz-base.viniciusgiordano.vercel.app/" />
        <meta property="og:title" content="Alura Quiz - Pokémon" />
        <meta property="og:description" content="Quiz realizado durante a Imersão React Next.js organizada pela Alura." />
        <meta property="og:image" content="../Public/pokeball.png" />
      </Head>

      <QuizContainer>

        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Pokémon</h1>
          </Widget.Header>

          <Widget.Content>
            {/* eslint-disable-next-line max-len */}
            <p>Teste seus conhecimentos sobre Pokémon nesse quiz realizado durante a Imersão React Next.js organizada pela Alura!</p>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão');
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  // State
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Digite seu nome para jogar"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar como
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>

          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Em breve quizes incriveis que o pessoal da Imersão React Next.js da Alura fez!</p>
          </Widget.Content>

        </Widget>

        <Footer />

      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/viniciusgiordano/aluraquiz-base" />
    </QuizBackground>
  );
}
