import styled     from "styled-components";
import { media }  from '../global/media-settings';

import EveryDay10       from '../../img/cases/everyDay/ED_10_1366.jpg';
import UBS              from '../../img/cases/ubs/ubs_1_1366.jpg';
import DvaNaDvaBg       from '../../img/cases/2x2/dvaNaDva_first.jpg';
import YoOyBg           from '../../img/cases/yoy/yoOy_first.jpg';
import YoOyPackagingBg  from '../../img/cases/yoy/yoOy_packaging.jpg';
import VinoteriaBg      from '../../img/cases/vinoteria/vinoteria_image1.jpg';

export const ImageBg = styled.div`
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    &:before {
        content: '';
        display: block;
        width: 100%;
    }
`;
export const EveryDayPen = styled(ImageBg)`
    background-color: #d7dad8;
    background-image: url(${ EveryDay10 });    
    ${ media.ss`
        min-height: 325px;
    ` }  
    ${ media.ls`
        &:before {
            padding-top: 41%;
        }
    ` } 
    ${ media.ws`
        &:before {
            padding-top: 510px;
        }
    ` }
`;
export const Ukrburservice = styled(ImageBg)`
    background-color: #d7dad8;
    background-position: 34% center;
    background-image: url(${ UBS });    
    ${ media.ss`
        min-height: 383px;
    ` }  
    ${ media.ls`
        &:before {
            padding-top: 72%;
        }
    ` }
`;
export const DvaNaDva = styled(ImageBg)`
    background-position: 38% center;
    background-image: url(${ DvaNaDvaBg });    
    ${ media.ss`
        min-height: 353px;
    ` }  
    ${ media.ls`
        background-position: 23.5% 100%;
        background-size: 145%;
        &:before {
            padding-top: 72%;
        }
    ` }
`;
export const YoOy = styled(ImageBg)`
    background-position: 49% center;
    background-image: url(${ YoOyBg });    
    ${ media.ss`
        min-height: 353px;
        &:before {
            padding-top: 112.5%;
        }
    ` }  
    ${ media.ls`
        background-position: 23.5% 100%;
        background-size: cover;
        &:before {
            content: '';
            display: block;
            padding-top: 74.75%;
        }
    ` }
`;
export const YoOyPackaging = styled(ImageBg)`
    background-position: 49% center;
    background-image: url(${ YoOyPackagingBg });
    ${ media.ss`
        &:before {
            padding-top: 88.25%;
        }
    ` }  
    ${ media.ms`
        // background-position: 50% 50%;
        // background-size: cover;
        // &:before {
        //     padding-top: 56%;
        // }
    ` }
    ${ media.ls`
        background-position: 50% 50%;
        background-size: cover;
        &:before {
            padding-top: 56%;
        }
    ` }
`;
export const Vinoteria = styled(ImageBg)`
    background-position: 39% center;
    background-image: url(${ VinoteriaBg });
    ${ media.ss`
        &:before {
            padding-top: 92%;
        }
    ` }  
    ${ media.ms`
        background-position: 50% 50%;
        &:before {
            padding-top: 66.7%;
        }
    ` }
`;