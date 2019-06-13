/*
 * General styles initialization.
 * Includes:
 *   -> global styles with normalize.css
 *   ->
 */

import styled,
       { injectGlobal } from "styled-components";
import { palette,
         font,
         size }         from './theme';
import { media }        from './media-settings';
import styledNormalize  from 'styled-normalize';

/*
 * Global styles
 */
// eslint-disable-next-line
injectGlobal`
    /* Normalize.css include */
    ${ styledNormalize }

    /* Global 'body' tag styles */
    body {
        position: relative;
        font-size: 100%;
        min-width: 320px;
        background-color: #fff;
    }
    * {
        box-sizing: border-box;
        // outline: 1px dashed rgba(215,25,25,0.3);
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    hr,
    ul,
    li,
    hr,
    p,
    a,
    div,
    span,
    button {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }
    img {
        width: 100%;
        max-width: 100%; //DELETE
    }
    svg {
        vertical-align: bottom;
    }
    main {
        ${ media.ss`
            min-height: calc(100vh - 93px);      
        ` }
        ${ media.ms`
            min-height: calc(100vh - 78px);      
        ` }
    }
`;

/* Container styles */
export const Container = styled.div`
    ${ media.ss`
        margin-left: ${size(`paddingSide_ss`)};
        margin-right: ${size(`paddingSide_ss`)};
    ` }
    ${ media.ms`
        margin-left: ${size(`paddingSide_ms`)};
        margin-right: ${size(`paddingSide_ms`)};        
    ` }
    ${ media.ls`
        margin-left: ${size(`paddingSide_ls`)};
        margin-right: ${size(`paddingSide_ls`)};
    ` }
`;

export const MainCenter = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: ${ props => props.right ? 'right' : props.center ? 'center' : 'left' };
    ${ media.ss`   
        width: calc(4*16.25% + 4*24px);
        top: ${ props => props.home ? '28.5%;' : '29%;' };
        padding: 0 12px;
    ` }
    ${ media.ms`
        width: calc(8*8% + 8*24px);
        top: ${ props => props.home ? '29%;' : '30%' };
    ` }    
    ${ media.ls`    
        width: calc(18*2.3426% + 18*30px);
        top: ${ props => props.home ? '29.5%' : '35%' };
        padding: 0 15px;
    ` }
    }
    ${ media.ws`    
        width: calc(18*2.67045% + 18*30px);
        top: ${ props => props.home ? '29.5%' : '31.5%' };
        padding: 0;
    ` }
`;
/* Main heading styling */
export const MainHeading = styled.h1`
    font-family: ${font(`bold`)};
    letter-spacing: ${ props => props.home ? '0.025em;' : '0;' };
    text-align: ${ props => props.center ? 'center' : props.right ? 'right' : 'left' };
    color: ${ props => palette( props.black ? 'mainBlack' : 'white' )(props) };
    ${ media.ss`
        ${ props =>  props.home ? 'width: 17.2rem;' : null };
        font-size: ${ props =>  props.home ? '1.5rem;' :props.museum ? '2.25rem;' : '3rem;' };
        line-height: ${ props => props.home ? '1.33333333333333em' : '1em;' };
        ${ props => props.home ? 'margin-left: 8%' : null };
        ${ props => props.home ? null : 'margin-bottom: 20px;' };
    ` };
    ${ media.ms`
        ${ props =>  props.home ? 'width: 25.625rem;' : null };
        font-size: ${ props => props.home ? '2.25rem' : '3.375rem' };
        ${ props => props.home ? 'margin-left: 0' : null };
    ` };
    ${ media.ls`
        ${ props =>  props.home ? 'width: 34.625rem;' : null };
        font-size: ${ props => props.home ? '3rem;' : '4.5rem;' };
        line-height: ${ props => props.home ? '1.25em;' : '1em;' };
        ${ props => props.home ? null : 'margin-bottom: 24px;' } 
    ` };
    ${ media.ws`` };
`;

export const MainText = styled.p`
    font-size: 1.125rem;
    line-height: 1.5em;
    font-family: ${font(`reg`)};
    color: ${ props => palette(props.gray ? 'plainText' :props.black ? 'mainBlack' : 'white')(props)};
`;

export const MainArrow = styled.div`
    display: block;
    position: absolute;
    cursor: pointer;
    ${ media.ss`
        width: 14px;
        bottom: 50px;
        left: 13%;
    ` };
    ${ media.ms`
        bottom: 115px;
        left: 15%;
    ` };
    ${ media.ls`
        bottom: 80px;
        left: 6%;
    ` };
`;

/* Section headings styles */
export const SectionHeadingBlock = styled.div`
    margin: 0;
    ${ media.ss`
        margin-bottom: ${ props => ( props.hight || props.homeWorks || props.icon ) ? '20px;' :(props.fonts|| props.color ) ? '26px;'  :(props.finalize ) ? '40px;' : '16px;' };
        padding-left:  ${ props => size( props.paddingNone ? 'padding_0' : 'padding_ss' )(props) };
        padding-right: ${ props => size( props.paddingNone ? 'padding_0' : 'padding_ss' )(props) };
    ` };
    ${ media.ms`
        margin-bottom: ${ props => ( props.hight || props.homeWorks || props.fonts || props.u_21) ? '20px;' :(props.finalize ) ? '50px;' : props.marginBottom ? '12px;' : '0;' };
    ` };
    ${ media.ls`
        margin-bottom: ${ props => (props.hight || props.fonts) ? '20px;' : props.homeWorks ? '57px;' :(props.finalize ) ? '107px;' : '0;' };
        padding-left:  ${ props => size( props.paddingNone ? 'padding_0' : 'padding_ls' )(props) };
        padding-right: ${ props => size( props.paddingNone ? 'padding_0' : 'padding_ls' )(props) };
    ` };
`;

export const SectionHeading = styled.h2`
    color: ${palette(`mainBlack`)};
    ${ media.ss`
        font: 1.125rem/1.666666666666667em ${font(`bold`)};  /* 18/30 */
    ` };
    ${ media.ls`
        font-size: 1.5rem;    /* 24/40 */
    ` };
`;

/* Section content styles */
export const SectionContentBlock = styled.div`
    margin: 0;
    ${props => props.whirl ? `background: rgba(194,194,194,1);` : null };
    ${ media.ss`
        padding-left:  ${ props => size( props.paddingNone ? 'padding_0' : 'padding_ss' )(props) };
        padding-right: ${ props => size( props.paddingNone ? 'padding_0' : 'padding_ss' )(props) };
        ${props => props.whirl ? `padding-top: 34px;
                                  padding-bottom: 19px;` : null };
    ` };
    ${ media.ms`
        padding-left:  ${ props => size( (props.paddingNoneMs || props.paddingNone) ? 'padding_0' : 'padding_ss' )(props) };
        padding-right: ${ props => size( (props.paddingNoneMs || props.paddingNone) ? 'padding_0' : 'padding_ss' )(props) };
        padding-top: ${ props => props.paddingTop ? '6px;' :props.whirl ? '40px;' : '0;' };    
    ` };
    ${ media.ls`
        padding-left:  ${ props => size( (props.paddingNoneLs || props.paddingNone) ? 'padding_0' : 'padding_ls' )(props) };
        padding-right: ${ props => size( (props.paddingNoneLs || props.paddingNone) ? 'padding_0' : 'padding_ls' )(props) };
        ${props => props.whirl ? `padding-top: 132px;
                                  padding-bottom: 68px;` : null };
    ` };)
`;

/* Plain text styles */
export const PlainText = styled.p`
    margin: 0;
    color: ${palette(`plainText`)};
    ${ media.ss`
        font: 1.125rem/1.666666666666667em ${font(`reg`)};  /* 18/30 */
    ` };
    ${ media.ls`
        font-size: 1.5rem;  /* 24/40 */
    ` };
`;

/* Articles headings styles */
export const ArticleHeading = styled.h3`
    color: ${ props => palette(props.gray ? `plainText` : `mainBlack`)(props)};
    text-align: ${ props => props.left ? 'left' : props.right ? 'right' : 'center' };
    ${ media.ss`
        font: 1rem/1.375rem ${ props => font(props.reg ? `reg` : `bold`)(props)};  /* 16/22 */
        margin-bottom: 10px;
    ` };
    ${ media.ls`
        font-size: 1.125rem;  /* 18px */
        line-height: 1.875rem;  /* 30px */
        margin-bottom: 20px;
    ` };
`;

/* Articles text styles */
export const ArticleText = styled.p`
    color: ${ props => palette(props.gray ? `plainText` : `mainBlack`)(props)};
    ${ media.ss`
        font: 1rem/1.375rem ${font(`reg`)};  /* 16/22 */
    ` };
    ${ media.ls`
        font-size: 1.125rem;  /* 18px */
        line-height: 1.875rem;  /* 30px */
    ` };
`;

/* Info Heading styles */
export const InfoHeading = styled.h4`
    color: ${palette(`plainText`)};
    ${ media.ss`
        font: 0.875rem/1.25rem ${font(`reg`)};  /* 14/20 */
    ` };
    ${ media.ls`
        font: 1rem/1.875rem ${font(`reg`)};  /* 16/30 */
    ` };
`;

/* Info text styles */
export const InfoText = styled.p`
    color: ${palette(`mainBlack`)};
    ${ media.ss`
        ${ props => props.visibleLs ? 'display: none' : null };
        font: 0.875rem/1.25rem ${font(`reg`)};   /* 14/20 */
    ` };
    ${ media.ls`
        font: 1rem/1.875rem ${font(`reg`)};  /* 16/30 */
    ` };
    @media (min-width: 64.0625em) {            
        ${ props => props.visibleLs ? 'display: block' : null };
    }
`;

export const PhoneLink = styled.a`    
    color: ${palette(`mainBlack`)};
    text-decoration: none;
    ${ media.ss`
        font: 0.875rem/1.25rem ${font(`reg`)};   /* 14/20 */
    ` };
    ${ media.ls`
        font: 1rem/1.875rem ${font(`reg`)};  /* 16/30 */
    ` };
    @media (min-width: 64.0625em) {            
        ${ props => props.visibleLs ? 'display: none' : null };
    }
`;
export const CaseText = styled.p`
    color: ${palette(`plainText`)};
    text-align: ${ props => props.right ? 'right' : props.center ? 'center' : 'left' };
    ${ media.ss`
        font: ${ props => props.fsSs12 ? '0.75rem' : '0.875rem' }/1.25rem ${font(`reg`)};
        margin-bottom: ${ props => props.last ? '0' : '10px' };
    ` };
    ${ media.ms`` };
    ${ media.ls`
        font: 1.125rem/${ props => props.low ? '1.5rem' : '1.875rem'} ${font(`reg`)};
        margin-bottom: ${ props => props.last ? '0' : '20px' };
    ` };
`;

/* <br> tag implemented only on small screens */
export const TransferSs = styled.br`
    ${ media.ms`
        display: none;
    ` };
`;

/* <br> tag implemented only on medium screens */
export const TransferMs = styled.br`
    ${ media.ss`
        display: none;
    ` };
    ${ media.ms`
        display: block;
    ` };
    ${ media.ls`
        display: none;
    ` };
`;
/* <br> tag implemented only on large screens */
export const TransferLs = styled.br`
    ${ media.ss`
        display: none;
    ` };
    ${ media.ls`
        display: block;
    ` };
`;
/* <hr> tag implemented only on large screens */
export const Hr = styled.hr`
    width: 100%;
    height: 1px;
    border-top: 1px solid #dddddd;
    border-bottom: none;
    border-left: none;
    border-right: none;
    ${ media.ss`
        margin-top: ${ props =>
            props.home
                ? '45px;'
                : '78px;'
            }
        margin-bottom: 68px;
    ` };
    ${ media.ms`
        margin-bottom: ${ props =>
            props.home
                ? '68px;'
                : '46px;'
            };
    ` };
    ${ media.ls`
        margin-top: ${ props =>
            props.home
                ? '170px;'
                : '110px;'
            };
        margin-bottom: ${ props =>
            props.home
                ? '103px;'
                : '85px;'
            };
    ` };
`;
