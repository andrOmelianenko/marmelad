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
import yoOy_2            from '../../../img/cases/yoy/yoOy_img2.jpg'
import yoOy_3            from '../../../img/cases/yoy/yoOy_img3.jpg'

const Image = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
        yoOy
    >
        <Grid
            component={ContainerImg}
            halign='center'
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell }
                paddingLs
                yoOyImg
            >
                <Animated>
                    <img
                        src={ yoOy_2 }
                        alt='u21'
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
                        src={ yoOy_3 }
                        alt='u21'
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default Image
