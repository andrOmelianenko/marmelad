import styled       from "styled-components";
import { media }    from '../global/media-settings';
import { ImgCell }    from './image-cases';

export const CarSection = styled.section`
    ${ media.ss`
        margin-top: ${ props => props.MockUp ? '42px' : '55px' };
    ` };
    ${ media.ms`
        margin-top: ${ props => props.MockUp ? '42px' : '75px' };
    ` };
    ${ media.ls`
        margin-top: ${ props => props.MockUp ? '152px' : '120px' };
    ` };
`;
export const ImgCar = styled(ImgCell)`
    position: relative;
    div {
        height: 100%;
        width: 100%;
    }
    ${ media.ss`
    ` };
    ${ media.ms`` };
    ${ media.ls`
        padding-left: ${ props =>
            props.paddingLeft
                ? '1rem;'
                : props.ubs
                ? 'calc(2.25% + 16px);'
                : '0'
            };
        padding-right: ${ props =>
            props.paddingRight
                ? '1rem;'
                : props.ubs
                ? 'calc(2.25% + 16px);'
                : '0;'
            };
        order: ${ props =>
            props.order1
                ? '1'
                : props.order2
                ? '2'
                : props.order3
                ? '3'
                : props.order4
                ? '4'
                : props.order5
                ? '5'
                : props.order6
                ? '6'
                : '0'
            };
        img {
           max-width: 560px;
           height: ${ props =>
            props.navicomEnergy
                ? '170px'
                : 'auto'
            };
        }
    ` };
`;
export const ImgCarSmall = styled(ImgCar)`    
    ${ media.ss`
        margin-bottom: ${ props =>
            props.order1
                ? '20px'
                : '53px'
        };
    ` };
    ${ media.ms`` };
    ${ media.ls`
        text-align: right;
        margin-bottom: ${ props =>
            props.order1
                ? '30px'
                : '0'
        };
    ` };
    ${ media.ws`
        margin-bottom: ${ props =>
            props.order1
                ? '35px'
                : '0'
        };
    ` };
`;
export const ImgCarNavicom = styled(ImgCar)`    
  ${ media.ss`
    margin-bottom: ${ props =>
        props.order1
            ? '20px'
            : props.order2
            ? '15px'
            : props.order5
            ? '38px'
            : '53px'
    };
    ${ props => props.order3 ? 'margin-right: 28px' : null };
    ` };
    ${ media.ms`` };
    ${ media.ls`
        margin-bottom: ${ props =>
        (props.order4 || props.order5 || props.order6 )
            ? '0'
            : '57px'
        };
        margin-right: ${ props =>
            (props.order1 || props.order4)
                ? '2.5%'
                : (props.order2 || props.order5)
                ? '3%'
                : '0'
            };
    ` };
    ${ media.ws`` };
`;