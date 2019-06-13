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
import artMarket_4      from '../../../img/cases/artMarket/artMarket_4_1366.jpg'

const SecondImage = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
        artMarket_2
    >
        <Grid
            component={ContainerImg}
            halign='center'
            paddingSide
        >
            <Grid.Unit
                component={ImgCell}
                paddingSsMs
                paddingLs
                last
            >
                <Animated>
                    <img
                        src={artMarket_4}
                        alt=''
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default SecondImage