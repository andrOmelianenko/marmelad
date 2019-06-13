import styled       from "styled-components";
import { size }    from '../../global/theme';
import { media }    from '../../global/media-settings';

export const WhatSection = styled.section`
    ${ media.ss`
        margin-bottom: 40px;
    ` }
    ${ media.ms`` }
    ${ media.ls`
        margin-bottom: 125px;
    ` }
`;
export const Item = styled.div`
    ${ media.ss`
        margin-top: 16px;
        padding: 0 ${size('padding_ss')};
        &:first-child {
            margin-top: 0;        
        }
    ` }
    ${ media.ms`
        &:nth-child(1),
        &:nth-child(2) {
            margin-top: 0;        
        }
    ` }
    ${ media.ls`
        padding: 0 ${size('padding_ls')};
        &:nth-child(1),
        &:nth-child(2) {
            margin-top: 57px;        
        }
    ` }
`;