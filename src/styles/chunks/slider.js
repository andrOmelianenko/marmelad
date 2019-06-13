import styled     from "styled-components";
import { media }  from '../global/media-settings';
import { palette,
         font,
         fontCase,
    size } from '../global/theme';

export const SliderSection = styled.section`
    & > div {
        padding-top: 0;
        padding-bottom: 0;
    }
    ${ media.ls`
        margin-bottom: 67px;
        padding-top: 90px;
    ` }
`;

export const ReviewItem = styled.div`
    transition: opacity 500ms;
    ${ media.ss`
        // & > p {
        //     height: 15.5rem;
        // }
    ` }
    ${ media.ls`
        // & > p {
        //     height: 20rem;
        // }
    ` }
`;
export const ToggleWrap = styled.div`
    display: inline-block;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    ${ media.ss`
        margin-top: 80px;
    ` }
    ${ media.ls`
        position: absolute;
        bottom: 0;
        right: 0;
        width: 32%;
        padding-bottom: 18px;
        margin-top: 0;
    ` }
`;

export const ToggleItem = styled.div`
    text-align: center;
    display: inline-block;
    font: 0.875rem/1.25rem ${font(`reg`)};  /* 14/20 */
    &:last-child {
       margin-right: 0;
    }
    ${ media.ss`
        margin-right: 14px;
    ` }
    ${ media.ls`
        font-size: 1rem;
    ` }
`;


export const ToggleLabel = styled.label`
    display: inline-block;
    color: ${ props =>
        palette(props.checked === true
            ? `white`
            : `mainBlack`
        )(props)
        };
    cursor: pointer;
    background-color: ${ props =>
        palette(props.checked
            ? `bgGray`
            : `transp`
        )(props)
    };
    transition: all .4s;
    ${ media.ss`
        padding: 0.4em 0.5em;
        width: 24px;
    ` };
    ${ media.ms`
    ` };
    ${ media.ls`
    ` };
`;

export const ReviewWrap = styled.div`
    margin: 0;  
    blockquote {
        position: relative;
        margin: 0;
        &:before {
            content: open-quote;
            color: ${palette(`lineHr`)};
            display: block;
            position: absolute;
        }
    }
    footer p {
        color: ${palette(`lightGray`)};
        margin: 0;
        &:first-of-type {
            font-family: ${font(`bold`)};
            color: ${palette(`mainBlack`)};
        }
    }
    img, cite {
        vertical-align: middle;
        display: inline-block;
    }
    img {
        width: 25%;
        max-width: 80px;
        margin-right: 18px;
        margin-bottom: 9px;
    }
    cite {
        width: calc(100% - 25% - 18px);
    }
    ${ media.ss`
        padding-left:  ${ size('padding_ss') };
        padding-right: ${ size('padding_ss') };
        blockquote {
            margin-top: 92px;
            &:before {
                font: 10.5rem/1em ${fontCase(`HelveticaNeueRegular`)};
                top: -87px;
                left: -9px;
            }
        }
        footer {
            margin-top: 31px;
        }

    ` }
    ${ media.ms`
        blockquote {
            margin-top: 80px;
        }
        img {
            margin-right: 38px;;
        }
    ` }
    ${ media.ls`
        padding-left:  ${ size('padding_ls') };
        padding-right: ${ size('padding_ls') };
        blockquote {
            margin-top: 0;
            &:before {
                font-size: 11.25rem;
                top: -106px;
                left: -12px;
            }
        }
        footer {
            margin-top: 60px;
            padding-left: 0;
            p {
                padding: 0;
            }
        }
    ` }
`;
