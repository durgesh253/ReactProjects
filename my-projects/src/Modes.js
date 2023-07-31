// Modes.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import styled from 'styled-components';
import { toogleTheme } from './redux/ThemSlice';

function Modes() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme);

  const handleToggleTheme = () => {
    dispatch(toogleTheme());
  };

  return (
    <StyledComponent themeMode={themeMode}>
      <h1>Example Components</h1>
      <button className='btn btn-dark' onClick={handleToggleTheme}>
        light/Dark
      </button>
    </StyledComponent>
  );
}

export default Modes;

// StyledComponent.js
const StyledComponent = styled.div`
  background-color: ${(props) => (props.themeMode === 'light' ? '#ffffff' : '#333333')};
  color: ${(props) => (props.themeMode === 'light' ? '#333333' : '#ffffff')};
`;

