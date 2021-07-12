import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #424040;

  h1 {
    text-align: center;
    font-size: 16px;
    margin-bottom: 10px;
  }

  label.input-label {
    font-size: 14px;
  }

  .MuiCard-root {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 8px;

    .MuiOutlinedInput-input {
      padding: 8px;
    }

    .MuiOutlinedInput-root {
      width: 100%;
      font-size: 12px;
      margin-top: 4px;
      margin-bottom: 10px;
    }

    div.buttons-wrapper {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }
`;

export const CardButtons = styled(Button)`
  &.MuiButton-root {
    font-size: 10px;
    color: white;
    transition: all ease-in-out 0.2s;
    background-color: #06b706;

    &:hover {
      background-color: green;
    }
  }
`;
