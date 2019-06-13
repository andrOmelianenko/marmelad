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
import u21_2            from '../../../img/cases/u21/u21_2_1600.jpg'
import u21_3            from '../../../img/cases/u21/u21_3_1600.jpg'

const SecondImages = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
        u21_2
    >
        <Grid
            component={ContainerImg}
            halign='center'
            paddingSide
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingSsMs
                paddingLeftLs
                marginNone
            >
                <Animated>
                    <img
                        src={ u21_2 }
                        alt='u21'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ls: 10 / 20}} visible={{ss: false, ls: true}} />
            <Grid.Unit size={{ls: 10 / 20}} visible={{ss: false, ls: true}} />
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingSsMs
                paddingRightLs
                last
            >
                <Animated>
                    <img
                        src={ u21_3 }
                        alt='u21'
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default SecondImages
