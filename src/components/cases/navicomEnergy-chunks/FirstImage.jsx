/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { ContainerImg,
         ImgSection,
         ImgCell}       from '../../../styles/cases-styles/image-cases'
/* Statics */
import navicomEnergy_1            from '../../../img/cases/navicomEnergy/navicomEnergy_1_1366.jpg'

const FirstImage = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection }
        first
    >
        <Grid
            halign='center'
            component={ContainerImg }
        >
            <Grid.Unit
                component={ImgCell }
                paddingLs
                last
            >
                <Animated>
                    <img
                        src = { navicomEnergy_1 }
                        alt = ' Navicom Energy '
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default FirstImage