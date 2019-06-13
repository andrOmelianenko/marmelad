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
    TransferMs,
    TransferLs }   from '../../../styles/global/GENERAL'
import { MainImage }  from '../../../styles/global/main-section'
/* Statics */
import mainBg       from '../../../img/cases/museum/svg/museum_main.svg'

const Main = () =>

    <MainSection>
        <MainImage museum>
            <img src={mainBg} alt=""/>
        </MainImage>
        <MainCenter museum>
            <Animated>
                <MainHeading museum white>
                    Полтавский<br/>
                    краеведческий<br/>
                    музей
                </MainHeading>
                <MainText museum white>
                    Концепция фирменного стиля <TransferSs/>для одного <TransferMs/><TransferLs/>
                    из самых интересных <TransferSs/>мест в городе Полтава
                </MainText>
            </Animated>
        </MainCenter>
    </MainSection>

export default Main
