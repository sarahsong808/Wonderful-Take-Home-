import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledMenu = styled.div`
  display: flex;
  position: relative;
`;

const StyledButton = styled.button`
  background: none;
  padding: 0;
  border: 0;
  cursor: pointer;
`;

const StyledMenuButton = styled(StyledButton)`
  width: 30px;
  height: 30px;
  padding: 0;

  svg {
    width: 30px;
    height: 30px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    display: none;
  }
`;
const Menu = props => {
  const [toggleOpen, setToggleOpen] = useState(false);

  const menuIconDisplay = toggleOpen ? (
    <FontAwesomeIcon icon={faTimes} />
  ) : (
    <FontAwesomeIcon icon={faBars} />
  );
  return (
    <StyledMenu>
      <StyledMenuButton
        type="button"
        onClick={() => setToggleOpen(prev => !prev)}
      >
        {menuIconDisplay}
      </StyledMenuButton>
    </StyledMenu>
  );
};

export default Menu;
