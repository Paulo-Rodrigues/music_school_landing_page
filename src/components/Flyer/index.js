import React from 'react';
import { StyledFlyer } from './styles';
import { Data } from './data';

function Flyer() {
  return (
    <>
      <StyledFlyer>
        <h1>{Data.title}</h1>
        <h3>{Data.subtitle}</h3>
      </StyledFlyer>
    </>
  );
}

export default Flyer;
