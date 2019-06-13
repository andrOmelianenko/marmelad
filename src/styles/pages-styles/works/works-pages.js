import styled       from "styled-components";
import { size }    from '../../global/theme';
import { media }    from '../../global/media-settings';

export const WorksSection = styled.section`
    & > div {
        padding-top: 0;
        padding-bottom: 0;
    }
     ${ media.ss`
        margin-top: ${ size('header_ss')};
        margin-bottom: 108px;
        padding-top: 45px;
    ` }
     ${ media.ms`
        margin-bottom: 75px;
    ` }
    ${ media.ls`
        position: relative;
        margin-top: ${ size('header_ls')};
        padding-top: 135px;
        margin-bottom: 160px;
    ` }
`;