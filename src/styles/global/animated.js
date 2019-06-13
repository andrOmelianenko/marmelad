import styled      from "styled-components"

export const AnimElement = styled.div`
    position: relative;
    ${ props => props.visible
        ? 'opacity: 1'
        : 'opacity: 0'
    };
    ${ props => props.slideUp && !props.visible
        ? 'transform: translateY(60px)'
        : null
    };
    transition-property: transform, opacity;
    transition-duration: .5s, .8s;
`
