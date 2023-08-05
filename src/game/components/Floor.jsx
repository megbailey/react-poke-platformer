import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: blue;
    width: ${props =>` ${props.width}px`};
    height: ${props =>` ${props.height}px`};
    overflow: hidden;
`;

const Image = styled.img``;

const Floor = (props) => {
    const { src, width, height} = props
    
    return (
       <Container width={width} height={height} >
            <Image src={src} />
       </Container>
    );
}

export default Floor