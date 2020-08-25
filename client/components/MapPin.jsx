import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

const MapPin = ({name, onClick}) => {
    return (
        <div> 
             <Wrapper
    text={name}
    onClick={onClick}
  />
        </div>
    );
}

MapPin.defaultProps = {
    onClick: null,
  };
  
  MapPin.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string.isRequired,
  };

export default MapPin;