import   styled       from "styled-components";
import { media }    from '../global/media-settings';

export const IconSection = styled.section`
    img {
        vertical-align: bottom;
    }
    ${ media.ss`
        margin-top: ${ props =>
            props.whirl ? '22px'
            : '40px'
        };
    ` };
    ${ media.ms`
        margin-top: 40px;
    ` };
    ${ media.ls`
        margin-top: ${ props =>
              props.dvaNaDva ? '112px'
            : props.whirl ? '75px'
            : '135px;'
        }
    ` };
`;
export const IconRow = styled.div`
    ${ media.ss`
        ${props => props.whirl ? 'padding: 0 18px;' : null };
    ` };
    ${ media.ms`` };
    ${ media.ls`
        ${props => props.whirl ? 'padding: 0 88px;' : null };
    ` };
`;
export const IconItem = styled.div`
    ${ media.ss`
        display: ${props => (props.whirl30 || props.whirl31 || props.whirl35) ? 'none' : 'block'};
        margin-bottom: ${props => props.whirl ? '16px' : '27px'};
        text-align: ${props => props.center ? 'center' : props.right ? 'right' : 'left'};
        padding-top: ${props => props.item1 ? '12px' : props.item3 ? '9px' : props.item5 ? '8px' : props.item7 ? '10px' : props.item8 ? '19px' : props.item10 ? '9px' : '0'}; }       
        padding-left: ${props => props.item2 ? '3px' : props.item4 ? '12px' : props.item5 ? '3px' : props.item7 ? '5px' : props.item10 ? '4px' : '0'};
        ${ props => props.item9 ? 'padding-right: 6px' : null };
        img {
            width: auto;
            vertical-align: bottom;
            height: ${props =>  
                    props.item1 ? '64px' 
                  : props.item2 ? '76px' 
                  : props.item3 ? '67px' 
                  : props.item4 ? '64px' 
                  : props.item5 ? '56px' 
                  : props.item6 ? '63px' 
                  : props.item7 ? '53px' 
                  : props.item8 ? '44px' 
                  : props.item9 ? '63px' 
                  : props.item10 ? '74px' 
                  : props.whirl ? '30px' 
                  : '28px'};
        }
    ` };
    ${ media.ms`        
        margin-bottom: 30px;
        text-align: center;
        padding-top: ${props => 
              props.item1 ? '4px' 
            : props.item3 ? '0' 
            : props.item4 ? '4px' 
            : props.item5 ? '8px' 
            : props.item6 ? '4px' 
            : props.item7 ? '12px' 
            : props.item8 ? '19px' 
            : props.item9 ? '4px' 
            : props.item10 ? '0' 
            : '0'};    
        padding-left: ${props => props.item2 ? '3px' : props.item4 ? '12px' : props.item5 ? '3px' : props.item7 ? '5px' : props.item10 ? '4px' : '0'};
        ${ props => props.item9 ? 'padding-right: 6px' : null };
        order: ${props => props.item1 ? '1' : props.item2 ? '2' : props.item3 ? '10' : props.item4 ? '2' : props.item5 ? '5' : props.item6 ? '6' : props.item7 ? '7' : props.item8 ? '9' : props.item9 ? '8' : props.item10 ? '4' : '0'};
        img {
            height: ${props =>  props.item1 ? '52px' : props.item2 ? '61px' : props.item3 ? '55px' : props.item4 ? '53px' : props.item5 ? '45px' : props.item6 ? '51px' : props.item7 ? '43px' : props.item8 ? '35px' : props.item9 ? '52px' : '60px'};
        }
    ` };
    ${ media.ls`      
        display: block;
        margin-bottom: ${ props => props.whirl ? '80px' : '55px'};
        padding-top: ${props => props.item1 ? '8px' : props.item3 ? '0' : props.item4 ? '8px' : props.item5 ? '15px' : props.item6 ? '5px' : props.item7 ? '20px' : props.item8 ? '34px' : props.item9 ? '5px' : props.item10 ? '1px' : '0'};    
        padding-left: ${props => props.item2 ? '3px' : props.item4 ? '12px' : props.item5 ? '3px' : props.item7 ? '5px' : props.item10 ? '4px' : '0'};
        ${ props => props.item9 ? 'padding-right: 6px' : null };
        order: ${props => 
              props.whirl01 ? '1' 
            : props.whirl02 ? '2' 
            : props.whirl03 ? '3' 
            : props.whirl04 ? '4' 
            : props.whirl05 ? '5' 
            : props.whirl06 ? '6' 
            : props.whirl07 ? '7' 
            : props.whirl08 ? '8' 
            : props.whirl09 ? '9' 
            : props.whirl10 ? '10' 
            : props.whirl11 ? '11' 
            : props.whirl12 ? '12' 
            : props.whirl13 ? '13' 
            : props.whirl14 ? '14' 
            : props.whirl15 ? '15' 
            : props.whirl16 ? '16' 
            : props.whirl17 ? '17' 
            : props.whirl18 ? '18' 
            : props.whirl19 ? '19' 
            : props.whirl20 ? '20' 
            : props.whirl21 ? '21' 
            : props.whirl22 ? '22' 
            : props.whirl23 ? '23' 
            : props.whirl24 ? '24' 
            : props.whirl25 ? '25' 
            : props.whirl26 ? '26' 
            : props.whirl27 ? '27' 
            : props.whirl28 ? '28' 
            : props.whirl29 ? '29' 
            : props.whirl30 ? '30' 
            : props.whirl31 ? '31' 
            : props.whirl32 ? '32' 
            : props.whirl33 ? '33' 
            : props.whirl34 ? '34' 
            : props.whirl35 ? '35'
            : '0'
        };
        img {
            height: ${props =>  props.item1 ? '93px' : props.item2 ? '110px' : props.item3 ? '98px' : props.item4 ? '94px' : props.item5 ? '80px' : props.item6 ? '92px' : props.item7 ? '77px' : props.item8 ? '63px' : props.item9 ? '92px' : props.whirl ? '82px' : '107px'};
        }
        
    ` };
`;