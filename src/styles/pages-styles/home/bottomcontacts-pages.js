import styled       from "styled-components";
import { size }         from '../../global/theme';
import { media }    from '../../global/media-settings';

export const BottomContactsSection = styled.section`
    ${ media.ss`
        padding-bottom: 55px;
        margin-bottom: ${ size('footer_ss')};
    ` }
    ${ media.ms`
        margin-bottom: ${ size('footer_ms')};
    ` }
    ${ media.ls`
        padding-bottom: 60px;
        margin-bottom: ${ size('footer_ls')};
    ` }
`;
export const Item = styled.div`
    ${ media.ss`
        padding-left:  ${size('padding_ss')};
        padding-right: ${size('padding_ss')};
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    ` }
    ${ media.ms`` }
    ${ media.ls`
        padding-left:  ${ size('padding_ls') };
        padding-right: ${ size('padding_ls') };
    ` }
`;