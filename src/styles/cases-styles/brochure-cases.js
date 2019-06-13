import styled       from "styled-components";
import { media }    from '../global/media-settings';

export const BrochureSection = styled.section`
    & > div {
        padding-top: 0;
        padding-bottom: 0;
    }
    ${ media.ss`
        margin-top: 40px;
    ` };
    ${ media.ms`
        margin-top: 136px;
    ` };
    ${ media.ls`
        margin-top: 136px;
    ` };
`;