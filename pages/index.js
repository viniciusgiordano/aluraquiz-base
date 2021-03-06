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
import Input from '../src/components/Input';
import Button from '../src/components/Button';

// const BackgroundImage = styled.div `
//     background-image: url(${db.bg});
//     flex: 1;
//     background-size: cover;
//     background-position: center;
// `;

const QuizContainer = styled.div`
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
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar como ${name}`}
              </Button>
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
