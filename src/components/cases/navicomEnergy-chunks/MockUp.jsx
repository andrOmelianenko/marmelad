/* Modules */
import React                    from 'react'
import Grid                     from 'styled-components-grid'
/* Components */
import Animated                 from '../../global/Animated';
/* Styles */
import { ContainerImg }         from '../../../styles/cases-styles/image-cases'
import { MockUpSection,
         MockUpImgCell,
         MockUpImgForGrid }      from '../../../styles/cases-styles/mockup-cases';
/* Statics */
import navicomEnergy_box1          from '../../../img/cases/navicomEnergy/navicomEnergy_box1.png';
import navicomEnergy_box2          from '../../../img/cases/navicomEnergy/svg/navicomEnergy_box2.svg';
import navicomEnergy_box3          from '../../../img/cases/navicomEnergy/svg/navicomEnergy_box3.svg';

const MockUp = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={MockUpSection}
    >
        <Grid
            component={ContainerImg}
            halign='center'
            navicomEnergy
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={MockUpImgCell}
                first
                lastLs
            >
                <Animated>
                    <Grid
                        component={MockUpImgForGrid}
                        halign='center'
                        valign='center'
                    >
                        <Grid.Unit size={{ss: 85 / 100, ls: 90 / 100}}>
                            <img
                                src={navicomEnergy_box1}
                                alt='Navicom Energy'
                            />
                        </Grid.Unit>
                    </Grid>
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={MockUpImgCell}
                last
            >
                <Animated>
                    <Grid
                        component={MockUpImgForGrid}
                        halign='center'
                        valign='center'
                        twoMockUp
                    >
                        <Grid.Unit size={{ss: 73 / 100, ls: 70 / 100}}>
                            <img
                                src={navicomEnergy_box2}
                                alt='Navicom Energy'
                            />
                        </Grid.Unit>
                        <Grid.Unit size={{ss: 73 / 100, ls: 70 / 100}}>
                            <img
                                src={navicomEnergy_box3}
                                alt='Navicom Energy'
                            />
                        </Grid.Unit>
                    </Grid>
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default MockUp
