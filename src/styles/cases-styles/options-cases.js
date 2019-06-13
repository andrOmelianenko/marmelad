import styled        from "styled-components";
import { size }     from '../global/theme';
import { media }     from '../global/media-settings';
import { Container } from '../global/GENERAL';

export const OptionsSection = styled.section`
    & * {
        // outline: 1px dashed 
    }
    ${ media.ss`
        margin-top: ${props => props.museum ? '20px' : '55px'};
    ` };
    ${ media.ms`
        margin-top: ${props => props.yoOy ? '120px' : '75px'};
    ` };
    ${ media.ls`
        margin-top: ${props => props.yoOy ? '133px' : '140px'};
        padding: 0 16px;
    ` };
`;
export const OptionsContainer = styled(Container)`
    ${ media.ss`
        margin: 0;
        padding: ${props => props.yoOy ? '0' : '30px'} ${ size('paddingSide_ss')} ${props => props.yoOy ? '0' : '32px'};
    ` };
    ${ media.ms`
        padding: ${props => props.yoOy ? '0' : '45px'} ${ size('paddingSide_ms')} ${props => props.yoOy ? '0' : '40px'};
    ` };
    ${ media.ls`
        padding: ${props => props.yoOy ? '0' : '80px'}  0 ${props => props.yoOy ? '0' : '97px'};
    ` };
    ${ media.ws`` };
`;
export const OptionsWhiteContainer = styled(OptionsContainer)`
    border: 1px solid #c4c4c4;
    svg {
        fill: #d71920;
    }
`;
export const OptionsRedContainer = styled(OptionsContainer)`
    background: #d71920;
    svg {
        fill: #ffffff;
    }
`;
export const OptionsBlackContainer = styled(OptionsContainer)`
    background: #333333;
    svg {
        fill: #ffffff;
    }
`;
export const OptionsMuseum = styled(OptionsContainer)`
    padding: 0;
    &:before,
    &:after {
        content: '';
        display: block;
        width: 100%;
    }
`;
export const MuseumWhiteContainer = styled(OptionsMuseum)`
    ${ media.ss`
        &:before {
            padding-top: 9.5%;
        }
        &:after {
            padding-bottom: 10%;
        }
        ` };
    ${ media.ms`` };
    ${ media.ls`
        &:before {
            padding-top: 0%;
        }
        &:after {
            padding-bottom: 13%;
        }
    ` };
    ${ media.ws`` };
`;
export const MuseumBlueContainer = styled(OptionsMuseum)`
    background: #003f6e;
    ${ media.ss`
        &:before {
            padding-top: 9.5%;
        }
        &:after {
            padding-bottom: 10%;
        }
    ` };
    ${ media.ms`` };
    ${ media.ls`
        &:before {
            padding-top: 10.25%;
        }
        &:after {
            padding-bottom: 10.75%;
        }
    ` };
    ${ media.ws`` };
`;
export const OptionsItem = styled.div`
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    img {
        vertical-align: bottom;
    }
    ${ media.ss`
        padding-left: 12px;
        padding-right: 12px;
        margin-bottom: ${ props => props.marginBottom ? '22px;' :props.yoOy ? '46px' : '0;' };
        svg {
            width: ${ props => props.vertical ? '50%;' : '100%;' };
            margin: 0 auto;
        }
    ` };
    ${ media.ms`
        order: ${ props => 
            props.order1 ? '1;' 
          : props.order2 ? '2;' 
          : props.order3 ? '3;' 
          : props.order4 ? '4;' 
          : props.order5 ? '5;' 
          : props.order6 ? '6;' 
          : props.order7 ? '7;' 
          : props.order8 ? '8;' 
          : '0;' 
        };
        margin-right: ${ props =>
            (props.order2 || props.order6) ? '6%'
          : (props.yoOyRight) ? '18%'
          : (props.yoOyLeft || props.rightNone || props.museumRightNone) ? '0'
          : '7.5%'
        };
        margin-bottom: ${ props =>
            props.firstRow ? '35px'
          : props.yoOy ? '46px'
          : '0'
        };
        svg {            
            width: 100%;
            height: auto;
            max-width: ${ props =>
                props.vertical ? '150px;'
              : props.museum ? '100%;'
              : '276px;'
            };
            margin: 0 auto;
        }
    ` };
    ${ media.ls`
        padding: 0;
        margin-bottom: ${props => props.yoOy ? '130px' :(props.firstRow) ? '60px' : '0'};
        padding-top: ${props => props.vertical ? null :(props.museum || props.museumRightNone) ? '0;' : '0.8%;'};
        text-align: ${props => props.left ? 'left' :props.right ? 'right' : 'center'};
        svg {
            ${props => props.museumRightNone ? 'width: 86%' : null};
        }
     ` };
    ${ media.ws`
    ` };
`;
export const MuseumItem = styled(OptionsItem)`
    ${ media.ss`
        padding-left: 5.65%;
        padding-right: 5.65%;
        svg {
            width: ${ props => (props.museum && props.left) ? '83%;' : '100%;' };
        }
    ` };
    ${ media.ms`
        margin-right: 0;
        svg {
            max-width: 100%;
        }
    ` };
    ${ media.ls`
        padding-left: 6.5%;
        padding-right: 6.5%;
        text-align: ${props => props.left ? 'left' :props.right ? 'right' : 'center'};
        svg {
            ${props => (props.museum && props.left) ? 'width: 86%' : null};
        }
     ` };
    ${ media.ws`
    ` };
`;