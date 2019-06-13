import styled     from "styled-components";
import { size } from '../global/theme';

import { media }  from '../global/media-settings';

export const VideoSection = styled.section`
    ${ media.ss`
        margin-top: 22px;
    ` }  
    ${ media.ms`
        margin-top: 45px;
    ` }
    ${ media.ls`
        margin-top: 75px;
    ` }
`;
export const VideoImg = styled.div`
    position: absolute;
    top: 0; 
    left: 0;
`;
export const VideoCell = styled.div`
    position: relative;
    video {
        width: 100%;
        vertical-align: bottom;
    }    
    ${ media.ss`
        margin-left: ${ props => size( props.marginSide ? 'paddingSide_ss' : 'padding_0' )(props) };
        margin-right: ${ props => size( props.marginSide ? 'paddingSide_ss' : 'padding_0' )(props) };
        margin-bottom: ${ props => props.last ? '0' :props.vino_strelka ? '15px' :props.yoOyPackaging ? '67px' : '20px;' };
        padding-right: ${ props => size( props.paddingSsMs ? 'padding_ss' : 'padding_0' )(props) };
        padding-left:  ${ props => size( props.paddingSsMs ? 'padding_ss' : 'padding_0' )(props) };
        img {
            ${ props => (props.vinoteria1 || props.vinoteria2) ? 'width:58%' : null }; 
        }
    ` };
    ${ media.ms`
        margin-left: ${ props => size( props.marginSide ? 'paddingSide_ms' : 'padding_0' )(props) };
        margin-right: ${ props => size( props.marginSide ? 'paddingSide_ms' : 'padding_0' )(props) };
        padding-right: ${ props => size( (props.paddingSsMs || props.paddingMs) ? 'padding_ss' : 'padding_0' )(props) };
        padding-left:  ${ props => size( (props.paddingSsMs || props.paddingMs) ? 'padding_ss' : 'padding_0' )(props) }; 
        ${ props => props.vino_strelka ? 'margin: 0 5% 2px' : null }; 
        img {
            ${ props => (props.vinoteria1 || props.vinoteria2) ? 'width:100%' : null }; 
        }
        p {
            text-align: left;
            padding-left: ${ size('padding_ss') }; 
        }
    ` };
    ${ media.ls`
        width: 58%;
        margin-left: 0;
        margin-right: 0;
        margin-top: ${ props => props.marginTopLs ? `65px` : '0px;' };
        margin-bottom: ${ props => ( props.last || props.lastLs || props.marginNone ) ? `0` :props.yoOyPackaging ? `180px` :props.yoOyImg ? `60px` : '30px;' };
        padding-left:  ${ props => size(( props.paddingMs || props.paddingLs || props.paddingLeftLs ) ? `padding_ls` : 'padding_0' )(props) };
        padding-right: ${ props => size(( props.paddingMs || props.paddingLs || props.paddingRightLs ) ? `padding_ls` : 'padding_0' )(props) };
        order: ${ props => props.order1 ? '1' : props.order2 ? '2' : '0;' };
        ${ props => props.vino_strelka ? 'margin: 0 5.5%' : null }; 
        & > div {
            height: 100%;
        }
    ` };
`;