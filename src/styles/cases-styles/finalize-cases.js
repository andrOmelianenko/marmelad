import styled       from "styled-components";
import { size } from '../global/theme';
import { media }    from '../global/media-settings';

import { ImgCell }  from './image-cases';

export const FinalizeSection = styled.section`
    img {
        vertical-align: bottom;
    }
    ${ media.ss`
        margin-top: ${props => 
              props.museum ? '50px' 
            : props.yoOy ? '55px' 
            : props.vinoteria ? '60px' 
            : '66px'
        };
    ` };
    ${ media.ms`
        margin-top: ${props => props.yoOy ? '120px' : '75px'};
    ` };
    ${ media.ls`
        margin-top: ${ props => props.yoOy ? '140px' :props.museum ? '210px' : '163px' };
    ` };
    ${ media.ws`
        margin-top: 175px;
    ` };
`;
export const FinalizeImgCell = styled(ImgCell)`
    ${ media.ss`
        ${ props => props.yoOy ? 'margin-bottom: 0' : null };
    ` };
    ${ media.ms`` };
    ${ media.ls`
    ` };
`;
export const FinalizeImgTile = styled.div`
    background: #f8f8f8;
    &:before,
    &:after {
        content: '';
        display: block;
        width: 100%;
    }
    ${ media.ss`
        &:before {
            padding-top: ${ props => props.artMarket ? '19%' : '15%' };
        }
        &:after {
            padding-bottom: ${ props => props.artMarket ? '19%' : '21.5%' };
        }
    ` };
    ${ media.ms`
        &:before {
            padding-top: ${ props => props.artMarket ? '16.75%' : '15%' };
        }
        &:after {
            padding-bottom: ${ props => props.artMarket ? '16%' : '21.5%' };
        }
    ` };
    ${ media.ls`
        margin-left: ${size('padding_ls')};
        margin-right: ${size('padding_ls')};
        &:before {
            padding-top: ${ props => props.artMarket ? '14.75%' :props.museum ? '10%' : '9%' };
        }
        &:after {
            padding-bottom: ${ props => props.artMarket ? '14.5%' :props.museum ? '10%' : '10.75%' };
        }
    ` };
    ${ media.ws`        
        &:before {
            padding-top: 120px;
        }
        &:after {
            padding-bottom: 140px;
        }
    ` };
`;

export const FinalizeImgLogoGrid = styled.div`   
    margin: 0 auto;
    ${ media.ss`
        width: 79%;
        padding: ${ props => props.artMarket ? '0 10px' : '0 0 0 16px' };
    ` };
    ${ media.ms`
        width: 61%;
    ` };
    ${ media.ls`
        width: ${ props => props.museum ? '34.5%' : '54%' };
        padding-left: ${ props => props.artMarket ? '0' : '0 0 0 55px' };
    ` };
    ${ media.ws`
    ` };
`;
export const FinalizeImgLogo = styled.div`
    img {
        margin: 0 auto;
        display: block;
    }
    &:before,
    &:after {
        content: '';
        display: block;
        width: 100%;
    }
    ${ media.ss`
        padding: ${ props =>
            props.horizontal ? '0 5px;'
            :(props.square || props.rectangle) ? '0 12px;'
            : '0 10px;'
        };
        ${ props => props.square ? 'margin-bottom: 35px;' : null };
        &:before{
            ${ props => (props.square || props.rectangle) ? null : 'padding-top: 33%' };
        }
        &:after {
            ${ props => (props.square || props.rectangle) ? null : 'padding-top: 7%'};
        }
    ` };
    ${ media.ms`
        ${ props => props.square ? 'margin-bottom: 0;' : null };
        padding: ${ props =>
            props.horizontal ? '0 16px;'
            :props.rectangle ? '0 19% 5px 6%'
                : '0 22px;'
        };
    ` };
    ${ media.ls`
        margin: 0;
        padding: ${ props =>
              props.horizontal ? '0 16px;'
            : props.square ? '0 3% 0 0'
            : props.rectangle ? '0 10% 2px 3%'
            : '0'
        };
        img {
            ${ props => (props.square || props.rectangle) ? null : 'width: 53.75%;' };
        }
        &:after {
            ${ props => (props.square || props.rectangle) ? null : 'padding-top: 27%;' };            
        }
    ` };
    ${ media.ws`
        img {
            width: 65%;
        }
    ` };
`;