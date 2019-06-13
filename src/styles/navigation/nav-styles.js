import styled          from "styled-components";
import { NavLink }     from 'react-router-dom';
import { palette,
         font,
         size}         from '../global/theme';
import { media }       from '../global/media-settings';

export const Header = styled.header`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    transition-property: background-color, transform, opacity;
    transition-duration: .8s, .8s, .4s;
    background-color: ${ props =>
        palette(props.transp_main && !props.blackBg && !props.checked
            ? `transp`
            : (props.transp_main && props.blackBg) || props.checked
            ? `mainBlack`
            : `mainBlack`
        )(props)
    };
    ${ props => props.hide
        ? 'transform: translateY(-84px)'
        : 'transform: none'
    };
    /*--------------------------*/
    ${ media.ss`
        height: ${size(`header_ss`)};
    ` }
    ${ media.ls`
        height: ${size(`header_ls`)};
    ` }
    nav {
        ${ media.ss`
            padding: 0 20px;
        ` }
        ${ media.ms`
            padding: 0 24px;
        ` }
        ${ media.ls`
            padding: 0 16px;
        ` }
    }
`;

export const NavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    ${ media.ls`
        height: 100%;
    `}
`;

export const LabelCross = styled.label`
    position: absolute;
    z-index: 1000;
    cursor: pointer;
    height: 12px;
    width: 20px;
    top: 50%;
    transform: translateY(-50%);
    ${ media.ss`
        right: 20px;
    ` }
    ${ media.ms`
        right: 24px;
    ` }
    ${ media.ls`
        display: none;
    ` }
    span {
        position: absolute;
        display: block;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        &::before,&::after {
            content: '';
            display: block;
            position: absolute;
            background-color: ${palette('white')};
            width: 100%;
            height: 2px;
            transition-duration: 0.3s, 0.3s, 0.3s;
            ${ props => props.checked
                ? 'transition-delay: 0s, 0.4s, 0s'
                : 'transition-delay: 0.4s, 0s, 0s'
            };
        }
        &::before {
            transition-property: top, transform, background-color;
            ${ props => props.checked
                ? ('top: 0px')
                : ('top: -6px')
            };
            ${ props => props.checked
                ? ('transform: rotate(45deg)')
                : ('transform: rotate(0deg)')
            };
        }
        &::after {
            transition-property: bottom, transform, background-color;
            ${ props => props.checked
                ? ('bottom: -2px')
                : ('bottom: -6px')
            };
            ${ props => props.checked
                ? ('transform: rotate(-45deg)')
                : ('transform: rotate(0deg)')
            };
        }
    }
`

export const InnerNavList = styled.li`
    background-color: ${ props =>
        palette(!props.mobile || !props.checked
            ? `transp`
            : `mainBlack`
        )(props)
    };
    transition-property: background-color, transform;
    transition-duration: .4s, .6s;
    transition-timing-function: ease-out, ease-in;
    top: -450px;
    ${ props => props.checked
        ? 'transform: translateY(500px)'
        : 'transform: none'
    };
    ${ media.ss`
        position: fixed;
        z-index: 999;
        padding-top: 60px;
        height: 350px;
        left: 0;
        right: 0;
        li {
            position: relative;
            z-index: 100;
            padding-left: 40px;
            margin-bottom: 20px;
            &:nth-child(4) {
                padding-left: 20px;
            }
            &:nth-child(5) {
                padding-left: 0;
            }
        }
    ` }
    ${ media.ms`
        li {
            padding-left: 48px;
            &:nth-child(4) {
                padding-left: 24px;
            }
        }
    ` }
    ${ media.ls`
        position: relative;
        padding-top: 0;
        top: auto;
        height: 100%;
        li {
            padding-left: 0;
            margin-bottom: 0;
            &:nth-child(4),&:nth-child(5) {
                padding-left: 0;
            }
        }
    `}
`;

export const NavItem = styled.li`
    position: relative;
    z-index: 1000;
    ${ media.ss`
        padding-top: 12px;
        width: 100%;
    ` }
    ${ media.ls`
        width: auto;
        padding-top: 24px;
        margin-right: 26px;
        &:last-child {
            margin-right: 0;
        }
    ` }
`;

export const StNavLink = styled(NavLink)`
    text-decoration: none;
    outline-style: none;
    outline-width: 0 !important;
    outline-color: none !important;
    color: ${ palette('white') };
    border-bottom: 6px solid transparent;
    transition-property: border-bottom, color;
    transition-duration: .8s, .6s;
    &:hover{
        color: ${ props =>
            palette(props.home && !props.blackBg && !props.checked && !props.active
                ? `bgBlack`
                : !props.active
                ? `bgGray`
                : null
            )(props)
        };
    }

    ${ media.ss`
        font: 1.25rem/1.875rem ${font(`bold`)};
    ` }
    ${ media.ls`
        font-size: 1rem;
        padding-bottom: 25px;
    ` }
    /* Logo */
    img {
        ${ media.ss`
            width: 100px;
            transform: translateZ(0);
        ` }
        ${ media.ls`
            padding-top: 4px;
            width: 125px;
        ` }
    }
`;

export const ActiveSS = {
    color: '#888'
}

export const ActiveLS = {
    borderBottom: '6px solid #fff'
}
