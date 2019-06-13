import styled          from "styled-components";
import { Link }        from 'react-router-dom';
import { media }       from '../../global/media-settings';
import { palette,
         font}         from '../../global/theme';

export const WorkBlock = styled.li`
    position: relative;
    overflow: hidden;
    background-color: ${ props =>
        palette(props.closingBlock
            ? `bgBlack`
            : null
        )(props)
    };
    transition-property: opacity, box-shadow;
    transition-duration: 1s, 1s;
    &::before {
        content: '';
        display: block;
        padding-top: 100%;
    }
    ${ props => props.show
        ? 'opacity: 1'
        : 'opacity: 0'
    };
    &:hover {
        z-index: 100;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, .4);
        & > div:first-child {
            ${ props => props.full
                ? `transform: scale(1.04);
                   filter: grayscale(1);`
                : null
            };
        }
        & > div:last-child {
            ${ props => props.full
                ? `opacity: 1;`
                : null
            };
        }
    }
    ${ media.ss`
        width: 100%;
        ${ props => props.ws_show
            ? 'display: none'
            : 'display: inline-block'
        };
    ` };
    ${ media.ms`
        width: 50%;
    ` };
    ${ media.ls`
        width: 33.33%;
    ` };
    ${ media.ws`
        // flex-basis: 25%;
        width:  25%;
        ${ props => props.ws_show
            ? 'display: inline-block'
            : null
        };
    ` };
`;

export const CaseLink = styled(Link)`
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const AddSpan = styled.span`
    display: block;
    color: ${palette(`white`)};
    font: 2.8125rem/1.875rem ${font(`reg`)};
    ${ media.ss`
        margin: 0 0 3px;
    ` };
    ${ media.ls`
        margin: 0 0 14px;
    ` };
`;

export const AnimBg = styled.div`
    position: absolute;
    z-index: 0;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: url(${ props => props.logo }),
                url(${ props => props.bgImg });
    background-position: 50%, 50%;
    background-repeat: no-repeat;
    background-size: 34%, cover;
    transition-property: filter, transform;
    transition-duration: 1s;
    transform: scale(1.001);
`;

export const AnimLayer = styled.div`
    position: absolute;
    opacity: 0;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, .75);
    transition: opacity .8s;
    ${ media.ss`
        padding: 28px 24px 24px;
    ` };
    ${ media.ms`
        padding: 20px 34px;
    ` };
    ${ media.ls`
        padding: 65px;
    ` };
`;

export const TempLayer = styled.div`
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background-color: rgba(102, 102, 102, .40);
    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #262626;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        p {
            position: absolute;
            cursor: default;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: ${ palette(`white`) };
            font: 1rem/1rem ${ font(`reg`) };
        }
    }
`;

export const ClosingLayer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    ${ media.ss`
        padding: 28px 24px 24px;
    ` };
    ${ media.ms`
        padding: 20px 34px;
    ` };
    ${ media.ls`
        padding: 55px 65px 65px;
    ` };
`;

export const WorkHeading = styled.h3`
    color: ${palette(`mainBlack`)};  /* #333333 */
    margin: 0 0 10px;
    ${ media.ss`
        font: 1.125rem/1.666666666666667rem ${font(`reg`)};
    ` };
    ${ media.ls`
        font-size: 1.5rem;
    ` };
`;

export const WorkSummary = styled.p`
    line-height: 1.5rem;
    font-family: ${font(`reg`)};
    color: ${ props =>
        palette(props.add
            ? `white`
            : `plainText`
        )(props)
    };
    margin: 0;
    ${ media.ss`
        font-size: ${ props =>
            props.view
                ? `1rem;`
                : '1.125rem;'
            };
    ` };
    ${ media.ls`
        font-size: 1.125rem;
    ` };
`;

export const SpanButton = styled.span`
    z-index: 1;
    display: inline-block;
    color: ${palette(`white`)};
    margin: 0;
    position: absolute;
    font-family: ${font(`bold`)};
    background-color: ${palette(`lightGray`)};
    ${ media.ss`
        font-size: 0.875rem;
        line-height: 1.875rem;
        padding: 0 13px;
        bottom: 24px;
    ` };
    ${ media.ms`
        bottom: 26px;
    ` };
    ${ media.ls`
        font-size: 1rem;
        bottom: 52px;
    ` };
`;
