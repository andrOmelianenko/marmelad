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
import { MainImage }  from '../../../styles/global/main-section'

import mainBg       from '../../../img/cases/vinoteria/vinoteria_main.png'
/* Statics */

const Main = () =>

    <MainSection>
        <MainImage vinoteria>
            <img src={mainBg} alt=""/>
        </MainImage>
        <MainCenter vinoteria >
            <Animated>
                <MainHeading vinoteria>
                    Vinoteria
                </MainHeading>
                <MainText vinoteria>
                    Нейм, логотип <TransferSs/>
                    и графические элементы <br/>
                    для винного бутика
                </MainText>
            </Animated>
        </MainCenter>
    </MainSection>

export default Main
