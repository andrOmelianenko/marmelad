/* Modules */
import React            from 'react'
/* Components */
import Animated         from '../../global/Animated'
import MainSection      from '../../global/MainSection'
/* Styles */
import { MainCenter,
         MainHeading,
         MainText,
         TransferSs }     from '../../../styles/global/GENERAL'
import { MainImage }  from '../../../styles/global/main-section'

import mainBg       from '../../../img/cases/endorfine/endorfine_main.png'
/* Statics */

const Main = () =>

    <MainSection>
        <MainImage endorfine>
            <img src={mainBg} alt=""/>
        </MainImage>
        <MainCenter endorfine >
            <Animated>
                <MainHeading endorfine>
                    Endorfine
                </MainHeading>
                <MainText endorfine>
                    Упаковка для бренда <TransferSs/>натуральных джемов
                </MainText>
            </Animated>
        </MainCenter>
    </MainSection>

export default Main
