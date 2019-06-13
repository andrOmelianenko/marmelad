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
import u21_4            from '../../../img/cases/u21/u21_4_1600.jpg'
import u21_5            from '../../../img/cases/u21/u21_5_1600.jpg'
import u21_6            from '../../../img/cases/u21/u21_6_1600.jpg'
import u21_7            from '../../../img/cases/u21/u21_7_1600.jpg'
import u21_8            from '../../../img/cases/u21/u21_8_1600.jpg'

const Image = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
        u21_3
    >
        <Grid
            component={ContainerImg}
            halign='center'
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell }
                paddingLs
            >
                <Animated>
                    <img
                        src={ u21_4 }
                        alt='u21'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ls: 10 / 20}} visible={{ss: false, ls: true}} />
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingRightLs
                marginNone
            >
                <Animated>
                    <img
                        src={ u21_5 }
                        alt='u21'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingLeftLs
            >
                <Animated>
                    <img
                        src={ u21_6 }
                        alt='u21'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ls: 10 / 20}} visible={{ss: false, ls: true}} />
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell }
                paddingLs
            >
                <Animated>
                    <img
                        src={ u21_7 }
                        alt='u21'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell }
                paddingLs
                last
            >
                <Animated>
                    <img
                        src={ u21_8 }
                        alt='u21'
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default Image
