import styled       from "styled-components";
import { palette,
         font,
         fontCase,
         size } from '../global/theme';
import { media }    from '../global/media-settings';


//  GLOBAL  //

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

export const MainSection = styled.section`
    position: relative;
    height: 100vh;
    ${ media.ss`
        min-height: 400px;
    ` }
    ${ media.ms`
        min-height: 500px;
    ` }
    ${ media.ls`
        min-height: 600px;
    ` }
    ${ media.ws`` }
`;

export const AboutSection = styled.section`    
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`
        padding-top: 136px;
    ` };
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
export const LogoSection = styled.section`
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`
        padding-top: 145px;
    ` };
`;
export const ThesesSection = styled.section`
    & > div {
        padding-top: 0;
        padding-bottom: 0;
    }
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`
        padding-top: 125px;
    ` };
`;
export const SymbolSection = styled.section`
    & > div {
        padding-top: 0;
        padding-bottom: 0;
    }
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`
        padding-top: 145px;
    ` };
`;
export const SymbolRow = styled.div`
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`` };
`;
export const SymbolItem = styled.div`
    img {
        display: block;
        margin: 0 auto;
    }
    p {
        padding: 0;
    }
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`
        img {
            width: 63px;
            margin-bottom: 22px;
        }
        p {
            padding: 0;
            line-height: 1.3125rem;
        }
    ` };
`;
export const SymbolPlus = styled.div`
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`
        margin-top: 22px;
    ` };
`;
export const Plus = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
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
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`` };
`;
export const EvolutionSection = styled.section`
    & > div {
        padding-top: 0;
        padding-bottom: 0;
    }
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`
        padding-top: 135px;
        h2 + div {
            padding-top: 0;
        }
    ` };
`;
export const GridSection = styled.section`
    & > div {
        padding-top: 0;
        padding-bottom: 0;
    }
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`
        padding-top: 125px;
    ` };
`;
export const EvolutionRow = styled.div`
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`` };
`;

export const EvolutionItem = styled.div`
    ${ media.ss`` };
    ${ media.ms`` };
    ${ media.ls`
        padding: 0 16px;
        margin-bottom: 60px;        
        &:nth-last-child(1),
        &:nth-last-child(2),
        &:nth-last-child(3),
        &:nth-last-child(4) {
            margin-bottom: 0;
            img {
                width: 118px;
                height: 93px;
            }        
        }
        img {
            width: 119px;
            height: 119px;
        }        
    ` };
`;
export const PageText = styled.p`
    margin: 0;
    color: ${ palette(`plainText`) };
    text-align: ${ props =>
        props.right
            ? 'right'
            :props.center
            ? 'center'
            : 'left'
    };
    ${ media.ss`
        font: 0.875rem/1.25rem ${font(`reg`)};
        margin-bottom: ${ props => 
            props.last
                ? '0'
                : '10px'
        };
    ` };
    ${ media.ms`` };
    ${ media.ls`
        font: 1.125rem/1.875rem ${font(`reg`)};
        margin-bottom: ${ props => 
            props.last
                ? '0'
                : '20px'
        };
    ` };
`;

export const ThesesRow = styled.div`
    ${ media.ls`
        margin-top: 70px;
    ` }
`;
export const ThesesItem = styled.div`
    ${ media.ls`
        padding: 0 0 0 16px;
        margin-right: 4%;
        &:nth-child(3n) {
            margin-right: 0;
        }
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
            margin-bottom: 24px;
        }
    ` }
`;
export const ThesesCircle = styled.div`
    p {
        padding: 0;
        position: absolute;
        width: 100%;        
        display: block;
        top: 50%;
        transform: translateY(-50%);
    }
    width: calc(100% + 16px);
    position: relative;
    border: 1px solid #e4e4e4;
    border-radius: 50%;
    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }
    ${ media.ls`
    ` }
`;
export const FontsSection = styled.section`
& > div {
        padding-top: 0;
        padding-bottom: 0;
    }
    ${ media.ls`
        h2 + div {
            padding-top: 0;
        }
        padding-top: 145px;
    ` }
`;
export const FontItem = styled.div`
    flex-direction: column;
    font-family: ${ props =>
        fontCase(props.BrandonGrotesqueMedium
            ? `BrandonGrotesqueMedium`
            : props.GothamProMedium
            ? 'GothamProMedium'
            : props.ArimoRegular
            ? 'ArimoRegular'
            : props.ArimoBold
            ? 'ArimoBold'
            : 'bold'
        )(props)
    };
    line-height: 30px;
    ${ media.ss`
        margin-bottom: ${ props =>
            props.last
                ? `0`
                : '27px;'
        };
    ` }
    ${ media.ms`
        margin-bottom: 0;
        padding-left: ${ props =>
            props.last
                ? `12px`
                : '0'
        };
    ` }
    ${ media.ls`
        padding: 0 1rem;
    ` }
`;

export const FontFamily = styled.h3`
    color: ${ props =>
        palette(props.transparent
            ? `transp`
            : 'mainBlack'
        )(props)
    };
    margin: 0;
    ${ media.ss`
        margin-left: -3px;
        margin-bottom:  ${ props =>
            props.BrandonGrotesqueMedium
                ? `6px`
                : props.GothamProMedium
                ? '6px'
                : props.ArimoRegular
                ? '6px'
                : props.ArimoBold
                ? '6px'
                : '0'
        };
        font-size: ${ props =>
            props.BrandonGrotesqueMedium
                ? `32px`
                : props.GothamProMedium
                ? '30px'
                : props.ArimoRegular
                ? '30px'
                : props.ArimoBold
                ? '30px'
                : '20px'
        };
    ` }
    ${ media.ls`
        font-size: ${ props =>
            props.BrandonGrotesqueMedium
                ? `38px`
                : props.GothamProMedium
                ? '36px'
                : props.ArimoRegular
                ? '38px'
                : props.ArimoBold
                ? '38px'
                : '20px'
        };
        line-height: 36px;
        margin-bottom: ${ props =>
            props.ArimoBold
                ? '13px'
                : props.ArimoRegular
                ? '14px'
                : '9px'
        };
    ` }
`;

export const FontOutline = styled.p`
    color: ${palette(`lightGray`)};
    margin: 0;
    ${ media.ss`
        margin-bottom:  ${ props =>
            props.BrandonGrotesqueMedium
                ? `17px`
                : props.GothamProMedium
                ? '14px'
                : props.ArimoRegular
                ? '14px'
                : props.ArimoBold
                ? '14px'
                : '0'
        };
        line-height: 30px;
        font-size: ${ props =>
            props.BrandonGrotesqueMedium
                ? `16px`
                : props.GothamProMedium
                ? '14px'
                : props.ArimoRegular
                ? '14px'
                : props.ArimoBold
                ? '14px'
                : '16px'
        };
    ` }
    ${ media.ms`
        margin-bottom:  ${ props =>
        props.BrandonGrotesqueMedium
            ? `15px`
            : props.GothamProMedium
            ? '15px'
            : props.ArimoRegular
            ? '15px'
            : props.ArimoBold
            ? '15px'
            : '0'
        };
    ` }
    ${ media.ls`
        font-size: ${ props =>
            props.BrandonGrotesqueMedium
                ? `20px`
                : props.GothamProMedium
                ? '18px'
                : props.ArimoRegular
                ? '18px'
                : props.ArimoBold
                ? '20px'
                : '16px'
        };
        margin-bottom:  ${ props =>
            props.BrandonGrotesqueMedium
                ? `29px`
                : props.GothamProMedium
                ? '28px'
                : props.ArimoRegular
                ? '28px'
                : props.ArimoBold
                ? '28px'
                : '0'
    };
    ` }
`;

export const FontSet = styled.p`
    color: ${palette(`mainBlack`)};
    margin: 0;
    ${ media.ss`
        line-height: 20px;
        font-size: ${ props =>
            props.BrandonGrotesqueMedium
                ? `16px`
                : props.GothamProMedium
                ? '14px'
                : props.ArimoRegular
                ? '14px'
                : props.ArimoBold
                ? '14px'
                : '16px'
        };
        span {
            display: none;
        }
    ` }
    ${ media.ms`
        margin-top: ${ props =>
        props.BrandonGrotesqueMedium
            ? `2px`
            : props.GothamProMedium
            ? '0'
            : props.ArimoRegular
            ? '0'
            : props.ArimoBold
            ? '0'
            : '0'
        };
        span {
            display: block;
        }
    ` }
    ${ media.ls`
        line-height: 30px;
        font-size: ${ props =>
            props.BrandonGrotesqueMedium
                ? `20px`
                : props.GothamProMedium
                ? '18px'
                : props.ArimoRegular
                ? '18px'
                : props.ArimoBold
                ? '20px'
                : '16px'
        };
    ` }
`;

export const ColorsSection = styled.section`
    ${ media.ss`
        margin-top: 35px;
    ` }
    ${ media.ms`
    ` }
    ${ media.ls`
        margin-top: 135px;
    ` }
`;

export const ColorsRow = styled.div`
    ${ media.ss`
        margin-bottom: ${ props =>
            props.last
                ? `0`
                : '20px;'
        };
    ` }
    ${ media.ms`
        margin-bottom: ${ props =>
            props.last
                ? `0`
                : '32px'
        };
    ` }
    ${ media.ls`
        margin-bottom: ${ props =>
            props.last
                ? `0`
                : '80px'
        };
    ` }
`;

export const ColorItem = styled.div`
    ${ media.ss`
    margin-right: ${ props =>
        props.last
            ? `0`
            : '12.5%'
        };
    ` }
    ${ media.ms`
        margin-right: ${ props =>
            props.last
                ? `0`
                : '1%;'
        };
    ` }
    ${ media.ls`
        margin-right: 0;
        padding: 0 1rem
    ` }
`;
export const ColorCircle = styled.div`
    border-radius: 50%;
    position: relative;
    border-width: 1px;
    border-style: solid;
    border-color:${ props =>
    props.color_2d2c2b
        ? `#2d2c2b`
        : props.color_333333
        ? `#333333`
        : props.color_ffffff
            ? '#c6c6c6'
            : props.color_cceffc
                ? '#cceffc'
                : props.color_fbd3cf
                    ? '#fbd3cf'
                    : props.color_aeded9
                        ? '#aeded9'
                        : props.color_d71920
                            ? '#d71920'
                            : 'transparent'
    };
    background-color: ${ props =>
    props.color_2d2c2b
        ? `#2d2c2b`
        : props.color_333333
        ? `#333333`
        : props.color_ffffff
            ? '#ffffff'
            : props.color_cceffc
                ? '#cceffc'
                : props.color_fbd3cf
                    ? '#fbd3cf'
                    : props.color_aeded9
                        ? '#aeded9'
                        : props.color_d71920
                            ? '#d71920'
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
    color: ${palette(`mainBlack`)};
    margin: 0;
    ${ media.ss`
        font: 0.875rem/1.25rem ${font(`reg`)}
    ` }
    ${ media.ls`
        font: 1.125rem/1.875rem ${font(`reg`)}
    ` }
`;

export const ColorCode = styled.p`
    color: ${palette(`lightGray`)};
    margin: 0;
    ${ media.ss`
        font: 0.875rem/1.25rem ${font(`reg`)};
    ` }
    ${ media.ls`
        font: 1.125rem/1.875rem ${font(`reg`)}
    ` }
`;

export const LinkSection = styled.section`
    margin: 0;
    ${ media.ss`
        margin-top: 90px;
    ` }
    ${ media.ms`
        margin-top: 81px;
    ` }
    ${ media.ls`
        margin-top: 233px;
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
        padding: 6px 0 0;
    ` }
    ${ media.ls`
        padding: 5px 8px 0 0;
    ` }
    ${ media.ws`
        padding: 11px 16px 0 0;
    ` }
`;

export const AllLink = styled.div`
    position: relative;
    text-align: center;
    ${ media.ms`
        order: 1;
    text-align: left;
    ` }
    ${ media.ls`
        text-align: center;
    ` }
`;

