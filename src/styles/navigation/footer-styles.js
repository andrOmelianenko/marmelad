import styled          from "styled-components";
import { palette,
         font}         from '../global/theme';
import { media }       from '../global/media-settings';

export const Footer = styled.footer`
    position: absolute;
    z-index: 1000;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid ${palette(`lineHr`)};
`;

export const FooContainer = styled.div`
    ${ media.ss`
        padding: 26px 20px;
    ` }
    ${ media.ms`
        padding: 26px 24px;
    ` }
    ${ media.ls`
        padding: 22px 16px;
    ` }
`;

/* Footer text styles */
export const FooterText = styled.p`
    margin: 0;
    color: ${palette(`lightGray`)};
    ${ media.ss`
        font: 0.875rem/1.25rem ${font(`reg`)};
    ` };
    ${ media.ms`
        &:last-child {
            text-align: right;
        }
    ` };
    ${ media.ls`
        font: 1rem/1.875rem ${font(`reg`)};
    ` };
`;
