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
import artMarket_1      from '../../../img/cases/artMarket/artMarket_1_1366.jpg'
import artMarket_2      from '../../../img/cases/artMarket/artMarket_2_1366.jpg'
import artMarket_3      from '../../../img/cases/artMarket/artMarket_3_1366.jpg'

const FirstImages = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection }
        artMarket1
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
                        src={artMarket_1}
                        alt='ArtMarket'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ls: 10 / 20}} visible={{ss: false, ls: true}} />
            <Grid.Unit size={{ls: 10 / 20}} visible={{ss: false, ls: true}} />
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingRightLs
                marginNone
            >
                <Animated>
                    <img
                        src={artMarket_2}
                        alt='ArtMarket'
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
                        src={artMarket_3}
                        alt='ArtMarket'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ls: 10 / 20}} visible={{ss: false, ls: true}} />
        </Grid>
    </Grid.Unit>

export default FirstImages