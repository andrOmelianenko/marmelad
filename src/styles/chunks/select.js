import styled     from "styled-components";
import { palette,
         font }   from '../global/theme';
import { media }  from '../global/media-settings';

/* Select styles */
export const InputSelect = styled.div`
    position: relative;
    margin: 0;
    margin-top: 5px;
    width: 100%;
    outline: none;
    background: ${palette(`white`)};
    overflow: hidden;
    transition: all .4s;
    border: ${ props =>
        props.checked
            ? `1px solid rgba(153,153,153,1)`
            : `1px solid rgba(153,153,153,0.5)`
    };
    box-shadow: ${ props =>
        props.checked
            ? `5px 5px 9px 0px rgba(204,204,204,0.8)`
            : null
    };

    ${ media.ss`
        font: 0.875rem/1.25rem ${font(`reg`)};
        ${ props => props.checked
            ? ('height: 180px')
            : ('height: 60px')
        };
    ` };
    ${ media.ms`
        max-width: 280px;
    ` };
    ${ media.ls`
        font: 1rem/1.875rem ${font(`reg`)};
        ${ props => props.checked
            ? ('height: 200px')
            : ('height: 72px')
        };
        min-width: 225px;
        max-width: auto;
    ` };
`;

export const ValuesList = styled.div`
    position: absolute;
    margin: 0;
    padding: 0;
    transition-property: top, opacity;
    transition-duration: .5s, .4s;
    transition-timing-function: ease-in-out;
    ${ media.ss`
        left: 55%;
        transform: translateX(-50%);
    ` };
    ${ media.ls`
        left: 60%;
    ` };
    ${ props => props.checked
        ? ('opacity: 1')
        : ('opacity: 0')
    };
    ${ props => props.checked
        ? ('top: 20px')
        : ('top: -250%')
    };
`;

export const SelectLabel = styled.label`
    display: block;
    width: 100%;
    cursor: pointer;
    transition: background-color .3s;
    border-style: solid;
    border-width: 1px;
    border-color: ${ props =>
        palette(props.selected
            ? `bgGray`
            : `transp`
        )(props)
    };
    &:hover {
        background-color: ${ props =>
            palette(props.selected
                ? `transp`
                : `lineHr`
            )(props)
        };
    }
    ${ media.ss`
        padding: 4px 5px;
    ` };
    ${ media.ls`
        padding: 0 5px;
    ` };
`;

export const Dash = styled.span`
    display: block;
    margin: 15px 0 15px 1rem;
    height: 1px;
    width: 45px;
    background-color: ${palette(`mainBlack`)};
`

export const SelectedValue = styled.span`
    position: absolute;
    top: 50%;
    left: 42%;
    transform: translateY(-50%);
    transition: opacity .6s;
    ${ props => props.checked
        ? ('opacity: 0')
        : ('opacity: 1')
    };
`;

export const LabelSelect = styled.label`
    position: absolute;
    cursor: pointer;
    width: 100%;
    ${ media.ss`
        height: 60px;
    ` };
    ${ media.ls`
        height: 72px;
    ` };
    span {
        position: absolute;
        display: block;
        width: 40px;
        left: 1rem;
        transform: translateY(-50%);
        transition: top .3s;
        transform: translateZ(0);
        ${ props => props.checked
            ? ('top: 40%')
            : ('top: 60%')
        };
        &::before,&::after {
            content: '';
            display: block;
            position: absolute;
            background-color: ${palette(`lightGray`)};
            width: 50%;
            height: 1px;
            transform: translateZ(0);
            transition-duration: .4s;
            transition-property: transform;
        }
        &::before {
            left: 0;
            transform-origin: right;
            ${ props => props.checked
                ? ('transform: rotate(-45deg)')
                : ('transform: rotate(45deg)')
            };
        }
        &::after {
            right: 0;
            transform-origin: left;
            ${ props => props.checked
                ? ('transform: rotate(45deg)')
                : ('transform: rotate(-45deg)')
            };
        }
    }
`
