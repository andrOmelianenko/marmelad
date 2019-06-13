import styled       from "styled-components";
import { media }    from '../global/media-settings';
import { fontCase, palette }     from '../global/theme';
import { Container } from '../global/GENERAL';

import { ImgCell }  from './image-cases';

export const PackagingSection = styled.section`
    position: relative;
    ${ media.ss`
        margin-top: ${props => props.yoOy ? '55px' : '50px'};
    ` };
    ${ media.ms`
        margin-top: ${props => props.yoOy ? '120px' : '90px'};
    ` };
    ${ media.ls`
        margin-top: 155px;
    ` };
`;
export const PackagingImgCell = styled(ImgCell)`
    ${ media.ss`
        margin-top: 42px;
    ` };
    ${ media.ms`` };
    ${ media.ls`
        margin-top: 83px;        
    ` };
`;

export const PackagingContainer = styled(Container)`    
`;

export const PackagingItem = styled.div`
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    img {
        vertical-align: bottom;
        display: block;
        margin: 0 auto;
    }
    p {
        font: 14px/30px ${ fontCase('AkzidenzGroteskProBoldCn')};
        letter-spacing: 0.1em;
        text-align: center;
        text-transform: uppercase;
        color: ${ palette('mainBlack')};
        vertical-align: middle;
        padding: 0;   
        &:before, &:after {
            content: '';
            display: inline-block;
            vertical-align: middle;
            width: 3px;
            height: 3px;
            margin: 0 2px 2px; 
            border-radius: 50%;
            background: ${ palette('mainBlack')};
        }
    }
    ${ media.ss`
        padding-left:  12px;
        padding-right: 12px;
        margin-bottom: ${ props => props.last ? '0' : '50px' };
        img {
            width: ${ props => 
                props.gogol ? '96%' 
                :props.kotlarevsky ? '87%' 
                :props.kondratyk ? '95%'  
                :props.skovoroda ? '89.5%'  
                :props.petlyra ? '93%' 
                : '100%;' 
            };
            margin-bottom: 7px;
        }
    ` };
    ${ media.ms`        
        img {
            width: ${ props => 
                props.gogol ? '47%' 
                :props.kotlarevsky ? '43%' 
                :props.kondratyk ? '47%'  
                :props.skovoroda ? '44%'  
                :props.petlyra ? '46.5%' 
                : '100%;' 
            };
        }
    ` };
    @media (min-width: 46em) {
        flex-basis: 20%;
        max-width: 20%;
        margin-bottom: 0;         
        img {
            width: ${ props =>
                props.gogol ? '71%'
                :props.kotlarevsky ? '65%'
                :props.kondratyk ? '71%'
                :props.skovoroda ? '67%'
                :props.petlyra ? '69.75%'
                : '100%;'
            };
        }
    };
    ${ media.ls`
        padding: 0;      
        p {
            font-size: 20px;
            line-height: 30px;
            text-align: center;
            &:before, &:after {
                width: 6px;
                height: 6px;
                margin: 0 2px 3px; 
            }
        }
        img {
            width: ${ props =>
                  props.gogol ? '52%'
                : props.kotlarevsky ? '47.25%'
                : props.kondratyk ? '51%'
                : props.skovoroda ? '48%'
                : props.petlyra ? '50.75%'
                : '100%;' };
            margin-bottom: 33px;
        }
    ` };
    @media (min-width: 75em) {
        p { font-size: 24px; }
    }
    ${ media.ws`
    ` };
`;