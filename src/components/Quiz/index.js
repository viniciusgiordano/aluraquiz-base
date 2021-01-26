import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// src/components/Footer/index.js
const QuizWrapper = styled.div`
  a {
    display: block;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    color: #fff;
    width: 6rem;
    text-align: center;
    text-decoration: none;
    padding: 5px 0;
  }
`;

export default function Quiz() {
  return (
    <QuizWrapper>
      <h1>Em breve...</h1>
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>Voltar</a>
      </Link>
    </QuizWrapper>
  );
}
