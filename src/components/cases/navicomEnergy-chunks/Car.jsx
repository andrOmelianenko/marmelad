/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { ContainerImg } from '../../../styles/cases-styles/image-cases'
import { CarSection,
         ImgCarNavicom }  from '../../../styles/cases-styles/car-cases'
/* Statics */
import navicomEnergy_car1_grid  from '../../../img/cases/navicomEnergy/svg/navicomEnergy_car1_grid.svg'
import navicomEnergy_car2_grid  from '../../../img/cases/navicomEnergy/svg/navicomEnergy_car2_grid.svg'
import navicomEnergy_car3_grid  from '../../../img/cases/navicomEnergy/svg/navicomEnergy_car3_grid.svg'
import navicomEnergy_car4       from '../../../img/cases/navicomEnergy/svg/navicomEnergy_car4.svg'
import navicomEnergy_car5       from '../../../img/cases/navicomEnergy/svg/navicomEnergy_car5.svg'
import navicomEnergy_car6       from '../../../img/cases/navicomEnergy/svg/navicomEnergy_car6.svg'

const Car = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={CarSection }
        MockUp
    >
        <Grid
            component={ContainerImg }
            halign='center'
            paddingSide
            >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 77 / 200}}
                component={ImgCarNavicom}
                navicomEnergy
                paddingSsMs
                order2
            >
                <Animated>
                    <img
                        src={navicomEnergy_car2_grid}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 77 / 200}}
                component={ImgCarNavicom}
                navicomEnergy
                paddingSsMs
                order5
            >
                <Animated>
                    <img
                        src={navicomEnergy_car5}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 36 / 100, ls: 59 / 400}}
                component={ImgCarNavicom}
                navicomEnergy
                order3
            >
                <Animated>
                    <img
                        src={navicomEnergy_car3_grid}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 36 / 100, ls: 59 / 400}}
                component={ImgCarNavicom}
                navicomEnergy
                order6
            >
                <Animated>
                    <img
                        src={navicomEnergy_car6}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 77 / 200}}
                visible={{ss: false, ls: true}}
                component={ImgCarNavicom}
                navicomEnergy
                order1
            >
                <Animated>
                    <img
                        src={navicomEnergy_car1_grid}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 77 / 200}}
                visible={{ss: false, ls: true}}
                component={ImgCarNavicom}
                navicomEnergy
                order4
            >
                <Animated>
                    <img
                        src={navicomEnergy_car4}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default Car
