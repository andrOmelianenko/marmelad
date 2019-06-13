/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { ContainerImg,
    ImgSection,
    ImgCell,
    WhirlImgCell }      from '../../../styles/cases-styles/image-cases'
/* Statics */
import Whirl1        from '../../../img/cases/whirl/slaid6.jpg'
import Whirl2        from '../../../img/cases/whirl/macbook1.jpg'
import Whirl3        from '../../../img/cases/whirl/macbook2.jpg'
import Whirl4        from '../../../img/cases/whirl/macbook3.jpg'
import Whirl5        from '../../../img/cases/whirl/shop.jpg'
import Whirl6        from '../../../img/cases/whirl/ipads.jpg'

const Image = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
        whirl
    >
        <Grid
            component={ContainerImg}
            halign='center'
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={WhirlImgCell}
            >
                <Animated>
                    <img src={Whirl1} alt='' />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingLeftLs
                lastLs
            >
                <Animated>
                    <img src={Whirl2} alt='' />
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ls: 10 / 20}} visible={{ss: false, ls: true}} />
            <Grid.Unit size={{ls: 10 / 20}} visible={{ss: false, ls: true}} />
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingRightLs
                lastLs
            >
                <Animated>
                    <img src={Whirl3} alt='' />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingLeftLs
            >
                <Animated>
                    <img src={Whirl4} alt='' />
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ls: 10 / 20}} visible={{ss: false, ls: true}} />
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
            >
                <Animated>
                    <img src={Whirl5} alt='' />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                last
            >
                <Animated>
                    <img src={Whirl6} alt='' />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default Image
