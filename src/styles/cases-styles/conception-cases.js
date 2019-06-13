import styled       from "styled-components";
import { media }    from '../global/media-settings';

export const ConceptionSection = styled.section`
    img {
        vertical-align: bottom;    
    }
    ${ media.ss`
        margin-top: 60px;
    ` };
    ${ media.ms`` };
    ${ media.ls`
        margin-top: 163px;
    ` };
    ${ media.ws`
        margin-top: 175px;
    ` };
`;
export const ConceptionRow = styled.div`
    ${ media.ss`
        margin-top: 18px;
    ` };
    ${ media.ms`
        margin-top: 65px;
    ` };
    ${ media.ls`
        margin-top: 22px;
    ` };
`;
export const ConceptionItem = styled.div`
    img {
        display: inline-block;
    }
    text-align: ${ props =>
        props.alignCenter
            ? `center`
            : props.alignRight
            ? `right`
            : 'left'
    };
    ${ media.ss`    
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
            margin-bottom: 46px;
        }
        &:nth-child(1) {
            img {
                width: 72%;
            }
        }
        &:nth-child(2) {
            img {
                width: 70%;
            }
        }
        &:nth-child(3) {
            img {
                width: 70%;
            }
        }
        &:nth-child(4) {
            img {
                width: 62%;
                margin-left: 6px;
            }
        }
        &:nth-child(5) {
            img {
                width: 74%;
            }
        }
        &:nth-child(6) {
            img {
                width: 70%;
            }
        }
        ` };
    ${ media.ms`   
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
            margin-bottom: 80px;
        }
        &:nth-child(1) {
            img {
                width: 68%;
            }
        }
        &:nth-child(3) {
            img {
                width: 66%;
            }
        }
        &:nth-child(4) {
            img {
                width: 59%;
                margin-left: 12px;
            }
        }
        &:nth-child(5) {
            img {
                width: 71%;
            }
        }
        &:nth-child(6) {
            img {
                width: 65%;
            }
        }
    ` };
    ${ media.ls`
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
            margin-bottom: 108px;
        }
        &:nth-child(1) {
            img {
                width: 164px;
            }
        }
        &:nth-child(2) {
            img {
                width: 166px;
            }
        }
        &:nth-child(3) {
            img {
                width: 160px;
            }
        }
        &:nth-child(4) {
            img {
                width: 142px;
                margin-left: 14px;
            }
        }
        &:nth-child(5) {
            img {
                width: 169px;
            }
        }
        &:nth-child(6) {
            img {
                width: 157px;
            }
        }
    ` };
`;