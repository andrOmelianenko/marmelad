import styled          from "styled-components";
import { media }       from '../../global/media-settings';

export const FirstSection = styled.section`
    ${ media.ss`
        margin: 0 0 40px;
    ` }
    ${ media.ms`
    ` }
    ${ media.ls`
        margin: 0 0 105px;
    ` }
    ${ media.ws`
        margin: 0 0 107px;
    ` }
`;

export const ImgSection = styled.section`
    img {
        vertical-align: bottom;
    }
    ${ media.ss`
        margin-bottom: 60px;
    ` }
    ${ media.ms`
        margin-bottom: 50px;
    ` }
    ${ media.ls`
        margin-bottom: 100px;
         img {
            width: calc(100% - 2rem);
            margin: 0 1rem;
        }
    ` }
    ${ media.ws`
        margin-bottom: 94px;
    ` }
`;

export const WhatSection = styled.section`
    letter-spacing: 0;
    ${ media.ss`
        margin-bottom: 46px;
    ` }
    ${ media.ms`
        margin-bottom: 60px;
    ` }
    ${ media.ls`
        margin: 0 0 123px;
        h2 {
            margin-bottom: 55px;
        }
        div {
            margin-top: 0;
        }
        h3 {
            margin-bottom: 20px;
        }
        
        p {
            padding: 0 1.5rem 0 1rem
        }
    ` }
`;

export const PrinciplesSection = styled.section`
    letter-spacing: 0;
    ${ media.ss`
    ` }
    ${ media.ms`
    ` }
    ${ media.ls`
        h2 {
            margin-bottom: 55px;
        }
        div {
            margin-top: 0;
        }
        & > div:nth-of-type(1), 
        & > div:nth-of-type(2), 
        & > div:nth-of-type(3) {
            margin-bottom: 3.25em;
            }
        h3 {
            margin-bottom: 20px;
        }
        p {
            padding: 0 1.5rem 0 1rem
        }
    ` }
`;
