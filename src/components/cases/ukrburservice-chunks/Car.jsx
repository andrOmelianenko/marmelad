/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { ContainerImg } from '../../../styles/cases-styles/image-cases'
import { CarSection,
         ImgCar,
         ImgCarSmall }  from '../../../styles/cases-styles/car-cases'
/* Statics */
import ubs_car_1        from '../../../img/cases/ubs/svg/ubs_car_1.svg'
import ubs_car_1_320        from '../../../img/cases/ubs/svg/ubs_car_1_320.svg'
import ubs_car_1_grid   from '../../../img/cases/ubs/svg/ubs_car_1_grid.svg'
import ubs_car_1_320_grid   from '../../../img/cases/ubs/svg/ubs_car_1_320_grid.svg'
import ubs_car_2        from '../../../img/cases/ubs/svg/ubs_car_2.svg'
import ubs_car_2_grid   from '../../../img/cases/ubs/svg/ubs_car_2_grid.svg'

const Car = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={CarSection}
        ubs
    >
        <Grid
            component={ContainerImg}
            halign='center'
            paddingSide
            >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                visible={{ss: true, ls: false}}
                component={ImgCarSmall}
                paddingSsMs
                paddingLeft
                ubs
                order1
            >
                <Animated>
                    <img
                        src={ubs_car_1_320_grid}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                visible={{ss: false, ls: true}}
                component={ImgCarSmall}
                paddingSsMs
                paddingLeft
                ubs
                order1
            >
                <Animated>
                    <img
                        src={ubs_car_1_grid}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                visible={{ss: true, ls: false}}
                component={ImgCarSmall}
                paddingSsMs
                paddingLeft
                ubs
                order3
                lastLs
            >
                <Animated>
                    <img
                        src={ubs_car_1_320}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                visible={{ss: false, ls: true}}
                component={ImgCarSmall}
                paddingSsMs
                paddingLeft
                ubs
                order3
                lastLs
            >
                <Animated>
                    <img
                        src={ubs_car_1}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCar}
                paddingSsMs
                paddingRight
                ubs
                order2
            >
                <Animated>
                    <img
                        src={ubs_car_2_grid}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCar}
                paddingSsMs
                paddingRight
                ubs
                order4
                last
            >
                <Animated>
                    <img
                        src={ubs_car_2}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default Car