/* Modules */
import React            from 'react'
/* Components */
import Animated         from '../../global/Animated'
import MainSection      from '../../global/MainSection'
/* Styles */
import { MainCenter,
         MainHeading,
         MainText,
         TransferSs }   from '../../../styles/global/GENERAL'
import { MainImage }  from '../../../styles/global/main-section'
/* Statics */
import mainBg       from '../../../img/cases/ubs/ubs_main.png'

const Main = () =>

    <MainSection>
        <MainImage ubs>
            <img src={mainBg} alt=""/>
        </MainImage>
        <MainCenter ubs>
            <Animated>
                <MainHeading ubs white>
                    Укр&shy;бур&shy;сервис
                </MainHeading>
                <MainText ubs white>
                    Фирменный стиль и сайт <TransferSs/>для буровой компании
                </MainText>
            </Animated>
        </MainCenter>
    </MainSection>

export default Main
