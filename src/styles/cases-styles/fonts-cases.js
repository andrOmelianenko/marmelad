import styled       from "styled-components";
import { palette,
         fontCase } from '../global/theme';
import { media }    from '../global/media-settings';

export const FontsSection = styled.section`
    ${ media.ss`
        margin-top:  ${props => props.yoOy ? '55px' : '70px'};
    ` }
    ${ media.ms`
        margin-top: ${props => props.yoOy ? '120px' : '70px'};
    ` }
    ${ media.ls`
        margin-top: ${ props => props.u21 ? '175px;' :props.ubs ? '145px;' :props.yoOy ? '143px;' :props.dvaNaDva ? '132px;' : '300px;' };
    ` }
    ${ media.ws`
        margin-top: 245px;
    ` }
`;
export const FontsSectionBody = styled.section`
    ${ media.ss`
        margin-top: 55px;
    ` }
    ${ media.ms`
        margin-top: ${props => props.yoOy ? '120px' : '75px'};
    ` }
    ${ media.ls`
        margin-top: ${ props =>
              props.page === 'u21'           ? `175px`
            : props.page === 'ukrburservice' ? `145px`
            : props.page === 'dvaNaDva'      ? `132px`
            : props.page === 'vinoteria'      ? `240px`
            : props.page === 'yoOy'          ? `145px`
            : '150px'
        };
    ` }
    ${ media.ws`
        // margin-top: 245px;
    ` }
`;
export const FontFamilyCase = styled.div`
    font-family: ${ props =>
    fontCase(props.AkzidenzGroteskProBold
        ? 'AkzidenzGroteskProBold'
            :props.AkzidenzGroteskProRegular
            ? 'AkzidenzGroteskProRegular'
            :props.BrandonGrotesqueMedium
            ? 'BrandonGrotesqueMedium'
            : props.GothamProMedium
            ? 'GothamProMedium'
            : props.ArimoRegular
            ? 'ArimoRegular'
            : props.ArimoBold
            ? 'ArimoBold'
            : props.HelveticaNeueBold
            ? 'HelveticaNeueBold'
            : props.HelveticaNeueRegular
            ? 'HelveticaNeueRegular'
            : props.PFDinTextUniversalRegular
            ? 'PFDinTextUniversalRegular'
            : props.PixelCyrRegular
            ? 'PixelCyrRegular'
            : props.PTSansBold
            ? 'PTSansBold'
            : props.PTSansDemi
            ? 'PTSansDemi'
            : props.PTSansRegular
            ? 'PTSansRegular'
            : props.SuperclarendonBold
            ? 'SuperclarendonBold'
            : 'bold'
        )(props)
    };
`;
export const FontItem = styled(FontFamilyCase)`
    flex-direction: column;
    ${ media.ss`` }
    ${ media.ms`
        order: ${ props => props.order1 ? '1' : props.order2 ? '2' : props.order3 ? '3' : props.order4 ? '4' : props.order5 ? '5' : props.order6 ? '6' : props.order7 ? '7' : props.order8 ? '8' : props.order9 ? '9' : props.order10 ? '10' : '0' };
        ${ props => props.marginRight ? 'margin-right: 4%' : null };
    ` }
    ${ media.ls`` }
    // ${ media.ws`
    //     padding-left: ${ props => ( props.order2 || props.order4 ) ? '50px' : '0' };
    // ` }
`;
export const FontName = styled(FontItem)`
    ${ media.ss`    
        margin-bottom:  ${ props =>
            ( props.ArimoRegular || props.ArimoBold )
            ? '6px'
            :( props.PixelCyrRegular || props.PTSansBold )
            ? '13px'
            : (props.HelveticaNeueBold 
                || props.HelveticaNeueRegular 
                || props.PTSansDemi 
                || props.PTSansRegular 
                || props.PFDinTextUniversalRegular 
                || props.AkzidenzGroteskProBold 
                || props.AkzidenzGroteskProRegular
                || props.SuperclarendonBold
            )  ? '15px'
            : (props.BrandonGrotesqueMedium || props.GothamProMedium )
            ? '17px'
            : '0'
    };
    ` }
    ${ media.ms`    
        margin-bottom:  ${ props =>
        ( props.ArimoRegular || props.ArimoBold || props.PixelCyrRegular || props.PTSansBold )
            ? '6px'
            : (props.HelveticaNeueBold || props.HelveticaNeueRegular
            || props.PFDinTextUniversalRegular
            || props.AkzidenzGroteskProBold
            || props.AkzidenzGroteskProRegular
            || props.SuperclarendonBold)
            ? '15px'
            : (props.BrandonGrotesqueMedium || props.GothamProMedium )
            ? '17px'
            : '0'
        };
    ` }
    ${ media.ls` 
        margin-bottom:  ${ props =>
        ( props.ArimoRegular 
            || props.ArimoBold 
            || props.BrandonGrotesqueMedium 
            || props.GothamProMedium 
            || props.HelveticaNeueBold  
            || props.PFDinTextUniversalRegular
            || props.PTSansDemi 
            || props.HelveticaNeueRegular
            || props.PFDinTextUniversalRegular
            || props.AkzidenzGroteskProRegular
            || props.AkzidenzGroteskProBold
            || props.SuperclarendonBold
        )
            ? '30px'
            : ( props.PixelCyrRegular || props.PTSansBold )
            ? '6px'
            : '0'
        };
        margin-top: 0;
    ` }

`;

export const FontFamilyAll = styled(FontFamilyCase)`
    ${ media.ms`
        order: ${ props =>
    props.order1 ? '1'
        : props.order2 ? '2'
        : props.order3 ? '3'
            : props.order4 ? '4'
                : props.order5 ? '5'
                    : props.order6 ? '6'
                        : props.order7 ? '7'
                            : props.order8 ? '8'
                                : '0'
    };
        span {display: none;}
    ` }
`;
export const FontFamily = styled.h3`
    width: 100%;
    margin: 0;
    color: ${ palette('mainBlack')};
    ${ media.ss`
        line-height: 30px;
        font-size: ${ props =>
            ( props.BrandonGrotesqueMedium ||
               props.HelveticaNeueBold ||
               props.HelveticaNeueRegular ||
               props.PTSansDemi ||
               props.PFDinTextUniversalRegular ||
               props.AkzidenzGroteskProRegular ||
               props.SuperclarendonBold 
            )   ? `32px`
            : ( props.GothamProMedium ||
                props.ArimoRegular ||
                props.ArimoBold ||
                props.PixelCyrRegular ||
                props.PTSansBold 
            )   ? '30px'
                : '20px'
        };
        margin-bottom:  ${ props =>
            (      props.GothamProMedium 
                || props.ArimoRegular 
                || props.ArimoBold 
                || props.PixelCyrRegular 
                || props.PTSansDemi 
                || props.PTSansBold 
                || props.HelveticaNeueBold 
            )   ? '6px'
            : (    props.BrandonGrotesqueMedium 
                || props.AkzidenzGroteskProRegular 
                || props.SuperclarendonBold
            )   ? '4px'
            : (    props.PFDinTextUniversalRegular
            )   ? '13px'
                : '0'
        };
    ` }
    ${ media.ms`
        display: block; 
        line-height: 36px;
        font-size: ${ props =>
            ( props.PixelCyrRegular || 
                props.PTSansBold ) ? '36px'
            : ( props.ArimoRegular || 
                props.ArimoBold || 
                props.BrandonGrotesqueMedium || 
                props.HelveticaNeueBold ||
                props.PFDinTextUniversalRegular ||
                props.AkzidenzGroteskProRegular || 
                props.SuperclarendonBold) ? `32px`
        : props.GothamProMedium
                ? `30px`
                : '20px'
        };
        margin-bottom: ${ props =>
            props.ArimoBold
                ? '13px'
                : props.ArimoRegular
                ? '14px'
                : props.PTSansBold
                ? '4px'
                : ( props.BrandonGrotesqueMedium || props.GothamProMedium || props.PixelCyrRegular )
                ? '3px'
                : '9px'
        };
    ` }
    ${ media.ls`
        line-height: 36px;
        font-size: ${ props =>
            ( props.ArimoRegular  || 
              props.ArimoBold  || 
              props.HelveticaNeueBold  || 
              props.BrandonGrotesqueMedium  || 
              props.PTSansDemi  || 
              props.PTSansRegular || 
              props.PFDinTextUniversalRegular || 
              props.AkzidenzGroteskProRegular || 
              props.SuperclarendonBold
            ) ? `38px`
                : ( props.PixelCyrRegular || props.PTSansBold || props.GothamProMedium)
                ? '36px'
                : '20px'
        };
        margin-bottom: ${ props =>
            (props.ArimoBold || props.HelveticaNeueRegular || props.HelveticaNeueBold  || props.PTSansDemi  || props.PFDinTextUniversalRegular )
                ? '13px'
                : (props.ArimoRegular || props.PTSansRegular || props.SuperclarendonBold)
                ? '14px'
                : props.PTSansBold
                ? '4px'
                : props.AkzidenzGroteskProRegular
                ? '12px'
                : ( props.BrandonGrotesqueMedium || props.GothamProMedium  || props.PixelCyrRegular )
                ? '3px'
                : '9px'
        };
    ` }
`;
export const FontOutline = styled.p`
    color: ${palette(`lightGray`)};
    margin: 0;
    ${ media.ss`
        line-height: 30px;
        font-size: ${ props =>
            ( props.GothamProMedium 
                || props.ArimoRegular 
                || props.ArimoBold  
                || props.PixelCyrRegular 
                || props.PTSansBold 
                || props.HelveticaNeueRegular 
                || props.PFDinTextUniversalRegular 
                || props.AkzidenzGroteskProBold 
                || props.AkzidenzGroteskProRegular
                || props.SuperclarendonBold
            )
                ? '14px'
                : '16px'
        };
        // margin-bottom:  ${ props => props.BrandonGrotesqueMedium ? `17px` : ( props.GothamProMedium || props.ArimoRegular || props.ArimoBold  || props.PixelCyrRegular ) ? '14px' : props.PTSansBold ? '12px' : '0' };
    ` }
    ${ media.ms`
        margin-bottom: 0;
        font-size: ${ props =>
            ( props.PixelCyrRegular  || 
                props.PTSansBold || 
                props.AkzidenzGroteskProBold ||
                props.PFDinTextUniversalRegular ||
                props.AkzidenzGroteskProRegular ||
                props.SuperclarendonBold )
                ? '18px'
                : props.GothamProMedium
                ? '14px'
                : '16px'
        };
    ` }
    ${ media.ls`
        margin-bottom: 0;
        font-size: ${ props =>
            ( props.BrandonGrotesqueMedium 
                || props.ArimoBold 
                || props.HelveticaNeueBold  
                || props.PTSansDemi
                || props.PFDinTextUniversalRegular
                || props.AkzidenzGroteskProRegular
                || props.AkzidenzGroteskProBold
                || props.SuperclarendonBold
            )
                ? '20px'
                : ( props.ArimoRegular || props.GothamProMedium || props.PixelCyrRegular || props.PTSansRegular || props.PTSansBold || props.HelveticaNeueRegular )
                ? '18px'
                    : '16px'
        };
    ` }
`;
export const FontSet = styled(FontItem)`
    color: ${palette(`mainBlack`)};
    ${ media.ss`
        line-height: 20px;
        font-size: ${ props =>
            ( props.GothamProMedium 
                || props.ArimoRegular 
                || props.ArimoBold 
                || props.PixelCyrRegular 
                || props.PTSansBold 
                || props.PFDinTextUniversalRegular 
                || props.AkzidenzGroteskProBold 
                || props.AkzidenzGroteskProRegular 
                || props.SuperclarendonBold 
            )   ? '14px'
                : '16px'
        };
        margin-bottom: ${ props =>
            props.last
                ? '0'
                : (props.HelveticaNeueBold || props.PTSansDemi || props.AkzidenzGroteskProRegular)
                ? '16px'
                : props.PixelCyrRegular
                ? '33px'
                : props.AkzidenzGroteskProBold
                ? '40px'
                : '27px;'
        };
        ${ props => ( props.HelveticaNeueBold ) ? 'margin-top: 2px;' : null };     
        span {
            display: none;
        }
    ` }
    ${ media.ms`
        font-size: ${ props =>
            props.GothamProMedium
                ? '14px'
            :props.GothamProMedium
                ? '15px'
                : ( props.PixelCyrRegular || props.PTSansBold
                    || props.AkzidenzGroteskProBold
                    || props.AkzidenzGroteskProRegular
                    || props.SuperclarendonBold)
                ? '18px'
                : '16px'
        };
        margin-bottom:  ${ props =>
            ( props.AkzidenzGroteskProRegular || props.AkzidenzGroteskProBold )
                ? '70px'
                : '0'
            };
        span {
            display: block;
        }
    ` }
    ${ media.ls`
        font-size: ${ props =>
            (props.ArimoBold 
                || props.BrandonGrotesqueMedium 
                || props.HelveticaNeueBold  
                || props.PTSansDemi
                || props.PFDinTextUniversalRegular
                || props.AkzidenzGroteskProRegular
                || props.AkzidenzGroteskProBold
                || props.SuperclarendonBold
            ) ? '20px'
            : ( props.GothamProMedium || props.ArimoRegular || props.PixelCyrRegular || props.PTSansBold  || props.PTSansRegular || props.HelveticaNeueRegular )
            ? '18px'
            : '16px'
        };
        line-height: 30px;
        margin-top: 0;
    ` }
`;