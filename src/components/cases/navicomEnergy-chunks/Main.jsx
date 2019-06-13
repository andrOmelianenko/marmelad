/* Modules */
import React            from 'react'
/* Components */
import Animated         from '../../global/Animated'
import MainSection      from '../../global/MainSection'
/* Styles */
import { MainCenter,
         MainHeading,
         MainText,
         TransferLs }   from '../../../styles/global/GENERAL'
import { MainImage }  from '../../../styles/global/main-section'
/* Statics */
import mainBg       from '../../../img/cases/navicomEnergy/navicomEnergy_main.png'

const Main = () =>

    <MainSection>
        <MainImage navicomEnergy>
            <img src={mainBg} alt=""/>
        </MainImage>
        <MainCenter navicomEnergy>
            <Animated>
                <MainHeading navicomEnergy>Navicom <TransferLs/>Energy</MainHeading>
                <MainText navicomEnergy>Айдентика для буровой компании</MainText>
            </Animated>
        </MainCenter>
    </MainSection>

export default Main