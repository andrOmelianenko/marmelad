import styled       from "styled-components";
import { size } from '../global/theme';
import { media }    from '../global/media-settings';


export const ImgSection = styled.section`
    img {
        vertical-align: bottom;
    }
    ${ media.ss`
        margin-top: ${ props =>
              props.imagesLogo ? '39px'
            : props.whirl ? '22px'
            : props.museum2 ? '20px'
            : '55px'
        };
    ` };
    ${ media.ms`
        margin-top: ${ props =>
              props.yoOy ? '120px;'
            : props.imagesFont ? '105px'
            : props.imagesLogo ? '185px'
            : props.whirl ? '45px'
            : '75px;'
        };
    ` };
    ${ media.ls`
        margin-top: ${ props =>
              props.first ? '150px;'
            : props.vinoteria ? '75px;'
            : props.museum ? '112px;'
            : props.museum2 ? '30px;'
            : props.u21_2 ? '140px;'
            : props.yoOy ? '170px;'
            : props.imagesLogo ? '281px'
            : props.imagesFont ? '123px'
            : props.artMarket1 ? '146px;'
            : props.artMarket_2 ? '182px;'
            : props.artMarket3 ? '277px;'
            : props.whirl ? '75px'
            : '160px;'
        };
    ` };
    ${ media.ws`
        margin-top: ${ props =>
              props.first ? '151px;'
            : props.logo ? '140px;'
            : props.artMarket1 ? '160px;'
            : props.artMarket_2 ? '170px;'
            : props.artMarket3 ? '205px;'
            : props.whirl ? '45px'
            : '159px;'
        };
    ` };
`;
export const ContainerImg = styled.div`
    img {
        vertical-align: bottom;
    }
    ${ media.ss`
        padding-top: 0;
        padding-bottom: 0;
        ${ props => props.yoOyPackaging ? 'margin-top: 55px' : null };
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
                ? 'paddingSide_ms'
                : 'height_0'
            )(props)
        };
    ` }
    ${ media.ls`
        ${ props => props.navicomEnergy ? `align-items: stretch` : null };
        padding: 0;
        margin-top: ${ props => props.marginYes ? `145px;` :props.yoOyPackaging ? '52px' : '0' };
        margin-left:  ${ props =>
            size(props.paddingSide_ls
                ? 'paddingSide_ms'
                : 'height_0'
            )(props)
        };
        margin-right:  ${ props =>
            size(props.paddingSide_ls
                ? 'paddingSide_ms'
                : 'height_0'
            )(props)
        };
        
    ` }
`;
export const ImgCell = styled.div`
    text-align: center;
    position: relative;
    & > div > div {
        // ${ props => props.museum_svg ? `
        // width: 100%; 
        // height: 100%; 
        // background: rgba(232,232,232,0.5); 
        // ` : null };
    }
    & > div > img {
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
    ${ media.ws`    
        margin-bottom: ${ props => ( props.last || props.lastLs || props.marginNone ) ? '0' : '50px;' };
    ` };
`;
export const WhirlImgCell = styled(ImgCell)`
    background: rgba(248,248,248,0.5);
    
    ${ media.ss`
    padding: 22px 0;
    & img {
        width: 87.5%;
    }
    ` };
    ${ media.ms`` };
    ${ media.ls`` };
`;
export const ImgLogo = styled(ImgCell)`
    ${ media.ss`` };
    ${ media.ms`
        margin-top: -1px;
        order: ${ props =>
            props.order1 ? `1`
          : props.order2 ? `2`
          : props.order3 ? `3`
          : props.order4 ? `4`
                : '0'
            };` };
    ${ media.ls`` };
`;
export const ImgCar = styled(ImgCell)`
    div {
        height: 100%;
    }
    position: relative;
    // img {
    //     position: absolute;
    //     bottom: 0;
    // }
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`
        padding-left: ${ props =>
            props.paddingLeft
                ? `1rem;`
                : 'calc(2.25% + 16px);'
            };
        padding-right: ${ props =>
            props.paddingRight
                ? `1rem;`
                : 'calc(2.25% + 16px);'
            };
        order: ${ props =>
            props.order1
                ? `1`
                : props.order2
                ? `2`
                : props.order3
                ? `3`
                : props.order4
                ? `4`
                : '0'
            };
    ` };
`;
export const ImgCarSmall = styled(ImgCar)`
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`
        img {
            position: absolute;
            bottom: 0;
        }
    ` };
`;
export const MuseumGrid = styled.div`
    width: 100%; 
    height: 100%; 
    ${ props => (props.museum_svg || props.museum_svg_last || props.museum_logo) ? `
        background: rgba(232,232,232,0.5); 
    ` : null };
    &:before,
    &:after {
        content: '';
        display: block;
        width: 100%;
    }
    ${ media.ss`
        &:before {
            padding-top: ${ props => (props.museum_svg || props.museum_svg_last) ? `15%;` :props.museum_logo ? `13%;` : '9.5%' };
        }           
        &:after {
            padding-bottom: ${ props => props.museum_svg ? `0` :props.museum_logo ? `14%` : '12%' };
        }
    ` };
    ${ media.ms`` };
    ${ media.ls`
        ${ props => size(props.museum_logo ? `margin-left: padding_ls` : null )(props) };
        ${ props => size(props.museum_logo ? `margin-right: padding_ls` : null )(props) };        
        &:before,
        &:after {
            ${ props => props.museum_svg ? ` width: 0%;` : null };
        }
        &:before {
            padding-top: ${ props => (props.museum_svg || props.museum_svg_last) ? `0;` :props.museum_logo ? `9.5%;` : '9.5%' };
        }           
        &:after {
            padding-bottom: ${ props => (props.museum_svg || props.museum_svg_last) ? `0` :props.museum_logo ? `10%` : '9%' };
        }
    ` };
`;
export const MuseumCell = styled.div`
    ${ media.ss` 
        &:first-child {
            ${ props => props.first ? `margin-left: 1%;` : null };
        }
        &:last-child {
            ${ props => props.last ? `margin-left: 9%; padding-top: 4%;` : null };
        }
    ` };
    ${ media.ls`
        &:first-child {
            ${ props => props.first ? `margin-left: 3%;` : null };
        }
        &:last-child {
            ${ props => props.last ? `margin-left: 14.5%;` : null };
        }
    
    ` };
`;