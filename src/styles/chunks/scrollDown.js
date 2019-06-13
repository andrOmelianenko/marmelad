import styled from "styled-components";
import { palette,
         font }         from '../global/theme';
import { media }        from '../global/media-settings';

export const ScrollDownBlock = styled.div`
    position: absolute;
    text-align: center;
    width: 100%;
    font: 1rem/1em ${font(`reg`)};
    color: ${ props =>
        palette( props.white
            ? `white`
            : `mainBlack`
        )(props)
    };
    svg {
        fill: ${ props =>
            palette( props.white
                ? `white`
                : `mainBlack`
            )(props)
        }; 
        margin-bottom: 12px;
    }
    ${ media.ss`
        bottom: 40px;
    ` };
    ${ media.ms`
        bottom: 90px;
    ` };
    ${ media.ls`
        bottom: ${ props => 
            props.home
                ? `6%;`
                : '16.75%;'
        };
    ` };
`;