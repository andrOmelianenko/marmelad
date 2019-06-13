/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { ContainerImg,
         ImgSection,
         ImgCell }      from '../../../styles/cases-styles/image-cases'
import { Vinoteria }  from '../../../styles/cases-styles/imageBg-cases'

const ImageBg = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
        vinoteria
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
                    <Vinoteria />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>;

export default ImageBg