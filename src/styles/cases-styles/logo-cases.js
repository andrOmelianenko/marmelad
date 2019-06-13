import styled       from "styled-components";

import { size }    from '../global/theme';
import { media }    from '../global/media-settings';

import { palette,
    font } from '../global/theme';

export const LogoSection = styled.section`
    & > div {
        padding-top: 0;
        padding-bottom: 0;
    }
    img {
        vertical-align: bottom;    
    }
    ${ media.ss`
        margin-top: 40px;
    ` };
    ${ media.ms`
        margin-top: 58px;
    ` };
    ${ media.ls`
        margin-top: ${ props =>
            props.artMarket
                ? `175px;`
                : props.u_21
                ? `135px;`
                : '145px;'
        };
    ` };
`;
export const LogoSectionBody = styled.section`
    & > div {
        padding-top: 0;
        padding-bottom: 0;
    }
    img {
        vertical-align: bottom;    
    }
    ${ media.ss`
        margin-top: 55px;
    ` };
    ${ media.ms`
        margin-top: 75px;
    ` };
    ${ media.ls`
        margin-top: ${ props =>
            props.artMarket
                ? `175px;`
                : props.u_21
                ? `135px;`
                : '145px;'
        };
    ` };
`;
export const IdeaRow = styled.div`
    ${ media.ss`
        margin-top: 50px;
        margin-bottom: 10px;
    ` }
    ${ media.ms`
        margin-top: 30px;
    ` }
    ${ media.ls`
        margin-top: 46px;
    ` }
    ${ media.ws`
        margin-top: 88px;
    ` }
`;
export const IdeaItem = styled.div`
    ${ media.ss`
        &:nth-child(2),
        &:nth-child(3) {
            margin-left: -3px;
        }
    ` }
    ${ media.ls`
        &:nth-child(2),
        &:nth-child(3) {
            margin-left: -18px;
        }
    ` }
    ${ media.ws`
        &:nth-child(2),
        &:nth-child(3) {
            margin-left: -36px;
        }
    ` }
`;
export const IdeaItemBody = styled.div`
    ${ media.ss`
        &:nth-child(2),
        &:nth-child(3) {
            margin-left: -3px;
        }
    ` }
    ${ media.ls`
        &:nth-child(2),
        &:nth-child(3) {
            margin-left: -18px;
        }
    ` }
    ${ media.ws`
        &:nth-child(2),
        &:nth-child(3) {
            margin-left: -36px;
        }
    ` }
`;
export const IdeaCircle = styled.div`
    width: calc(100% + 7px);
    position: relative;
    background: rgba(149,149,149,0.1);
    border: rgba(51,51,51,0.1);
    border-radius: 50%;
    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }
    p {
        padding: 0;
        position: absolute;
        width: 100%;        
        display: block;
        top: 50%;
        transform: translateY(-50%);
        font: 0.75rem/1.25rem ${font(`reg`)};
        color: ${palette(`plainText`)};
        text-align: center;
    }
    ${ media.ls`
        width: calc(100% + 12px);
        p {        
            font-size: 0.875rem;
        }
    ` }
    ${ media.ws`
        width: 100%;
    ` }
`;

export const LogoRow = styled.div`
    ${ media.ss`
        margin-top: ${ props =>
            props.navicomEnergy
                ? '0'
                : '40px'
        };
    ` }
    ${ media.ms`
        margin-top: ${ props =>
        props.navicomEnergy
            ? '0'
            : '30px'
        };
    ` }
    ${ media.ls`
        margin-top: ${ props =>
        props.navicomEnergy
            ? '0'
            : '70px'
        };
    ` }
`;
export const LogoItem = styled.div`
    ${ media.ss`
        margin-bottom: 22px;
        &:nth-child(2n+1) {
            padding-right: ${size('padding_ss')};
        };
        &:nth-child(2n) {
            padding-left: ${size('padding_ss')};
        };
        &:nth-last-child(1),
        &:nth-last-child(2) {
            margin-bottom: 0;
        };
    ` }
    ${ media.ms`
        margin: 0;
        &:nth-child(2n+1),
        &:nth-child(2n) {
            padding: 0;
        };
        &:nth-child(3n) {
            margin-right: 0;
        };
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
            margin-bottom: 30px;
        };
    ` }
    ${ media.ls`
        margin-right: 5.5%;
        &:nth-child(3n) {
            margin-right: 0;
        };
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
            margin-bottom: 22px;
        };
    ` }
`;
export const LogoItemBody = styled.div`
    ${ media.ss`
        margin-bottom: 22px;
        &:nth-child(2n+1) {
            padding-right: ${size('padding_ss')};
        };
        &:nth-child(2n) {
            padding-left: ${size('padding_ss')};
        };
        &:nth-last-child(1),
        &:nth-last-child(2) {
            margin-bottom: 0;
        };
    ` }
    ${ media.ms`
        margin: 0;
        &:nth-child(2n+1),
        &:nth-child(2n) {
            padding: 0;
        };
        &:nth-child(3n) {
            margin-right: 0;
        };
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
            margin-bottom: 30px;
        };
    ` }
    ${ media.ls`
        margin-right: 5.5%;
        &:nth-child(3n) {
            margin-right: 0;
        };
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
            margin-bottom: 22px;
        };
    ` }
`;
export const LogoCircle = styled.div`
    position: relative;
    border: 1px solid #e4e4e4;
    border-radius: 50%;
    p {
        padding: 0;
        position: absolute;
        width: 100%;        
        display: block;
        top: 50%;
        transform: translateY(-50%);
    }
    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }
    ${ media.ss`
        p {
            padding: 0 12px;;
        }        
    ` }
    ${ media.ms`
        width: 95%;
        p {
            padding: 0 6px;;
        }        
    ` }
    ${ media.ls`
        width: calc(100% + 9px);
    ` }
`;

export const VinoteriaRow = styled.div`
    ${ media.ss`
        margin-top: 30px;
    ` }
    ${ media.ms`
        margin-top: 40px;
    ` }
    ${ media.ls`
        margin-top: 64px;
    ` }
`;
export const VinoteriaItem = styled.div`
    text-align: center;
    img {
        margin: 0 auto;
    }
    ${ media.ss`
        margin-bottom: ${ props => props.vinoteria0 ? '0' :props.vinoteria4 ? '48px'  :(props.vinoteria7 || props.vinoteria8) ? '36px' : '32px'};
        margin-right: ${ props =>
            props.vinoteria1 ? '23.75%'
            : props.vinoteria2 ? '18%'
            : props.vinoteria4 ? '15%'
            : props.vinoteria5 ? '11%'
            : props.vinoteria7 ? '9%'
            : props.vinoteria9 ? '16%'
            : '0%' };
        padding-top: ${ props =>
              props.vinoteria1 ? '15px'
            : props.vinoteria2 ? '12px'
            : props.vinoteria4 ? '9px'
            : props.vinoteria5 ? '9px'
            : props.vinoteria8 ? '9px'
            : props.vinoteria10 ? '15px'
            : '0%' };
        img {
            width: ${ props =>
                  props.vinoteria1 ? '62%'
                : '100%' };
        }
    ` }
    ${ media.ms`
        order: ${ props => props.vinoteria1 ? '1' : props.vinoteria2 ? '2' : props.vinoteria3 ? '3' : props.vinoteria7 ? '4' : props.vinoteria4 ? '5' : props.vinoteria5 ? '6' : props.vinoteria9 ? '7' : props.vinoteria6 ? '8' : props.vinoteria8 ? '9' : props.vinoteria10 ? '10' : '11' };
        margin-bottom: ${ props => 
              props.vinoteria0 ? '0' 
            : (props.vinoteria4 || props.vinoteria5 || props.vinoteria9) ? '48px'
              : (props.vinoteria6 || props.vinoteria8 || props.vinoteria10) ? '45px'
              : '29px' };
        margin-right: ${ props =>
              props.vinoteria1  ? '12%'
            : props.vinoteria2  ? '13.5%'
            : props.vinoteria3  ? '4%'
            : props.vinoteria4  ? '6.5%'
            : props.vinoteria5  ? '11.5%'
            : props.vinoteria6  ? '4.5%'
            : props.vinoteria8  ? '5.5%'
            : '0%' };
        padding-top: ${ props =>
              props.vinoteria1  ? '15px'
            : props.vinoteria2  ? '12px'
            : props.vinoteria7  ? '13px'
            : props.vinoteria8  ? '13px'
            : props.vinoteria9  ? '7px'
            : props.vinoteria10 ? '28px'
            : '0' };
        img {
            width: ${ props =>
                  props.vinoteria1 ? '42%'
                : props.vinoteria4 ? '66%'
                : props.vinoteria6 ? '75%'
                : props.vinoteria7 ? '83%'
                : props.vinoteria9 ? '86%'
                : props.vinoteria10 ? '92%'
                : '100%' };
        }
    ` }
    ${ media.ls`
        margin-bottom: ${ props =>
        props.vinoteria0 ? '0'
        : (props.vinoteria4 || props.vinoteria5 || props.vinoteria9) ? '75px'
        : (props.vinoteria6 || props.vinoteria8 || props.vinoteria10) ? '65px'
        : '47px' };
        padding-top: ${ props =>
              props.vinoteria1 ? '22px'
            : props.vinoteria2 ? '18px'
            : props.vinoteria7 ? '22px'
            : props.vinoteria9 ? '10px'
            : props.vinoteria8 ? '24px'
            : props.vinoteria10 ? '50px'
            : '0' };
    ` }
`;