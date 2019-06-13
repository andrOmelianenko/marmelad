/* Modules */
import React            from 'react'
/* Components */
import Animated         from '../../global/Animated'
import MainSection      from '../../global/MainSection'
/* Styles */
import { MainCenter,
         MainHeading,
         MainText,
         TransferSs }  from '../../../styles/global/GENERAL'
/* Statics */
import { MainImage }  from '../../../styles/global/main-section'

import mainBg       from '../../../img/cases/yoy/Yoy_main.png'
import mainBg2      from '../../../img/cases/yoy/Yoy_main2.png'
/* Statics */

const Main = () =>

    <MainSection>
        <MainImage yoy>
            <img src={mainBg} alt=""/>
        </MainImage>
        <MainImage yoy2>
            <img src={mainBg2} alt=""/>
        </MainImage>
        <MainCenter yoOy >
            <Animated>
                <MainHeading yoOy >
                    Йой!
                </MainHeading>
                <MainText yoOy >
                    Логотип и упаковка <TransferSs/>для кофейной компании
                </MainText>
            </Animated>
        </MainCenter>
    </MainSection>

export default Main
