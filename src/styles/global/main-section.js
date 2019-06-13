import   styled     from "styled-components"
import { media }    from '../global/media-settings'

import   mainBg     from '../../img/marmelad_main.jpg'
import   mainCaseBg from '../../img/cases/marmelad_case_main.jpg'

export const MainSectionBody = styled.section`
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
    ${ media.ss`
        min-height: 450px;
        background-image: ${ props => props.page === 'home' ? `url(${ mainBg })` : `url(${ mainCaseBg })`};
    ` }
    ${ media.ms`
        min-height: 500px;
    ` }
    ${ media.ls`
        min-height: 600px;
    ` }
    ${ media.ws`` }
`;

export const MainImage = styled.div`
    position: absolute;
    img { vertical-align: bottom; }
    ${ media.ss`
        width: ${ props =>
              props.ubs ? '188%'
            : props.museum ? '188%'
            : props.everyDay ? '140%'
            : props.u21 ? '88%'
            : props.artMarket ? '104%'
            : props.navicomEnergy ? '98%'
            : props.dvaNaDva ? '67%'
            : props.yoy ? '171%'
            : props.yoy2 ? '98%'
            : props.endorfine ? '87%'
            : props.vinoteria ? '97%'
            : props.whirl ? '159%'
            : '50%' };
        top:  ${ props => (props.yoy2) ? 'auto' :props.museum ? 'auto' : '50%' };
        bottom: ${ props => props.yoy2 ? '0' :props.museum ? '0' : 'auto' };
        right: 50%;
        transform: ${ props =>
              props.ubs ? 'translate(70%,-52%)'
            : props.museum  ? 'translate(77%,-12%)'
            : props.everyDay  ? 'translate(77%,-47%)'
            : props.u21 ? 'translate(59%,-34%) rotate(11deg)'
            : props.artMarket ? 'translate(59%,4%)'
            : props.navicomEnergy ? 'translate(49%,12%)'
            : props.dvaNaDva ? 'translate(62%,4%) rotate(-22deg)'
            : props.yoy ? 'translate(38%,-13%)'
            : props.yoy2 ? 'translate(51%,0%)'
            : props.endorfine ? 'translate(50%,3%)'
            : props.vinoteria ? 'translate(67%,21%)'
            : props.whirl ? 'translate(70.5%,9%) rotate(-10deg)'
            : 'translate(50%,-50%)' };
    ` }
    ${ media.ms`
        width: ${ props =>
              props.ubs ? '188%'
            : props.museum ? '189%'
            : props.everyDay ? '140%'
            : props.u21 ? '88%'
            : props.artMarket ? '104%'
            : props.navicomEnergy ? '98%'
            : props.dvaNaDva ? '67%'
            : props.yoy ? '171%'
            : props.yoy2 ? '98%'
            : props.endorfine ? '87%'
            : props.vinoteria ? '97%'
            : props.whirl ? '159%'
            : '50%' };
        transform: ${ props =>
              props.ubs ? 'translate(70%,-52%)'
            : props.museum  ? 'translate(77%,-11%)'
            : props.everyDay  ? 'translate(77%,-47%)'
            : props.u21 ? 'translate(59%,-47%) rotate(11deg)'
            : props.artMarket ? 'translate(59%,4%)'
            : props.navicomEnergy ? 'translate(49%,12%)'
            : props.dvaNaDva ? 'translate(62%,-13%) rotate(-22deg)'
            : props.yoy ? 'translate(38%,-13%)'
            : props.yoy2 ? 'translate(51%,0%)'
            : props.endorfine ? 'translate(50%,-12%)'
            : props.vinoteria ? 'translate(61%,1%)'
            : props.whirl ? 'translate(70.5%,-9%) rotate(-10deg)'
            : 'translate(50%,-50%)' };
    ` }
    ${ media.ls`
        width: ${ props =>
             props.whirl ? '90.5%'
            : props.museum ? '91.5%'
            : props.ubs ? '102%'
            : props.everyDay ? '51%'
            : props.u21 ? '50%'
            : props.artMarket ? '63%'
            : props.navicomEnergy ? '63%'
            : props.dvaNaDva ? '48%'
            : props.yoy ? '100%'
            : props.yoy2 ? '57%'
            : props.endorfine ? '54%'
            : props.vinoteria ? '81%'
            : '50%' };
        transform: ${ props =>
              props.whirl ? 'translate(80.5%,-36.5%)'
            : props.museum ? 'translate(81.25%,-19.5%)'
            : props.ubs ? 'translate(77.25%,-58%)'
            : props.everyDay  ? 'translate(84%,-50%)'
            : props.u21 ? 'translate(77%,-62%)'
            : props.artMarket ? 'translate(62%,-48%)'
            : props.navicomEnergy ? 'translate(72%,-21%)'
            : props.dvaNaDva ? 'translate(87%,-38%)'
            : props.yoy ? 'translate(50%,-52%)'
            : props.yoy2 ? 'translate(73%,0%)'
            : props.endorfine ? 'translate(79%,-39%)'
            : props.vinoteria ? 'translate(71%,-28%)'
            : 'translate(50%,-50%)' };
    ` }
    ${ media.ws`` }
`;