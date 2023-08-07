import React from 'react';
import styled from 'styled-components';

const Container = styled.section.attrs(
    ({ x, y, width, height, scale }) => ({
      style: {
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        transform: `scale(${scale}, ${scale}`
      }
    })
  )`position: absolute;
    overflow: hidden;
    transform-origin: top left;
  `;

const Image = styled.img`  
    transform: ${ props => `translate(-${props.left}px, 0)` }
`;

const Tile = (props) => {
    const { src, x, y, width, height, scale, state, start} = props
    const left = width * state + start
    
    return (
       <Container 
            width={width}
            height={height}
            scale={scale}
            x={x} 
            y={y}
        >
            <Image src={src} left={left} />
       </Container>
    );
}

export default Tile