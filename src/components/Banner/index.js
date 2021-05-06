import React from 'react';
import { StyledBanner } from './styles';
import { Data } from './data';

function Banner() {
  return (
    <>
      <StyledBanner>
        <h1>{Data.title}</h1>
        <h2>{Data.subtitle}</h2>
      </StyledBanner>
    </>
  );
}

export default Banner;
