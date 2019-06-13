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
import u21_1            from '../../../img/cases/u21/u21_1_1600.jpg'

const FirstImage = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
        first
    >
        <Grid
            halign='left'
            component={ContainerImg}
            paddingSide_ms
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 4 / 8, ls: 9 / 20}}
                component={ImgCell}
                paddingMs
                last
            >
                <Animated>
                    <img
                        src = { u21_1 }
                        alt = ' u21 '
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default FirstImage