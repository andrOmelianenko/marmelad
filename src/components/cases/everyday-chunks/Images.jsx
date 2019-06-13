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
import EveryDay4        from '../../../img/cases/everyDay/ED_4_1366.jpg'
import EveryDay5        from '../../../img/cases/everyDay/ED_5_1366.jpg'
import EveryDay6        from '../../../img/cases/everyDay/ED_6_1366.jpg'
import EveryDay7        from '../../../img/cases/everyDay/ED_7_1366.jpg'
import EveryDay8        from '../../../img/cases/everyDay/ED_8_1366.jpg'
import EveryDay9        from '../../../img/cases/everyDay/ED_9_1366.jpg'

const Image = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
    >
        <Grid
            component={ContainerImg}
            halign='center'
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 9 / 20}}
                component={ImgCell}
                paddingRightLs
            >
                <Animated>
                    <img
                        src={EveryDay4}
                        alt='EveryDay'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 9 / 20}}
                component={ImgCell}
                paddingLeftLs
            >
                <Animated>
                    <img
                        src = { EveryDay5 }
                        alt = 'EveryDay'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 9 / 20}}
                component={ImgCell }
                paddingRightLs
            >
                <Animated>
                    <img
                        src = { EveryDay6 }
                        alt = 'EveryDay'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 9 / 20}}
                component={ImgCell }
                paddingLeftLs
            >
                <Animated>
                    <img
                        src = { EveryDay7 }
                        alt = 'EveryDay'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 9 / 20}}
                component={ImgCell }
                paddingRightLs
                lastLs
            >
                <Animated>
                    <img
                        src = { EveryDay8 }
                        alt = 'EveryDay'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 9 / 20}}
                component={ImgCell }
                paddingLeftLs
                last
            >
                <Animated>
                    <img
                        src = { EveryDay9 }
                        alt = 'EveryDay'
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default Image
