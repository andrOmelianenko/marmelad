import styled          from "styled-components";
import { media }       from '../../global/media-settings';
import { palette,
         font }        from '../../global/theme';

export const ControlBlock = styled.div`
    ${ media.ss`
       margin: 0 0 20px;
    ` };
    ${ media.ls`
       margin: 0 0 25px;
    ` };
`;
export const WorksList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    list-style: none;
    padding: 0;
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`` };
`;
export const SortLabel = styled.label`
    display: inline-block;
    color: ${ props =>
        palette(props.checked === true
            ? `white`
            : `mainBlack`
        )(props)
    };
    cursor: pointer;
    background-color: ${ props =>
        palette(props.checked
            ? `bgGray`
            : `transp`
        )(props)
    };
    transition: all .4s;
    &:hover {
        color: ${ props =>
            palette(props.checked === true
                ? null
                : `lightGray`
            )(props)
        };
    }
     
    ${ media.ss`
        font: 0.875rem/1.875rem ${font(`reg`)};
        padding-left: 12px;
        padding-right: 12px;
        ${ props => props.left
            ? 'padding-left: 0'
            : props.right
            ? 'padding-right: 0'
            : null
        };
    ` };
    ${ media.ms`
        font: 1.125rem/1.875rem ${font(`reg`)};
        padding-left: 14px;
        padding-right: 14px;
        ${ props => props.left
            ? 'padding-left: 0'
            : props.right
            ? 'padding-right: 0'
            : null
        };
    ` };
    ${ media.ls`
        padding-top: 5px;
        padding-bottom: 5px;
    ` };
    
`;