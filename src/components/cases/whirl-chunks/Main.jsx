/* Modules */
import React            from 'react'
/* Components */
import Animated         from '../../global/Animated'
import MainSection      from '../../global/MainSection'
/* Styles */
import { MainCenter,
         MainHeading,
         MainText }  from '../../../styles/global/GENERAL'
import { MainImage }  from '../../../styles/global/main-section'

import mainBg       from '../../../img/cases/whirl/whirl_main.png'
/* Statics */

const Main = () =>

    <MainSection>
        <MainImage whirl>
            <img src={mainBg} alt=""/>
        </MainImage>
        <MainCenter whirl >
            <Animated>
                <MainHeading whirl>
                    Whirl
                </MainHeading>
                <MainText whirl>
                    Корпоративный сайт для <br/>
                    компании Whirl, создателей<br/>
                    девайса Nasal Booster и <br/>
                    натуральной косметики Biozym
                </MainText>
            </Animated>
        </MainCenter>
    </MainSection>

export default Main
