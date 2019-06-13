/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { ContainerImg,
         ImgSection,
         ImgCell }      from '../../../styles/cases-styles/image-cases'
/* Statics */
import EveryDay1        from '../../../img/cases/everyDay/ED_1_1366.jpg'
import EveryDay2        from '../../../img/cases/everyDay/ED_2_1366.jpg'
import EveryDay3        from '../../../img/cases/everyDay/ED_3_1366.jpg'

const FirstImages = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
        everyDay1
    >
        <Grid
            component={ContainerImg}
            halign='center'
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingLeftLs
                marginNone
            >
                <Animated>
                    <img
                        src = { EveryDay1 }
                        alt = 'EveryDay'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ls: 10 / 20}} visible = {{ss: false, ls: true}} />
            <Grid.Unit size={{ls: 10 / 20}} visible = {{ss: false, ls: true}} />
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingRightLs
                marginNone
            >
                <Animated>
                    <img
                        src = { EveryDay2 }
                        alt = 'EveryDay'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingLeftLs
                last
            >
                <Animated>
                    <img
                        src = { EveryDay3 }
                        alt = 'EveryDay'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ls: 10 / 20}} visible = {{ss: false, ls: true}} />
        </Grid>
    </Grid.Unit>

export default FirstImages