import styled       from "styled-components";
import { palette, size } from '../global/theme';
import { media }    from '../global/media-settings';

export const SymbolSection = styled.section`
    & > div {
        padding-top: 0;
        padding-bottom: 0;
    }
    ${ media.ss`
        margin-top: 40px;
    ` };
    ${ media.ms`` };
    ${ media.ls`
        margin-top: 145px;
    ` };
`;
export const SymbolRow = styled.div`
    ${ media.ss`
        margin-top: ${ props =>
        props.navicomEnergy
            ? '20px'
            : '12px'
        };
    ` };
    ${ media.ms`
        margin-top: ${ props =>
        props.navicomEnergy
            ? '0'
            : '12px'
        };
    ` };
    ${ media.ls`
        margin-top: 12px;
    ` };
`;
export const SymbolItem = styled.div`
    img {
        display: block;
        margin: 0 auto;
    }
    p {
        padding: 0;
        // text-align: left;
    }
    ${ media.ss`
        padding-left: ${size(`padding_ss`)};
        img {
            width: 38px;
            margin-bottom: 7px;
        }
        ` };
    ${ media.ms`
        padding-left: 0;
        margin-right: ${ props =>
                props.NavicomEnergy1
                ? '5.5%'
                :props.NavicomEnergy3
                    ? '6%'
                    :props.NavicomEnergy5
                        ? '4.5%'
                        : '0'
            };
        img {
            width: 48px;
            margin-bottom: 7px;
        }
        ` };
    ${ media.ls`
        margin-right: ${ props => 
            props.marginRight 
                ? '3%' 
                :props.NavicomEnergy1
                ? '5.5%'
                :props.NavicomEnergy3
                ? '6%'
                :props.NavicomEnergy5
                ? '4.5%'
                : '0'
        };
        img {
            width: ${ props => props.NavicomEnergy ? '66px' : '63px'};
            margin-bottom: 22px;
        }
        p {
            line-height: 1.3125rem;
        }
    ` };
`;
export const SymbolPlus = styled.div`
    ${ media.ss`
        margin-top: ${ props => props.NavicomEnergy ? '21px' : '18px'};
    ` };
    ${ media.ms`
        margin-right: ${ props =>
            props.NavicomEnergy2
            ? '7%'
            :props.NavicomEnergy4
            ? '6.5%'
            :props.NavicomEnergy6
                ? '7.25%'
                : '0'
    };
    ` };
    ${ media.ls`
        margin-right: ${ props =>
            props.marginRight
                ? '3%'
                :props.NavicomEnergy2
                ? '7%'
                :props.NavicomEnergy4
                ? '6.5%'
                :props.NavicomEnergy6
                ? '7.25%'
                : '0'
        };
        margin-top: 22px;
    ` };
`;
export const Plus = styled.div`
    position: relative;
    display: block;
    margin: 0 auto;
    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${ palette("plainText")};
    };
    &:before {
        width: 100%;
        height: 1px;
    }
    &:after {
        width: 1px;
        height: 100%;
    }
    ${ media.ss`
        width: 7px;
        height: 7px;
    ` };
    ${ media.ms`
        width: 12px;
        height: 12px;
    ` };
    ${ media.ls`
        width: 20px;
        height: 20px;
    ` };
`;