/* Modules */
import React                    from 'react'
import Grid                     from 'styled-components-grid'
/* Components */
import Animated                 from '../../global/Animated'
/* Styles */
import { OptionsSection,
         OptionsWhiteContainer,
         OptionsRedContainer,
         OptionsBlackContainer,
         OptionsItem }          from '../../../styles/cases-styles/options-cases'
/* Statics */
import UBSLogoOne               from '../../SVG/UBSLogo_1'
import UBSLogoTwo               from '../../SVG/UBSLogo_2'
import UBSLogoThree             from '../../SVG/UBSLogo_3'
import UBSLogoFour              from '../../SVG/UBSLogo_4'
import UBSLogoFive              from '../../SVG/UBSLogo_5'
import UBSLogoSix               from '../../SVG/UBSLogo_6'
import UBSLogoSeven             from '../../SVG/UBSLogo_7'
import UBSLogoEight             from '../../SVG/UBSLogo_8'

const Options = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={OptionsSection}
    >
        <Animated>
            <Grid
                component={OptionsWhiteContainer}
                halign='center'
            >
                <Grid.Unit
                    size={{ss: 2 / 4, ms: 21 / 100}}
                    component={OptionsItem}
                    marginBottom
                    order1
                    firstRow
                >
                    <UBSLogoOne/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 2 / 4, ms: 21 / 200}}
                    component={OptionsItem}
                    marginBottom
                    order3
                    vertical
                    firstRow
                >
                    <UBSLogoFive/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 2 / 4, ms: 21 / 100}}
                    component={OptionsItem}
                    order2
                    firstRow
                >
                    <UBSLogoThree/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 2 / 4, ms: 21 / 200}}
                    component={OptionsItem}
                    vertical
                    order4
                    firstRow
                    rightNone
                >
                    <UBSLogoSeven/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ms: 21 / 100}}
                    visible={{ss: false, ms: true}}
                    component={OptionsItem}
                    order5
                >
                    <UBSLogoTwo/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ms: 21 / 200}}
                    visible={{ss: false, ms: true}}
                    component={OptionsItem}
                    vertical
                    order7
                >
                    <UBSLogoSix/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ms: 21 / 100}}
                    visible={{ss: false, ms: true}}
                    component={OptionsItem}
                    order6
                >
                    <UBSLogoFour/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ms: 21 / 200}}
                    visible={{ss: false, ms: true}}
                    component={OptionsItem}
                    vertical
                    order8
                    rightNone
                >
                    <UBSLogoEight/>
                </Grid.Unit>
            </Grid>
        </Animated>
        <Animated>
            <Grid
                component={OptionsRedContainer}
                halign='center'
                valign='center'
            >
                <Grid.Unit
                    size={{ss: 2 / 4, ms: 21 / 100}}
                    component={OptionsItem}
                    marginBottom
                    order1
                    firstRow
                >
                    <UBSLogoOne/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 2 / 4, ms: 21 / 200}}
                    component={OptionsItem}
                    marginBottom
                    order3
                    vertical
                    firstRow
                >
                    <UBSLogoFive/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 2 / 4, ms: 21 / 100}}
                    component={OptionsItem}
                    order2
                    firstRow
                >
                    <UBSLogoThree/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 2 / 4, ms: 21 / 200}}
                    component={OptionsItem}
                    vertical
                    order4
                    firstRow
                    rightNone
                >
                    <UBSLogoSeven/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ms: 21 / 100}}
                    visible={{ss: false, ms: true}}
                    component={OptionsItem}
                    order5
                >
                    <UBSLogoTwo/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ms: 21 / 200}}
                    visible={{ss: false, ms: true}}
                    component={OptionsItem}
                    vertical
                    order7
                >
                    <UBSLogoSix/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ms: 21 / 100}}
                    visible={{ss: false, ms: true}}
                    component={OptionsItem}
                    order6
                >
                    <UBSLogoFour/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ms: 21 / 200}}
                    visible={{ss: false, ms: true}}
                    component={OptionsItem}
                    vertical
                    order8
                    rightNone
                >
                    <UBSLogoEight/>
                </Grid.Unit>
            </Grid>
        </Animated>
        <Animated>
            <Grid
                component={OptionsBlackContainer}
                halign='center'
                valign='center'
            >
                <Grid.Unit
                    size={{ss: 2 / 4, ms: 21 / 100}}
                    component={OptionsItem}
                    marginBottom
                    order1
                    firstRow
                >
                    <UBSLogoOne/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 2 / 4, ms: 21 / 200}}
                    component={OptionsItem}
                    marginBottom
                    order3
                    vertical
                    firstRow
                >
                    <UBSLogoFive/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 2 / 4, ms: 21 / 100}}
                    component={OptionsItem}
                    order2
                    firstRow
                >
                    <UBSLogoThree/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 2 / 4, ms: 21 / 200}}
                    component={OptionsItem}
                    vertical
                    order4
                    firstRow
                    rightNone
                >
                    <UBSLogoSeven/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ms: 21 / 100}}
                    visible={{ss: false, ms: true}}
                    component={OptionsItem}
                    order5
                >
                    <UBSLogoTwo/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ms: 21 / 200}}
                    visible={{ss: false, ms: true}}
                    component={OptionsItem}
                    vertical
                    order7
                >
                    <UBSLogoSix/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ms: 21 / 100}}
                    visible={{ss: false, ms: true}}
                    component={OptionsItem}
                    order6
                >
                    <UBSLogoFour/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ms: 21 / 200}}
                    visible={{ss: false, ms: true}}
                    component={OptionsItem}
                    vertical
                    order8
                    rightNone
                >
                    <UBSLogoEight/>
                </Grid.Unit>
            </Grid>
        </Animated>
    </Grid.Unit>

export default Options
