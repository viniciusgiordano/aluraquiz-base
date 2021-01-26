import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alura Quiz - Pokémon</title>
        <link rel="shortcut icon" href="../Public/favicon.ico" type="image/x-icon" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz-base.viniciusgiordano.vercel.app/" />
        <meta property="og:title" content="Alura Quiz - Pokémon" />
        <meta property="og:description" content="Quiz realizado durante a Imersão React Next.js organizada pela Alura." />
        <meta property="og:image" content={db.bg} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz-base.viniciusgiordano.vercel.app/" />
        <meta property="twitter:title" content="Alura Quiz - Pokémon" />
        <meta property="twitter:description" content="Quiz realizado durante a Imersão React Next.js organizada pela Alura." />
        <meta property="twitter:image" content={db.bg} />

        <link rel="shortcut icon" href="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEyNi4zMzQgMTI2LjMzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI2LjMzNCAxMjYuMzM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkYxQTFBOyIgY3g9IjYzLjE2NyIgY3k9IjYzLjE2NiIgcj0iNjEuNjY3Ii8+DQoJPC9nPg0KCTxnPg0KCQk8ZWxsaXBzZSBzdHlsZT0iZmlsbDojRDYwOTA5OyIgY3g9IjYzLjE2NyIgY3k9IjYzLjE2NiIgcng9IjYxLjY2NyIgcnk9IjQ3LjIzMiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xLjUsNjMuMTY2YzAsMzQuMDYxLDI3LjYwOSw2MS42NjgsNjEuNjY3LDYxLjY2OHM2MS42NjctMjcuNjA3LDYxLjY2Ny02MS42NjhIMS41eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0Q4RTVFQTsiIGQ9Ik02My4xNjcsMTEwLjM5OGMzNC4wNTgsMCw2MS42NjctMjEuMTQ4LDYxLjY2Ny00Ny4yMzJIMS41DQoJCQlDMS41LDg5LjI1LDI5LjEwOSwxMTAuMzk4LDYzLjE2NywxMTAuMzk4eiIvPg0KCTwvZz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTYzLjE2NywwQzI4LjMzNiwwLDAsMjguMzM2LDAsNjMuMTY2YzAsMzQuODMxLDI4LjMzNiw2My4xNjgsNjMuMTY3LDYzLjE2OA0KCQlzNjMuMTY3LTI4LjMzNyw2My4xNjctNjMuMTY4QzEyNi4zMzQsMjguMzM2LDk3Ljk5OCwwLDYzLjE2NywweiBNNjMuMTY3LDNjMzIuNjczLDAsNTkuMzI4LDI2LjE4Myw2MC4xMjksNTguNjY2SDMuMDM4DQoJCUMzLjgzOSwyOS4xODMsMzAuNDk0LDMsNjMuMTY3LDN6IE02My4xNjcsMTIzLjMzNGMtMzIuNjczLDAtNTkuMzI4LTI2LjE4NC02MC4xMjktNTguNjY4aDEyMC4yNTgNCgkJQzEyMi40OTUsOTcuMTUsOTUuODQsMTIzLjMzNCw2My4xNjcsMTIzLjMzNHoiLz4NCgk8Zz4NCgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojQTdCQkMxOyIgY3g9IjYzLjE2NyIgY3k9IjY4Ljg2OCIgcj0iMTYuNzY0Ii8+DQoJPC9nPg0KCTxnPg0KCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iNjMuMTY3IiBjeT0iNjMuMTY3IiByPSIxNi43NjQiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEOEU1RUE7IiBkPSJNNTEuMzEzLDc1LjAyMWMtNi41NDctNi41NDctNi41NDYtMTcuMTYsMC0yMy43MDljNi41NDctNi41NDYsMTcuMTYxLTYuNTQ2LDIzLjcwNywwIi8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTYzLjE2Nyw4MS40MzJjLTQuODc4LDAtOS40NjUtMS45LTEyLjkxNS01LjM1Yy03LjEyLTcuMTItNy4xMi0xOC43MDcsMC0yNS44Mw0KCQkJYzcuMTIyLTcuMTIsMTguNzA4LTcuMTIsMjUuODI5LDBsMCwwYzMuNDUsMy40NTEsNS4zNTEsOC4wMzgsNS4zNTEsMTIuOTE2YzAsNC44NzgtMS45LDkuNDY1LTUuMzUxLDEyLjkxNQ0KCQkJQzcyLjYzMiw3OS41MzIsNjguMDQ2LDgxLjQzMiw2My4xNjcsODEuNDMyeiBNNjMuMTY3LDQ3LjkxYy0zLjkwOSwwLTcuODE3LDEuNDg3LTEwLjc5Myw0LjQ2M2MtNS45NSw1Ljk1My01Ljk1LDE1LjYzNywwLDIxLjU4OA0KCQkJYzIuODgzLDIuODgzLDYuNzE2LDQuNDcxLDEwLjc5Myw0LjQ3MWM0LjA3NywwLDcuOTEtMS41ODgsMTAuNzkyLTQuNDcxYzIuODgzLTIuODgzLDQuNDcyLTYuNzE2LDQuNDcyLTEwLjc5Mw0KCQkJYzAtNC4wNzctMS41ODgtNy45MS00LjQ3Mi0xMC43OTRDNzAuOTg1LDQ5LjM5OCw2Ny4wNzYsNDcuOTEsNjMuMTY3LDQ3LjkxeiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik02OC44NzEsNjguODdjLTMuMTQ5LDMuMTQ2LTguMjU3LDMuMTQ2LTExLjQwNCwwYy0zLjE0OS0zLjE1LTMuMTQ4LTguMjU1LDAtMTEuNDAzDQoJCQljMy4xNDgtMy4xNSw4LjI1NS0zLjE0OCwxMS40MDMsMEM3Mi4wMTksNjAuNjE1LDcyLjAxOSw2NS43Miw2OC44NzEsNjguODd6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRDhFNUVBOyIgZD0iTTU3LjQ2Nyw1Ny40NjdjMy4xNDgtMy4xNSw4LjI1NS0zLjE0OCwxMS40MDMsMGMzLjE0OCwzLjE0OCwzLjE0OCw4LjI1MywwLjAwMSwxMS40MDMiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjMuMTY4LDcyLjcyNWMtMi40NSwwLTQuODk4LTAuOTMxLTYuNzYyLTIuNzk0Yy0zLjcyOS0zLjczLTMuNzI5LTkuNzk3LDAtMTMuNTI1DQoJCQljMS44MDUtMS44MDcsNC4yMDctMi44MDIsNi43NjEtMi44MDJjMCwwLDAsMCwwLDBjMi41NTUsMCw0Ljk1NywwLjk5Niw2Ljc2MywyLjgwMmMzLjcyOCwzLjcyNywzLjcyOCw5Ljc5NCwwLjAwMSwxMy41MjQNCgkJCWMwLDAsMCwwLjAwMS0wLjAwMSwwLjAwMUM2OC4wNjYsNzEuNzk0LDY1LjYxNyw3Mi43MjUsNjMuMTY4LDcyLjcyNXogTTYzLjE2Nyw1Ni42MDRjLTEuNzUzLDAtMy40MDEsMC42ODMtNC42NCwxLjkyMw0KCQkJYy0yLjU1OSwyLjU1OS0yLjU1OSw2LjcyMywwLDkuMjgyYzIuNTU4LDIuNTU3LDYuNzIzLDIuNTU3LDkuMjgzLDBjMi41NTgtMi41NiwyLjU1Ny02LjcyNC0wLjAwMS05LjI4Mg0KCQkJQzY2LjU3LDU3LjI4OCw2NC45MjEsNTYuNjA1LDYzLjE2Nyw1Ni42MDRMNjMuMTY3LDU2LjYwNHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
