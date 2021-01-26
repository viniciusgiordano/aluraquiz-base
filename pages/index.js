import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Link from 'next/link'


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
  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1>Pokémon</h1>
          </Widget.Header>

          <Widget.Content>
          <p>Teste seus conhecimentos sobre Pokémon nesse quiz realizado durante a Imersão React Next.js organizada pela Alura!</p>
          <input placeholder="Digite seu nome para jogar"/>
          <br/>
          <Link href="/quiz">
            <a>Jogar</a>
          </Link>
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

      <GitHubCorner projectUrl='https://github.com/viniciusgiordano' />
    </QuizBackground>
  );
}
