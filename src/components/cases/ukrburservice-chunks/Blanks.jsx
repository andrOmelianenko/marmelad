/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { ContainerImg,
         ImgCell }      from '../../../styles/cases-styles/image-cases'
import { BlanksSection,
         BlanksRow }    from '../../../styles/cases-styles/blanks-cases'
/* Statics */
import ubs_blank_1      from '../../../img/cases/ubs/ubs_blank_1_1366.png'
import ubs_blank_2      from '../../../img/cases/ubs/ubs_blank_2_1366.png'
import ubs_blank_3      from '../../../img/cases/ubs/ubs_blank_3_1366.png'

const Blanks = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={BlanksSection}
        >
        <Grid
            component={ContainerImg}
            paddingSide
            halign='left'
            >
            <Grid.Unit
                size={{ss: 5 / 6, ms: 6 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingSsMs
                paddingLs
                order2
                last
            >
                <Animated>
                    <img
                        src={ ubs_blank_3 }
                        alt='u21'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingLs
                order1
                last
                >
                <Animated>
                    <Grid
                        component={BlanksRow}
                        halign='left'
                        >
                        <Grid.Unit
                            size={{ss: 5 / 6, ms: 6 / 8, ls: 10 / 10}}
                            component={ImgCell}
                            paddingSsMs
                            lastLs
                            >
                            <img
                                src={ ubs_blank_1 }
                                alt='u21'
                            />
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 2 / 4, ms: 4 / 8, ls: 6 / 10}}
                            component={ImgCell}
                            paddingSsMs
                            marginTopLs
                            ubs
                            last
                            >
                            <img
                                src={ ubs_blank_2 }
                                alt='u21'
                            />
                        </Grid.Unit>
                    </Grid>
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default Blanks
