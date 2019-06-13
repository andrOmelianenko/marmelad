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
import vinoteria_2    from '../../../img/cases/vinoteria/vinoteria_image2.jpg'
import vinoteria_3    from '../../../img/cases/vinoteria/vinoteria_image3.jpg'
import vinoteria_4    from '../../../img/cases/vinoteria/vinoteria_image4.jpg'
import vinoteria_5    from '../../../img/cases/vinoteria/vinoteria_image5.jpg'
import vinoteria_6    from '../../../img/cases/vinoteria/vinoteria_image6.jpg'

const Image = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
    >
        <Grid
            component={ContainerImg }
            halign='center'
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                paddingLs
                >
                <Animated>
                    <img
                        src={vinoteria_2}
                        alt=''
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
                        src={vinoteria_3}
                        alt=''
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
                        src={vinoteria_4}
                        alt=''
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
                        src={vinoteria_5}
                        alt=''
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
                        src={vinoteria_6}
                        alt=''
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default Image
