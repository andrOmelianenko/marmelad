import styled       from "styled-components";
import { media }    from '../global/media-settings';

import { ImgCell }  from './image-cases';

export const MockUpSection = styled.section`    
    img {
        vertical-align: bottom;
    }
    ${ media.ss`
        margin-top: 22px;
    ` };
    ${ media.ms`
        margin-top: 75px;
    ` };
    ${ media.ls`
        margin-top: 60px;
    ` };
    ${ media.ws`
        margin-top: 175px;
    ` };
`;
export const MockUpImgCell = styled(ImgCell)`
    & > div {
        height: 100%;
    }
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`` };
`;
export const MockUpImgForGrid = styled.div`
    background: #f8f8f8;
    height: 100%;
    &:before,
    &:after {
        content: '';
        display: block;
        width: 100%;
    }
    ${ media.ss`
        &:before {
            padding-top: ${ props => props.twoMockUp ? '14.25%' : '18%' };
        }
        &:after {
            padding-top: ${ props => props.twoMockUp ? '11%' : '15%' };
        }
        & > div:nth-child(2):last-child {
            margin-top: 14px;
        }
    ` };
    ${ media.ms`` };
    ${ media.ls`
        margin-right: ${ props => props.twoMockUp ? '15px' : '0' };
        margin-left: ${ props => props.twoMockUp ? '0' : '15px' };
        padding-left: ${ props => props.twoMockUp ? '24px' : '0' };
        ${ props => props.twoMockUp ? null : 'justify-content: flex-end' };
        &:before {
            padding-top: ${ props => props.twoMockUp ? '20%' : '21%' };
        }
        &:after {
            padding-top: ${ props => props.twoMockUp ? '21%' : '19.65%' };
        }
        & > div:nth-child(2):last-child {
            margin-top: 24px;
        }
    ` };
`;