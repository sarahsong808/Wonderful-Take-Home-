import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// background-color: ${props => (props.onClick ? '#000' : 'red')};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

const MapPin = ({ name, onClick, selectPin }) => {
  return (
    <div>
      <Wrapper text={name} onClick={onClick}>
        <img
          src={require('../assets/black-pin.png')}
          width="25px"
          height="25px"
        />
      </Wrapper>
    </div>
  );
};

MapPin.defaultProps = {
  onClick: null,
};

MapPin.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
};

export default MapPin;
