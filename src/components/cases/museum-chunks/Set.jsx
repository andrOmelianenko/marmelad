/* Modules */
import React                    from 'react'
import Grid                     from 'styled-components-grid'
/* Components */
import Animated                 from '../../global/Animated'
/* Styles */
import { OptionsSection,
         MuseumWhiteContainer,
         MuseumBlueContainer,
         MuseumItem }          from '../../../styles/cases-styles/options-cases'
/* Statics */
import MuseumLogoOne               from '../../SVG/MuseumLogo_1'
import MuseumLogoTwo               from '../../SVG/MuseumLogo_2'
import MuseumLogoThree             from '../../SVG/MuseumLogo_3'

const Set = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={OptionsSection}
        museum
    >
        <Animated>
            <Grid
                component={MuseumWhiteContainer}
                halign='center'
            >
                <Grid.Unit
                    size={{ss: 30/100, ls: 31 / 100}}
                    component={MuseumItem}
                    museum
                >
                    <MuseumLogoOne color = { '#000000' } />
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 30/100, ls: 31 / 100}}
                    component={MuseumItem}
                    museum
                >
                    <MuseumLogoTwo color = { '#000000' } />
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 30/100, ls: 31 / 100}}
                    component={MuseumItem}
                    museum
                    left
                >
                    <MuseumLogoThree color = { '#000000' } />
                </Grid.Unit>
            </Grid>
        </Animated>
        <Animated>
            <Grid
                component={MuseumBlueContainer}
                halign='center'
            >
                <Grid.Unit
                    size={{ss: 30/100, ls: 31 / 100}}
                    component={MuseumItem}
                    museum
                >
                    <MuseumLogoOne color = { '#ffffff' } />
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 30/100, ls: 31 / 100}}
                    component={MuseumItem}
                    museum
                >
                    <MuseumLogoTwo color = { '#ffffff' } />
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 30/100, ls: 31 / 100}}
                    component={MuseumItem}
                    museum
                    left
                >
                    <MuseumLogoThree color = { '#ffffff' } />
                </Grid.Unit>
            </Grid>
        </Animated>
    </Grid.Unit>;

export default Set
