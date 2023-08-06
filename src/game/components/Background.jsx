import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Background = styled.div`
    background-color: ${props => `${props.colorhex}`};
    background-image: url(${props => props.img}) ;
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    overflow: hidden;
    transform: scale(${ props => `${props.scale}, ${props.scale}`});
    transform-origin: top left;
`; 


export default Background