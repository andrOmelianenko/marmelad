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

import mainBg       from '../../../img/cases/artMarket/artMarket_main.png'
/* Statics */

const Main = () =>

    <MainSection>
        <MainImage artMarket >
            <img src={mainBg} alt=""/>
        </MainImage>
        <MainCenter artMarket >
            <Animated>
                <MainHeading artMarket>
                    Art Market
                </MainHeading>
                <MainText artMarket>
                    Айдентика для уличного фешн-фестиваля
                </MainText>
            </Animated>
        </MainCenter>
    </MainSection>

export default Main
