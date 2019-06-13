/* Modules */
import React                from 'react'
import Grid                 from 'styled-components-grid'
/* Components */
import Animated             from '../../global/Animated'
/* Styles */
import { ContainerImg,
         ImgSection,
         ImgCell }          from '../../../styles/cases-styles/image-cases'
/* Statics */
import artMarket_5_1366     from '../../../img/cases/artMarket/artMarket_5_1366.jpg'
import artMarket_6_1366     from '../../../img/cases/artMarket/artMarket_6_1366.jpg'
import artMarket_7_1366     from '../../../img/cases/artMarket/artMarket_7_1366.jpg'
import artMarket_8_1366     from '../../../img/cases/artMarket/artMarket_8_1366.jpg'
import artMarket_9_1366     from '../../../img/cases/artMarket/artMarket_9_1366.jpg'
import artMarket_10_1366    from '../../../img/cases/artMarket/artMarket_10_1366.jpg'
import artMarket_11_1366    from '../../../img/cases/artMarket/artMarket_11_1366.jpg'
import artMarket_12_1366    from '../../../img/cases/artMarket/artMarket_12_1366.jpg'

const Image = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
        artMarket3
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
                        src={ artMarket_5_1366 }
                        alt='ArtMarket'
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
                marginNone
            >
                <Animated>
                    <img
                        src={ artMarket_6_1366 }
                        alt='ArtMarket'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingSsMs
                paddingLeftLs
                marginNone
            >
                <Animated>
                    <img
                        src={ artMarket_7_1366 }
                        alt='ArtMarket'
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
            >
                <Animated>
                    <img
                        src={ artMarket_8_1366 }
                        alt='ArtMarket'
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
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
                        src={ artMarket_9_1366 }
                        alt='ArtMarketArtMarket'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                paddingLs
                >
                <Animated>
                    <img
                        src={ artMarket_10_1366 }
                        alt='ArtMarket'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                paddingLs
                >
                <Animated>
                    <img
                        src={ artMarket_11_1366 }
                        alt='ArtMarket'
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
                        src={ artMarket_12_1366 }
                        alt='ArtMarket'
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default Image
