import styled from 'styled-components';

export const StyledMenu = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledMenuList = styled.ul`
  list-style: none;
  display: inline-block;
`;

export const StyledMenuItem = styled.li`
  font-weight: 600;
  display: inline;
  padding: 10px;
  margin: 10px;

  &:hover {
    cursor: pointer;
    color: green;
    transition: color 0.5s;
  }
`;
