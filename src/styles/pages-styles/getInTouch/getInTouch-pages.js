import styled       from "styled-components";
import { size }    from '../../global/theme';
import { media }    from '../../global/media-settings';

export const GetInTouchSection = styled.div`
    ${ media.ss`
        margin-top: ${ size('header_ss')};
        padding-top: 45px;
        padding-bottom: 140px;
    ` }
    ${ media.ms`
    ` }
    ${ media.ls`
        margin-top: ${ size('header_ls')};
        padding-top: 78px;
        padding-bottom: 100px;
    ` }
`;
export const GetInTouchButtonBlock = styled.div`
    ${ media.ss`
        margin-bottom: 16px;
    ` }
    ${ media.ms`
        margin-bottom: 40px;
        ` }
    ${ media.ls`
        margin-bottom: 50px;
    ` }
`;
export const GetInTouchButton = styled.div`
    ${ media.ss`
        padding-left:  ${size('padding_ss')};
        padding-right: ${size('padding_ss')};
    ` }
    ${ media.ms`` }
    ${ media.ls`
        padding-left:  ${size('padding_ls')};
        padding-right: ${size('padding_ls')};
    ` }
`;