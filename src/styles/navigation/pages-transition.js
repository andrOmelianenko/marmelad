import styled      from "styled-components";

export const AnimPage = styled.main`
    transition: opacity 1s;
    ${ props => props.mount
        ? ('opacity: 1')
        : ('opacity: 0')
    };
    ${''/* ${ props => props.unmount
        ? ('opacity: 0')
        : null
    }; */}
`;
