import React from 'react';
import { useSelector } from "react-redux";

import TopBar from './TopBar.jsx';


import Trees from '../assets/img/backgrounds/trees.png'

//import DesertA from '../assets/img/desert_a.png'
//import MountainA from '../assets/img/mountains_a.png'

const Background = ({ 
  src, 
  style,
  children 
}) => {

  const gameState = useSelector((state) => state.game.value)
  const transformPosition = gameState.scrollPosition
  const gameWidth = gameState.totalWidth
  const gameHeight = gameState.totalHeight

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
          width: `${gameWidth * 10}px`, /* very large width for infinite scroll */
          height: `${gameHeight - 30 /* window padding */ - 6 /* border widths */ }px`,
          backgroundSize: 'auto',
          backgroundImage: `url(${src})`,
          backgroundRepeat: 'repeat-x',
        }}
      />
    </div>
  )
    
}

export const ForestBackground = () => {
  return (
    <div 
      id="background"
      style={{ backgroundColor: "#8abdf0" }}
    >
      <TopBar height={20} />
      <Background
          src={Trees}
          // start background at floor height
          style={{ backgroundPosition: 'center bottom 48px' }}
      />
    </div>
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