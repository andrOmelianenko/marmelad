import styled       from "styled-components";
import { media }    from '../../global/media-settings';

export const WorksSection = styled.section`
    & > div {
        padding-top: 0;
        padding-bottom: 0;
    }
     ${ media.ss`
        margin-bottom: 88px;
    ` }
    ${ media.ls`
        position: relative;
        margin-bottom: 144px;
    ` }
`;