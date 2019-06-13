import styled       from "styled-components";
import { media }    from '../global/media-settings';

import { ImgCell }  from './image-cases';

import Dva             from '../../img/cases/2x2/svg/dvaNaDva_site_2_bg.svg'

export const SiteSection = styled.section`
    position: relative;
    ${ props => props.dvaNaDva 
    ? `background-image: url(${ Dva });
        background-repeat: no-repeat;
        background-size: 226%;
        background-position: center 25%;` 
    : null }
    ${ media.ss`
        margin-top: ${ props => props.dvaNaDva ? '98px' :props.whirl ? '26px' : '55px' };
    ` };
    ${ media.ms`
        margin-top: 75px;
    ` };
    ${ media.ls`
        ${ props => props.dvaNaDva
            ? `background-size: 205%;
               background-position: center 26.5%;` 
            : null }
        margin-top: ${ props => props.dvaNaDva ? '156px' :props.whirl ? '55px' : '120px' };
    ` };
`;
export const DvaNaDvaCenter = styled.div`
    margin: 0 auto;
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`
        width: 90.9091%;
    ` };
`;
export const WhirlCenter = styled.div`
    margin: 0 auto;
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`
        width: 90.9091%;
    ` };
`;
export const SiteImgCell = styled(ImgCell)`
    ${ media.ss`
        margin-top: 42px;
    ` };
    ${ media.ms`` };
    ${ media.ls`
        margin-top: ${props => props.dvaNaDva ? '192px' : '83px' };
        ${props => 
            props.dvaNaDva 
                ?  `margin-left: auto;
                    margin-right: auto;
                    width: 82%;
                    padding-right: 4.75%;` 
            : null 
        }
    ` };
`;
export const DvaNaDvaSiteImgCell = styled(ImgCell)`
    position: relative;
    & > div {
        width: 100%;
    }
    &:before {
        content: '';
        display: block;
        width: 100%;
        padding-top: 4.25%;
    }
    ${ media.ss`
        margin-bottom: 77px;
    ` };
    ${ media.ms`` };
    ${ media.ls`
        width: 90.9%;
        margin: 0 auto;
    ` };
`;
export const WhirlSiteImgCell = styled(ImgCell)`
    position: relative;
    background: rgba(248,248,248,0.5);
    & > div {
        width: 100%;
    }
    ${ media.ss`
        padding: 18px 0;
    ` };
    ${ media.ms`` };
    ${ media.ls`
        width: 90.9%;
        margin: 0 auto;
        padding: 105px 0 60px;
    ` };
`;
export const WhirlSiteBaseImgCell = styled(ImgCell)`
    position: relative;
    background: rgba(248,248,248,0.5);
    &:before {
        content: '';
        display: block;
        padding-top: 79%;
    }
    ${ media.ss`
    ` };
    ${ media.ms`` };
    ${ media.ls`
        width: 90.9%;
        margin: 0 auto;
    ` };
`;
export const SiteSheet = styled.div`
    position: relative;
    z-index: 1;
    text-align: center;
    & > div {
        margin-top: -1px;
    }
    & > div > img {
        width: ${props => props.dvaNaDva ? '75.5%' :props.whirl ? '87.5%' : '100%'};
        vertical-align: bottom;
        box-shadow: 1px 2px 2px 0px rgba(0,0,0,0.15), -1px 2px 2px 0px rgba(0,0,0,0.15);
    }
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`
        & > div > img {
            width: ${props => props.dvaNaDva ? '75.5%' :props.whirl ? '87.5%' : '73.5%'};
        }
    ` };
`;
export const SiteSheetBase = styled.div`
    position: absolute;
    text-align: center;
    & > div > img {
        width: 100%;
        vertical-align: bottom;
        box-shadow: 0px 4px 13px 6px rgba(60,58,56,0.03);
    }
`;
export const SiteSheetR = styled(SiteSheetBase)`
    z-index: 1;
    ${ media.ss`
        width: 45%;
        top: 6%;
        right: calc(50% - 12%);
    ` };
    ${ media.ms`` };
    ${ media.ls`    
        width: 46%;
        top: 6.5%;
        right: calc(50% - 14%);
    ` };
`;
export const SiteSheetA = styled(SiteSheetBase)`
    z-index: 2;
    ${ media.ss`
        width: 52%;
        top: 28.5%;
        left: calc(50% - 8%);
    ` };
    ${ media.ms`` };
    ${ media.ls`
        top: 29%;
        left: calc(50% - 7%);
    ` };
`;
export const SiteSheetS = styled(SiteSheetBase)`
    z-index: 3;
    ${ media.ss`
        width: 52%;
        top: 53%;
        right: calc(50% - 8%);
    ` };
    ${ media.ms`` };
    ${ media.ls`
        top: 54%;
        right: calc(50% - 7%);
    ` };
`;
export const MacBook = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
    ${ media.ss`
        padding: 0 11px;
    ` };
    ${ media.ms`
        padding: 0 12px;
    ` };
    ${ media.ls`
        padding: 0 14px;
    ` };
`;
export const PopUpImg = styled.div`
    position: absolute;
    z-index: 2;
    top: 11.8%;
    width: 45.5%;
    & > img {
        vertical-align: bottom;
    }
    ${ media.ss`
        right: -2.3%;
    ` };
    ${ media.ms`
        right: -2.05%;
    ` };
    ${ media.ls`
        width: 43.5%;
        right: -0.15%;
    ` };
    @media (min-width: 75em) {
        right: -0.35%;            
    }
    ${ media.ws`
        right: -0.6%;
    ` };
    @media (min-width: 112em) {
        right: -0.8%;
    }
    
`;

