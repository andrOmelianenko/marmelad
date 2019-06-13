import styled       from "styled-components";
import { size }    from '../global/theme';
import { media }    from '../global/media-settings';

export const EvolutionSection = styled.section`
    img {
        vertical-align: bottom;
    }
    ${ media.ss`
        margin-top: 40px;
    ` };
    ${ media.ms`` };
    ${ media.ls`
        margin-top: 135px;
        h2 + div {
            padding-top: 0;
        }
    ` };
`;
export const EvolutionRow = styled.div`
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`` };
`;
export const EvolutionItem = styled.div`
    ${ media.ss`
        margin-bottom: 20px;
        padding-left: ${size('padding_ss')};
        padding-right: ${size('padding_ss')};
        &:nth-last-child(1),
        &:nth-last-child(2),
        &:nth-last-child(3),
        &:nth-last-child(4) {
            margin-bottom: 0;
            img {
                width: 52px;
                height: 40px;
            }
        }
        img {
            width: 52px;
            height: 52px;
        }       
    ` };
    ${ media.ms`
        &:nth-last-child(1),
        &:nth-last-child(2),
        &:nth-last-child(3),
        &:nth-last-child(4) {
            img {
                width: 66px;
                height: 53px;
            }
        }
        img {
            width: 66px;
            height: 66px;
        }       ` };
    ${ media.ls`
        padding: 0 16px;
        margin-bottom: 60px;
        &:nth-child(4n+1) {
            padding-left: 0;
        }
        &:nth-last-child(1),
        &:nth-last-child(2),
        &:nth-last-child(3),
        &:nth-last-child(4) {
            margin-bottom: 0;
            img {
                width: 118px;
                height: 93px;
            }
        }
        img {
            width: 119px;
            height: 119px;
        }        
    ` };
`;