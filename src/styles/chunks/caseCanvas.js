import styled       from "styled-components";
import { size }     from '../global/theme';
import { media }    from '../global/media-settings';

export const GridCaseCanvas = styled.div`
    ${ media.ss`
        padding-bottom: ${size('footer_ss')};
    ` }
`;
export const GridUnitCaseCanvas = styled.div``;
export const GridUnitSlider = styled.div`
    ${ media.ss`
        margin-top: ${ props => 
            props.nomargin
                ?  null
                : '60px'
        };
        margin-bottom: 60px;
    ` }
    ${ media.ms`
        margin-top: ${ props =>
            props.nomargin
                ?  null
                : '120px'
        };
    ` }
    ${ media.ls`
        margin-top: ${ props =>
            props.nomargin
                ?  null
                : '190px'
        };
        margin-bottom: 127px;
    ` }
`;