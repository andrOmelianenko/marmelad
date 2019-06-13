import styled       from "styled-components";
import { SectionHeadingBlock,
         SectionContentBlock }    from '../global/GENERAL';
import { palette,
         font,
         size } from '../global/theme';
import { media }    from '../global/media-settings';

//  GLOBAL  //


export const CaseSectionHeadingBlock = styled(SectionHeadingBlock)`
    ${ media.ss`` }
    ${ media.ms`` }
    ${ media.ls`` }
`;
export const CaseSectionContentBlock = styled(SectionContentBlock)`
    ${ media.ss`` }
    ${ media.ms`` }
    ${ media.ls`` }
`;
export const ContainerImg = styled.div`    
    ${ media.ss`
        padding-top:0;
        padding-bottom: 0;
        padding-left: ${ props =>
    size(props.paddingSide
        ? `paddingSide_ss`
        : 'height_0'
    )(props)
    };
        padding-right: ${ props =>
    size(props.paddingSide
        ? `paddingSide_ss`
        : 'height_0'
    )(props)
    };
        margin-top: ${ props =>
    props.marginYes
        ? `55px;`
        : '0'
    };
    ` }
    ${ media.ms`
        padding-left: ${ props =>
    size( ( props.paddingSide || props.paddingSide_ms)
        ? `paddingSide_ms`
        : 'height_0'
    )(props)
    };
        padding-right: ${ props =>
    size(( props.paddingSide || props.paddingSide_ms)
        ? `paddingSide_ms`
        : 'height_0'
    )(props)
    };
    ` }
    ${ media.ls`
        padding: 0;
        margin-top: ${ props =>
    props.marginYes
        ? `145px;`
        : '0'
    };
    ` }
`;
export const ImgSection = styled.section`
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`
        padding-top: ${ props =>
            props.first
                ? `151px`
                : '0;'
        };
    ` };
`;

export const CaseText = styled.p`
    color: ${palette(`plainText`)};
    text-align: ${ props => props.right ? 'right' : props.center ? 'center' : 'left' };
    ${ media.ss`
        font: 0.875rem/1.25rem ${font(`reg`)};
        margin-bottom: ${ props => props.last ? '0' : '10px' };
    ` };
    ${ media.ms`` };
    ${ media.ls`
        font: 1.125rem/1.875rem ${font(`reg`)};
        margin-bottom: ${ props => props.last ? '0' : '20px' };
    ` };
`;


export const LinkSection = styled.section`
    margin: 0;
    ${ media.ss`
        margin-left:  ${size('paddingSide_ss')};
        margin-right: ${size('paddingSide_ss')};
        margin-top: 90px;
        & > div {
            padding-left:  ${size('padding_ss')};
            padding-right: ${size('padding_ss')};
        }
    ` }
    ${ media.ms`
        margin-left:  ${size('paddingSide_ms')};
        margin-right: ${size('paddingSide_ms')};
        margin-top: 81px;
    ` }
    ${ media.ls`
        margin-left:  ${size('paddingSide_ls')};
        margin-right: ${size('paddingSide_ls')};
        margin-top: 166px;
        & > div {
            padding-left:  ${size('padding_ls')};
            padding-right: ${size('padding_ls')};
        }
    ` }
    ${ media.ws`
        margin-top: 228px;
    ` }
`;

export const NextLink = styled.div`
    ${ media.ss`
        margin-bottom: 60px;
        text-align: center;
    ` }
    ${ media.ms`
        order: 2;
        margin-bottom: 0;
        text-align: right;
    ` }
    ${ media.ls`` }
    ${ media.ws`` }
`;