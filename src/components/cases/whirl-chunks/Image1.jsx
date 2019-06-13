/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { ContainerImg,
         ImgSection,
         ImgCell }      from '../../../styles/cases-styles/image-cases'
import Whirl          from '../../../img/cases/whirl/whirl_image1.jpg';

const Image1 = () =>

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
                component={ImgCell}
                paddingLs
                last
                >
                <Animated>
                    <img src={Whirl} alt='' />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>;

export default Image1