import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import * as S from './styled';

const Loading: React.FC = () => {
  return (
    <S.Container>
      <div className="backdrop-container">
        <CircularProgress className="circular-progress" color="primary" />
      </div>
    </S.Container>
  );
};

export default Loading;
