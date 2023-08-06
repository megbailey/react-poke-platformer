import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: blue;
    position: absolute;
    left: ${props =>` ${props.x}px`};
    top: ${props =>` ${props.y}px`};
    width: ${props =>` ${props.width}px`};
    height: ${props =>` ${props.height}px`};
    overflow: hidden;
`;

const Image = styled.img``;

const Floor = (props) => {
    const { src, body} = props

    const width = body.bounds.max.x - body.bounds.min.x;
    const height = body.bounds.max.y - body.bounds.min.y;
    const x = body.position.x;
    const y = body.position.y
    
    return (
       <Container 
            width={width} 
            height={height}
            x={x} 
            y={y} 
        >
            <Image src={src} />
       </Container>
    );
}

export default Floor