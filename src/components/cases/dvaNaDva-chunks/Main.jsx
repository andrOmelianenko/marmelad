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
/* Statics */
import mainBg       from '../../../img/cases/2x2/dvaNaDva_main.png'

const Main = () =>

    <MainSection>
        <MainImage dvaNaDva>
            <img src={mainBg} alt=""/>
        </MainImage>
        <MainCenter dvaNaDva >
            <Animated>
                <MainHeading dvaNaDva >
                    Дважды <TransferSs/>Два
                </MainHeading>
                <MainText dvaNaDva >
                    Сайт для продажи услуг <TransferSs/>по ремонту квартир, офисов и коттеджей
                </MainText>
            </Animated>
        </MainCenter>
    </MainSection>

export default Main
