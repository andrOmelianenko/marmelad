import styled       from "styled-components";
import { size }    from '../../global/theme';
import { media }    from '../../global/media-settings';

export const WelcomeSection = styled.section`
    ${ media.ss`
        margin-top: ${ size('header_ss')};
        margin-bottom: 40px;
        padding-top: 42px;
    ` }
    ${ media.ms`` }
    ${ media.ls`
        margin-top: ${ size('header_ls')};
        margin-bottom: 95px;
        padding-top: 135px;
    ` }
`;