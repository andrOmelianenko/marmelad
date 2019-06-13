import styled       from "styled-components";
import { media }    from '../../global/media-settings';

export const MapSection = styled.section`
    & > div,
    & > div > div,
    & > div > div > div {
        width: 100%;
        height: 100%;
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
        padding: 0 20px
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
    ${ media.ws`` }
`;