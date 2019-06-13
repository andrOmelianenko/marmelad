/* Modules */
import   React          from 'react'
import   Grid           from 'styled-components-grid'
/* Components */
import   Animated       from '../../global/Animated'
/* Styles */
import { ContainerImg,
         ImgSection,
         ImgCell }      from '../../../styles/pages-styles/about/image-cases'
/* Statics */
import   about          from '../../../img/about.jpg'

const FirstImage = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
    >
        <Grid
            halign='center'
            component={ContainerImg }
            paddingSide
        >
            <Grid.Unit
                component={ImgCell }
                paddingSsMs
                paddingLs
                last
            >
                <Animated>
                    <img
                        src = { about }
                        alt = ' about '
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default FirstImage