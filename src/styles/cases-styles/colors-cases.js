import styled     from "styled-components";
import { palette,
         font }   from '../global/theme';
import { media }  from '../global/media-settings';

export const ColorsSectionBody = styled.section`
    ${ media.ss`
        margin-top: 55px;
    ` }
    ${ media.ms`
        margin-top: 75px;
    ` }
    ${ media.ls`
        margin-top: ${ props =>
            props.artMarket
                ? '170px'
                : '135px;'
        }
    ` }
`;
export const ColorsRow = styled.div`
    ${ media.ss`
        margin-bottom: ${ props =>
            props.last
                ? '0'
                : props.artMarket
                ? '50px'
                : '30px;'
        };
    ` }
    ${ media.ms`
        margin-bottom: ${ props =>
            props.last
                ? '0'
                : props.artMarket
                ? '50px'
                : '32px'
        };
    ` }
    ${ media.ls`
        margin-bottom: ${ props =>
            props.last
                ? '0'
                : props.artMarket
                ? '140px'
                : '80px'
        };
    ` }
    ${ media.ws`
        margin-bottom: ${ props =>
            props.last
                ? '0'
                : props.artMarket
                ? '120px'
                : '80px'
        };
    ` }
`;
export const ColorItem = styled.div`
    text-align: ${ props => props.alignCenter ? 'center' : props.alignRight ? 'right' : 'left' };
`;
export const ColorContainer = styled.div`
    display: inline-block;
    text-align: left;
    ${ media.ss`
        max-width: 54px;
    ` }
    ${ media.ms`
        max-width: 73px;
    ` }
    ${ media.ls`
        max-width: 80px;
    ` }
`;
export const ColorCircle = styled.div`
    border-radius: 50%;
    position: relative;
    border-width: 1px;
    border-style: solid;
    border-color: ${ props =>
          props.color_000000 ? '#000000'
        : props.color_2d2c2b ? '#2d2c2b'
        : props.color_181511 ? '#181511'
        : props.color_333333 ? '#333333'
        : props.color_ffffff ? '#c6c6c6'
        : props.color_cceffc ? '#cceffc'
        : props.color_fbd3cf ? '#fbd3cf'
        : props.color_aeded9 ? '#aeded9'
        : props.color_d71920 ? '#d71920'
        : props.color_a30a42 ? '#a30a42'
        : props.color_f6d258 ? '#f6d258'
        : props.color_314060 ? '#314060'
        : props.color_0067b2 ? '#0067b2'
        : props.color_999999 ? '#999999'
        : props.color_5c7046 ? '#5c7046'
        : props.color_0b4a89 ? '#0b4a89'
        : props.color_d0ae94 ? '#d0ae94'
        : props.color_ee542c ? '#ee542c'
        : props.color_5486a0 ? '#5486a0'
        : props.color_1744fe ? '#1744fe'
        : props.color_bed8fd ? '#bed8fd'
        : props.color_1d1e22 ? '#1d1e22'
        : props.color_6f7b89 ? '#6f7b89'
        : props.color_efefef ? '#efefef'
        : props.color_41d15e ? '#41d15e'
        : props.color_679079 ? '#679079'
        : props.color_c92a39 ? '#c92a39'
        : props.color_a1cdeb ? '#a1cdeb'
        : props.color_2f9e31 ? '#2f9e31'
        : props.color_fde100 ? '#fde100'
        : props.color_e9e9ad ? '#e9e9ad'
        : 'transparent'
    };
    background-color: ${ props =>
          props.color_000000 ? '#000000'
        : props.color_2d2c2b ? '#2d2c2b'
        : props.color_181511 ? '#181511'
        : props.color_333333 ? '#333333'
        : props.color_ffffff ? '#ffffff'
        : props.color_cceffc ? '#cceffc'
        : props.color_fbd3cf ? '#fbd3cf'
        : props.color_aeded9 ? '#aeded9'
        : props.color_d71920 ? '#d71920'
        : props.color_a30a42 ? '#a30a42'
        : props.color_f6d258 ? '#f6d258'
        : props.color_5c7046 ? '#5c7046'
        : props.color_679079 ? '#679079'
        : props.color_0067b2 ? '#0067b2'
        : props.color_314060 ? '#314060'
        : props.color_999999 ? '#999999'
        : props.color_0b4a89 ? '#0b4a89'
        : props.color_d0ae94 ? '#d0ae94'
        : props.color_ee542c ? '#ee542c'
        : props.color_5486a0 ? '#5486a0'
        : props.color_1744fe ? '#1744fe'
        : props.color_bed8fd ? '#bed8fd'
        : props.color_1d1e22 ? '#1d1e22'
        : props.color_6f7b89 ? '#6f7b89'
        : props.color_efefef ? '#efefef'
        : props.color_41d15e ? '#41d15e'
        : props.color_c92a39 ? '#c92a39'
        : props.color_a1cdeb ? '#a1cdeb'
        : props.color_2f9e31 ? '#2f9e31'
        : props.color_fde100 ? '#fde100'
        : props.color_e9e9ad ? '#e9e9ad'
        : 'transparent'
    };
    &:before {
        content: '';
        display: block;
        padding: 100% 100% 0 0;
    }
    &:after {
        content: '';
        display: block;
        background-color: #ffffff;
        border-width: 1px;
        border-style: solid;
        border-color:${ props =>
            props.color_ffffff
                ? '#c6c6c6'
                : 'transparent'
            };
        border-radius: 50%;
        width: 21%;
        height: 21%;
        position: absolute;
        transform: translate(-50%,-50%);
        top: 50%;
        left: 50%;
    }
    ${ media.ss`
        margin-bottom: 17px;
        width: 54px;
    ` }
    ${ media.ms`
        margin-bottom: 15px;
        width: 73px;
    ` }
    ${ media.ls`
        margin-bottom: 20px;
        width: 80px;
    ` }
`;
export const ColorName = styled.p`
    color: ${palette('mainBlack')};
    margin: 0;
    ${ media.ss`
        font: 0.875rem/1.25rem ${font('reg')}
    ` }
    ${ media.ls`
        font: 1.125rem/1.875rem ${font('reg')}
    ` }
`;
export const ColorCode = styled.p`
    color: ${palette('lightGray')};
    margin: 0;
    ${ media.ss`
        font: 0.875rem/1.25rem ${font('reg')};
    ` }
    ${ media.ls`
        font: 1.125rem/1.875rem ${font('reg')}
    ` }
`;