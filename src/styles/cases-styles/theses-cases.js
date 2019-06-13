import styled       from "styled-components";
import { size }     from '../global/theme';
import { media }    from '../global/media-settings';

export const ThesesSection = styled.section`
    & > div {
        padding-top: 0;
        padding-bottom: 0;
    }
    ${ media.ss`
        margin-top: 40px;
    ` };
    ${ media.ms`` };
    ${ media.ls`
        margin-top: 125px;
    ` };
`;
export const ThesesRow = styled.div`
    ${ media.ss`
        margin-top: 40px;
    ` }
    ${ media.ms`
        margin-top: 30px;
    ` }
    ${ media.ls`
        margin-top: 70px;
    ` }
`;
export const ThesesItem = styled.div`
    ${ media.ss`
        margin-bottom: 22px;
        &:nth-child(2n+1) {
            padding-right: ${size('padding_ss')};
        };
        &:nth-child(2n) {
            padding-left: ${size('padding_ss')};
        };
        &:nth-last-child(1),
        &:nth-last-child(2) {
            margin-bottom: 0;
        };
    ` }
    ${ media.ms`
        margin: 0;
        &:nth-child(2n+1),
        &:nth-child(2n) {
            padding: 0;
        };
        &:nth-child(3n) {
            margin-right: 0;
        };
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
            margin-bottom: 30px;
        };
    ` }
    ${ media.ls`
        margin-right: 5.5%;
        &:nth-child(3n) {
            margin-right: 0;
        };
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
            margin-bottom: 22px;
        };
    ` }
`;
export const ThesesCircle = styled.div`
    position: relative;
    border: 1px solid #e4e4e4;
    border-radius: 50%;
    p {
        padding: 0;
        position: absolute;
        width: 100%;        
        display: block;
        top: 50%;
        transform: translateY(-50%);
    }
    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }
    ${ media.ss`
        p {
            padding: 0 12px;;
        }        
    ` }
    ${ media.ms`
        width: 95%;
        p {
            padding: 0 12px;;
        }        
    ` }
    ${ media.ls`
        width: calc(100% + 9px);
    ` }
`;