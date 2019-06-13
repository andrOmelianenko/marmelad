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
         TransferMs }  from '../../../styles/global/GENERAL'
import { MainImage }  from '../../../styles/global/main-section'

import mainBg       from '../../../img/cases/u21/u21_main.png'
/* Statics */

const Main = () =>

    <MainSection>
        <MainImage u21 >
            <img src={mainBg} alt=""/>
        </MainImage>
        <MainCenter u21 >
            <Animated>
                <MainHeading u21 white>
                    U–21
                </MainHeading>
                <MainText u21 white>
                    Логотип и фирменный стиль <TransferSs/><TransferMs/>для магазина одежды
                </MainText>
            </Animated>
        </MainCenter>
    </MainSection>

export default Main
