/* Modules */
import React            from 'react'
/* Components */
import Animated         from '../../global/Animated'
import MainSection      from '../../global/MainSection'
/* Styles */
import { MainCenter,
         MainHeading,
         MainText,
         TransferSs,
    TransferLs }     from '../../../styles/global/GENERAL'
import { MainImage }  from '../../../styles/global/main-section'

import mainBg       from '../../../img/cases/everyDay/everyDay_main.png'


const Main = () =>
    <MainSection>
        <MainImage everyDay >
            <img src={mainBg} alt=""/>
        </MainImage>
        <MainCenter everyDay >
            <Animated>
                <MainHeading everyDay >
                    Everyday <TransferLs/>Studio
                </MainHeading>
                <MainText everyDay >
                    Дизайн презентационных <TransferSs/>материалов <TransferLs/>для комплекса <TransferSs/>приложений
                    {/*Print design for presentation of application*/}
                </MainText>
            </Animated>
        </MainCenter>
    </MainSection>

export default Main
