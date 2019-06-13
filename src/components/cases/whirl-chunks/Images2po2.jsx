/* Modules */
import   React         from 'react'
import   Grid          from 'styled-components-grid'
/* Components */
import   Animated      from '../../global/Animated'
/* Styles */
import { ContainerImg,
         ImgSection,
         ImgCell }     from '../../../styles/cases-styles/image-cases'
/* Statics */
import   Whirl1        from '../../../img/cases/whirl/whirl_ill1.jpg'
import   Whirl2        from '../../../img/cases/whirl/whirl_ill2.jpg'
import   Whirl3        from '../../../img/cases/whirl/whirl_ill3.jpg'
import   Whirl4        from '../../../img/cases/whirl/whirl_ill4.jpg'

const Image = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
        whirl
    >
        <Grid
            component={ContainerImg}
            halign='center'
            paddingSide
        >
            <Grid.Unit
                size={{ss: 1 / 2}}
                component={ImgCell}
                paddingLeftLs
                last
            >
                <Animated>
                    <img src={Whirl1} alt='' />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 1 / 2}}
                component={ImgCell}
                paddingRightLs
                last
            >
                <Animated>
                    <img src={Whirl2} alt='' />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 1 / 2}}
                component={ImgCell}
                paddingLeftLs
                last
            >
                <Animated>
                    <img src={Whirl3} alt='' />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 1 / 2}}
                component={ImgCell}
                paddingRightLs
                last
            >
                <Animated>
                    <img src={Whirl4} alt='' />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default Image
