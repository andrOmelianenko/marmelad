import styled       from "styled-components";
import { size }    from '../../global/theme';
import { media }    from '../../global/media-settings';

export const PrinciplesSection = styled.section`
    ${ media.ss`` }
    ${ media.ms`` }
    ${ media.ls`` }
`;
export const Item = styled.div`
    ${ media.ss`
        margin-top: 16px;
        padding: 0 ${size('padding_ss')};
        &:first-child {
            margin-top: 0;        
        }
    ` }
    ${ media.ms`
        &:nth-child(1),
        &:nth-child(2) {
            margin-top: 0;        
        }
    ` }
    ${ media.ls`
        margin-top: 57px;
        padding: 0 ${size('padding_ls')};
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
            margin-top: 57px;        
        }
    ` }
`;