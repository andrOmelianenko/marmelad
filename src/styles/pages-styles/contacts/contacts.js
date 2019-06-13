import styled          from "styled-components";
import { size }        from '../../global/theme';
import { media }       from '../../global/media-settings';

export const FirstSection = styled.section`
    ${ media.ss`
        margin: 0 0 40px;
    ` }
    ${ media.ms`
    ` }
    ${ media.ls`
        margin: 0 0 95px;
    ` }
    ${ media.ws`
        margin: 0 0 107px;
    ` }
`;

export const MapSection = styled.section`
    & > div {
        width: 100%;
    }
    .gm-style > div:nth-child(2) {
        display: none;
    }
    .gmnoprint {
        &.gm-style-cc {
            display: none;
        }
        .gm-style-cc {
            display: none;
        }
    }    
    ${ media.ss`
        height: 425px;
        margin-bottom: 55px;
    ` }
    ${ media.ms`
        height: 460px;
        margin-bottom: 70px;
    ` }
    ${ media.ls`
        height: 490px;
        padding: 0 1rem;
        margin-bottom: 95px;        
    ` }
    ${ media.ws`
        margin-bottom: 94px;
    ` }
`;

export const InfoSection = styled.section`
    letter-spacing: 0;

    ${ media.ss`
        h2 {
            margin-bottom: 16px;
        }
    ` }
    ${ media.ms`
    ` }
    ${ media.ls`
        h2 {
            margin-bottom: 0;
        }
    ` }
`;

export const InfoItem = styled.div`
    ${ media.ss`
        margin-bottom: 20px;
        padding-left:  ${ size('padding_ss')};
        padding-right: ${ size('padding_ss')};
        &:last-of-type {
            margin-bottom: 0;
        }
        & > * {
            display: block;
        }
    ` }
    ${ media.ms`
        &:nth-last-of-type(2) {
            margin-bottom: 0;
        }
        &:nth-child(2n) {
            margin-left: -12px;
        }
    ` }
    ${ media.ls`
        margin-bottom: 42px;
        padding-left:  ${ size('padding_ls')};
        padding-right: ${ size('padding_ls')};
        &:nth-child(2n) {
            margin-left: 0;
        }
    ` }
`;

export const FormSection = styled.section`

    ${ media.ss`
        margin: 68px 0 79px;
        h2 {
            margin-bottom: 20px;
        }
    ` }
    ${ media.ls`
        margin: 100px 0 110px;
        h2 {
            margin-bottom: 0;
            margin-top: -5px;
        }
    ` }
`;

// export const Form = styled.div`
//     ${ media.ls`
//         padding: 0 1rem;
//     ` }
// `;
