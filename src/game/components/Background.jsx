import React from 'react';
import PropTypes from 'prop-types';

import Trees from '../assets/img/trees.png'
//import DesertA from '../assets/img/desert_a.png'
//import MountainA from '../assets/img/mountains_a.png'

const Background = ({ 
  src, 
  color, 
  style,
  width, 
  height, 
  children 
}) => {

  return (
    <div 
      className='c-background'
      style={{
        ...style,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${color}`,
        overflow: 'hidden',
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'repeat-x',
      }}
    >
        {children}
    </div>
  )
    
}

export const ForestBackground = ({
  gameHeight: height,
  gameWidth: width,
  children
}) => {
  return (
    <Background
        color="#8abdf0"
        width={width}
        height={height}
        src={Trees}
        style={{
          backgroundPosition: 'center bottom 48px', // start background at floor height
        }}
    >
      {children}
    </Background>
  )
}

/*  export const DesertBackground = ({width, height, children}) => {
  return (
    <Background
        color="#f4e474"
        src={DesertA}
        width={width}
        //height={height}
    >
      {children}
    </Background>
  )
} */

/* export const MountainsBackground = ({ width, height, children }) => {
  return (
    <Background
        color="#8abdf0"
        width={width}
        height={height}
        src={MountainA}
        style={{
          backgroundPosition: 'center bottom'
        }}
    >
      {children}
    </Background>
  )
} */