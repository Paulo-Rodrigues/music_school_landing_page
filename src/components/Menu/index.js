import React from 'react';
import { StyledMenu, StyledMenuItem, StyledMenuList } from './styles';

function Menu() {
  return (
    <>
      <StyledMenu>
        <StyledMenuList>
          <StyledMenuItem>Cursos</StyledMenuItem>
          <StyledMenuItem>Preços</StyledMenuItem>
        </StyledMenuList>
      </StyledMenu>
    </>
  );
}

export default Menu;
