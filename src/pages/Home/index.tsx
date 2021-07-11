import { Card, OutlinedInput } from '@material-ui/core';
import React from 'react';
import * as S from './styles';

const Home = () => (
  <S.HomeWrapper>
    <Card>
      <h1>Titulo de alguma coisa</h1>
      <OutlinedInput />
      <div className="buttons-wrapper">
        <S.CardButtons background="#06b706" hoverColor="green">
          Concordo
        </S.CardButtons>
        <S.CardButtons background="#ff4747" hoverColor="red">
          Cancelar
        </S.CardButtons>
      </div>
    </Card>
  </S.HomeWrapper>
);

export default Home;
