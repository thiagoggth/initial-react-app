import styled from 'styled-components';

export const Container = styled.div`
  .backdrop-container {
    background-color: $background-color-default;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .MuiCircularProgress-colorPrimary {
      color: #a9a9a9 !important;
    }
  }
`;
