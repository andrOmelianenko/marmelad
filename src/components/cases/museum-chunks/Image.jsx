/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { ContainerImg,
         ImgSection,
         ImgCell }          from '../../../styles/cases-styles/image-cases'
import   museum_2            from '../../../img/cases/museum/museum_2.jpg'


const Image = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
        museum
    >
        <Grid
            component={ContainerImg}
            halign='center'
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingLeftLs
                last
            >
                <Animated>
                    <img
                        src={museum_2}
                        alt='u21'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ls: 10 / 20}} visible={{ss: false, ls: true}} />
        </Grid>
    </Grid.Unit>

export default Image