/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { ContainerImg,
         ImgSection,
         ImgCell }      from '../../../styles/cases-styles/image-cases'
import { EveryDayPen }  from '../../../styles/cases-styles/imageBg-cases'

const ImageBg = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
        >
        <Grid
            component={ContainerImg}
            halign='center'
            >
            <Grid.Unit
                component={ImgCell}
                last
                >
                <Animated>
                    <EveryDayPen />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>;

export default ImageBg