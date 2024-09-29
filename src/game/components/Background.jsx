import React from 'react';
import { useSelector } from "react-redux";


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

  const gameState = useSelector((state) => state.game.value)
  let transformPosition = gameState.scrollPosition

  return (
    <div
      className='c-scrolling-background'
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
      >
      <div 
        className='c-background'
        style={{
          ...style,
          transform: `translateX(${transformPosition}px)`,
          width: `${width * 10}px`, // very large width for infinite scroll
          height: `${height}px`,
          backgroundSize: 'auto',
          backgroundColor: `${color}`,
          backgroundImage: `url(${src})`,
          backgroundRepeat: 'repeat-x',
        }}
      >
          {children}
      </div>
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