import styled       from "styled-components";
import { media }    from '../global/media-settings';

export const BlanksSection = styled.section`
    ${ media.ss`
        margin-top: 55px;
    ` };
    ${ media.ms`
        margin-top: 75px;
    ` };
    ${ media.ls`
        margin-top: 120px;
        img {
           max-width: 590px;
        }
    ` };
`;
export const BlanksRow = styled.div`
    height: 100%;
    ${ media.ss`
        margin-top: 20px;
    ` };
    ${ media.ms`` };
    ${ media.ls`
        margin-top: 0;
        padding: 70px 0 90px;
        justify-content: flex-end;
        align-content: space-around;
        & > div {
            text-align: right;
            &:last-child > img {
                max-width: 355px;                
            }
        }
    ` };
`;