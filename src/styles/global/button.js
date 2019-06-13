import styled          from "styled-components";
import { Link }        from 'react-router-dom';
import { media }       from './media-settings';
import { palette,
         font }        from './theme';

export const Button = styled.button`
    position: relative;
    cursor: pointer;
    outline-style: none;
    outline-width: 0px !important;
    outline-color: none !important;
    padding: 0;
    border: 1px solid ${palette(`transp`)};
    background: ${palette(`mainBlack`)};
    color: ${palette(`white`)};
    transition: all .8s;
    &:hover {
        background: ${palette(`transp`)};
        border: 1px solid ${palette(`mainBlack`)};
        color: ${palette(`mainBlack`)};
    }
    ${ media.ss`
        font: 0.875rem/1.875rem ${font(`bold`)};
        width: 128px;
        height: 40px;
    ` };
    ${ media.ls`
        font: 1rem/1.875rem ${font(`bold`)};
        width: 155px;
    ` };
`;

export const ButtonLink = styled(Link)`
    position: ${ props =>
        props.getInTouch
            ? 'absolute'
            : 'relative'
    };
    display: ${ props =>
        props.allWorksCases
            ? 'inline-block;'
            : 'block;'
    };
    text-decoration: none;
    text-align: center;
    margin: 0 auto;
    transition: all .8s;
    color: ${ props =>
        palette(props.allWorks
            ? `lightGray`
            : props.allWorksCases
            ? `mainBlack`
            : `white`
        )(props)
    };
    border-width: 1px;
    border-style: solid;
    border-color: ${ props =>
        palette(props.getInTouch
            ? `white`
            : `lightGray`
        )(props)
    };
    &:hover {
        background: ${ props =>
            palette(props.getInTouch
                ? `white`
                : `mainBlack`
            )(props)
        };
        border-color: ${ props =>
            palette(props.getInTouch
                ? `white`
                : `mainBlack`
            )(props)
        };
        color: ${ props =>
            palette(props.getInTouch
                ? `mainBlack`
                : `white`
            )(props)
        };
    }
    ${ media.ss`
        font: 0.875rem/1.875rem ${font(`bold`)};
        padding: 5px 20px 3px;
        margin-top: ${ props =>
            props.allWorks
                ? '39px'
                : '0'
            };
        ${ props => props.getInTouch
            ? ('bottom: 24px')
            : null
        };
    ` };
    ${ media.ms`
        ${ props => props.getInTouch
            ? ('bottom: 26px')
            : null
        };
    ` };
    ${ media.ls`
        font: 1rem/1.875rem ${font(`bold`)};
        padding: 5px 24px 3px;
        margin-top: ${ props =>
            props.allWorks
                ? '76px'
                : '0'
            };
        ${ props => props.getInTouch
            ? 'bottom: 52px'
            : null
        };
    ` };
`;

export const StringLink = styled(Link)`
    display: inline-block;
    margin: 0 auto;
    position: relative;
    text-decoration: none;
    color: ${palette(`mainBlack`)};
    outline: none;
    white-space: nowrap;
    &:after {
        content: '';
        display: block;
        border-right: 1px solid ${palette(`mainBlack`)};
        border-top: 1px solid ${palette(`mainBlack`)};
        transform: rotate(45deg) translateY(-50%) ;
        position: absolute;
        right: 13px;
        top: 44%;
        width: 10px;
        height: 10px;
        transition: right .3s;
        transition-timing-function: ease-in;
    }
    &:hover {
        &:after {
            right: 5px;
        }
    }
    ${ media.ss`
        font: 0.875rem/1.875rem ${font(`reg`)};  /* 14/20 */
        padding: 6px 24px 4px 20px;
        text-align: left;
    ` }
    ${ media.ms`
        font-size: 1rem;
        &:after {       
            right: 11px;
            top: 47%;
            width: 14px;
            height: 14px;
        }
    ` }
    ${ media.ls`
    ` }
`;

export const BackToWorksLink = styled(Link)`
    position: relative;
    display: inline-block;
    padding-left: 1.25rem;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    color: ${palette(`mainBlack`)};
    &:before {
        content: "";
        position: absolute;
        top: 2px;
        left: 0;
        display: block;
        width: 10px;
        height: 10px;
        border-color: ${palette(`mainBlack`)};
        border-right-width: 0;
        border-top-width: 0;
        border-style: solid;
        border-left-width: 2px;
        border-bottom-width: 2px;
        transform: rotate(45deg);
        transition: left .3s;
        transition-timing-function: ease-in;
    }
    &:hover {
        &:before {
            left: -8px;
        }
    }
    ${ media.ss`
        font: 1rem/1em ${font('reg')};  /* 18/30 */
        margin-bottom: 10px;
    ` }
    ${ media.ms`

    ` }
    ${ media.ls`
    ` }
`;
