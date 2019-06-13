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
import navicomEnergy_2            from '../../../img/cases/navicomEnergy/navicomEnergy_2_1366.jpg'
import navicomEnergy_3            from '../../../img/cases/navicomEnergy/navicomEnergy_3_1366.jpg'

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
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                paddingLs
                >
                <Animated>
                    <img
                        src={navicomEnergy_2}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                paddingLs
                last
                >
                <Animated>
                    <img
                        src={navicomEnergy_3}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default Image
