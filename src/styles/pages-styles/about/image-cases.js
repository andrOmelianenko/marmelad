import styled       from "styled-components";
import { size } from '../../global/theme';
import { media }    from '../../global/media-settings';

export const ContainerImg = styled.div`
    img {
        vertical-align: bottom;
    }
    ${ media.ss`
        padding-top: 0;
        padding-bottom: 0;
        margin-left: ${ props =>
            size(props.paddingSide
                ? `paddingSide_ss`
                : 'height_0'
            )(props)
        };
        margin-right: ${ props =>
            size(props.paddingSide
                ? `paddingSide_ss`
                : 'height_0'
            )(props)
        };
    ` }
    ${ media.ms`
        margin-left: ${ props =>
            size( ( props.paddingSide || props.paddingSide_ms)
                ? `paddingSide_ms`
                : 'height_0'
            )(props)
        };
        margin-right: ${ props =>
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
        margin-left: 0;
        margin-right: 0;
    ` }
`;
export const ImgSection = styled.section`
    ${ media.ss`
        margin-bottom: 40px;
    ` };
    ${ media.ms`
        margin-bottom: 45px;
    ` };
    ${ media.ls`
        margin-bottom: 100px;
    ` };
    ${ media.ws`` };
`;
export const ImgCell = styled.div`
    ${ media.ss`
        margin-bottom: ${ props =>
            props.last
                ? '0'
                : '20px;'
        };
        padding-right: ${ props =>
            size( props.paddingSsMs
                ? 'padding_ss'
                : 'padding_0'
            )(props)
        };
        padding-left: ${ props =>
            size( props.paddingSsMs
                ? 'padding_ss'
                : 'padding_0'
            )(props)
        };
    ` };
    ${ media.ms`
        padding-right: ${ props =>
            size( (props.paddingSsMs || props.paddingMs)
                ? 'padding_ss'
                : 'padding_0'
            )(props)
        };
        padding-left: ${ props =>
            size( (props.paddingSsMs || props.paddingMs)
                ? 'padding_ss'
                : 'padding_0'
            )(props)
        };
        ` };
    ${ media.ls`
        margin-bottom: ${ props =>
            ( props.last || props.lastLs || props.marginNone )
                ? `0`
                : '30px;'
        };
        padding-left: ${ props =>
            size(( props.paddingLeftLs || props.paddingMs || props.paddingLs )
                ? `padding_ls`
                : 'padding_0'
            )(props)
        };
        padding-right: ${ props =>
            size(( props.paddingRightLs || props.paddingMs || props.paddingLs )
                ? `padding_ls`
                : 'padding_0'
            )(props)
        };
        & > div {
            height: 100%;
        }
    ` };
    ${ media.ws`    
        margin-bottom: ${ props =>
            ( props.last || props.lastLs || props.marginNone )
                ? '0'
                : '35px;'
        };
    ` };
`;