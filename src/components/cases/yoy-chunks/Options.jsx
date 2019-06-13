/* Modules */
import React                    from 'react'
import Grid                     from 'styled-components-grid'
/* Components */
import Animated                 from '../../global/Animated'
/* Styles */
import { OptionsSection,
         OptionsContainer,
         OptionsItem }          from '../../../styles/cases-styles/options-cases'
/* Statics */
import YoOyLogoOne               from '../../../img/cases/yoy/svg/Yoy_logo_1.svg'
import YoOyLogoTwo               from '../../../img/cases/yoy/svg/Yoy_logo_2.svg'
import YoOyLogoThree             from '../../../img/cases/yoy/svg/Yoy_logo_3.svg'
import YoOyLogoFour              from '../../../img/cases/yoy/svg/Yoy_logo_4.svg'
import YoOyLogoFive              from '../../../img/cases/yoy/svg/Yoy_logo_5.svg'
import YoOyLogoSix               from '../../../img/cases/yoy/svg/Yoy_logo_6.svg'
import YoOyLogoSeven             from '../../../img/cases/yoy/svg/Yoy_logo_7.svg'
import YoOyLogoEight             from '../../../img/cases/yoy/svg/Yoy_logo_8.svg'

const Options = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={OptionsSection}
        yoOy
    >
        <Animated>
            <Grid
                component={OptionsContainer}
                halign='center'
                yoOy
            >
                <Grid.Unit
                    size={{ss: 1/2, ms: 26/100}}
                    component={OptionsItem}
                    yoOyRight
                    yoOy
                >
                    <img src={ YoOyLogoOne } alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1/2, ms: 26/100}}
                    component={OptionsItem}
                    yoOyLeft
                    yoOy
                >
                    <img src={ YoOyLogoTwo } alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1/2, ms: 26/100}}
                    component={OptionsItem}
                    yoOyRight
                    yoOy
                >
                    <img src={ YoOyLogoThree } alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1/2, ms: 26/100}}
                    component={OptionsItem}
                    yoOyLeft
                    yoOy
                >
                    <img src={ YoOyLogoFour } alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1/2, ms: 26/100}}
                    component={OptionsItem}
                    yoOyRight
                    yoOy
                >
                    <img src={ YoOyLogoFive } alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1/2, ms: 26/100}}
                    component={OptionsItem}
                    yoOyLeft
                    yoOy
                >
                    <img src={ YoOyLogoSix } alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1/2, ms: 26/100}}
                    component={OptionsItem}
                    yoOyRight
                >
                    <img src={ YoOyLogoSeven } alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1/2, ms: 26/100}}
                    component={OptionsItem}
                    yoOyLeft
                >
                    <img src={ YoOyLogoEight } alt=""/>
                </Grid.Unit>
            </Grid>
        </Animated>
    </Grid.Unit>

export default Options
