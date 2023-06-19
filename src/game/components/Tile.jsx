import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: ${props =>` ${props.width}px`};
    height: ${props =>` ${props.height}px`};
    overflow: hidden;
    transform: scale(${ props => `${props.scale}, ${props.scale}`});
    transform-origin: top left;
`;

const Image = styled.img`
    transform: ${ props => `translate(-${props.left}px, 0)` }
`;

const Tile = (props) => {
    const { src, width, height, scale, state, start} = props
    const left = width * state + start
    
    return (
       <Container width={width} height={height} scale={scale}>
            <Image src={src} left={left} />
       </Container>
    );
}

export default Tile