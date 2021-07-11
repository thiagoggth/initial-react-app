import { Button } from '@material-ui/core';
import styled from 'styled-components';

type buttonAttr = { background?: string; hoverColor?: string };

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #424040;

  h1 {
    font-size: 16px;
    margin-bottom: 10px;
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

export const CardButtons = styled(Button)<buttonAttr>`
  &.MuiButton-root {
    font-size: 10px;
    color: white;
    transition: all ease-in-out 0.2s;
    background-color: ${({ background }) => background || 'transparente'};
    ${({ hoverColor }) => !hoverColor && `pointer-events: none;`}

    &:hover {
      ${({ hoverColor }) => hoverColor && `background-color: ${hoverColor};`}
    }
  }
`;
