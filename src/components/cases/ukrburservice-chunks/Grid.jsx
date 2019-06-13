/* Modules */
import React                    from 'react'
import Grid                     from 'styled-components-grid'
/* Components */
import Animated                 from '../../global/Animated'
/* Styles */
import { Container,
         SectionHeadingBlock,
         SectionContentBlock,
         // CaseText,
         SectionHeading }       from '../../../styles/global/GENERAL';
import { GridSection,
         GridImgCell }          from '../../../styles/cases-styles/grid-cases'
/* Statics */
import ubs_grid                 from '../../../img/cases/ubs/svg/ubs_grid.svg'

const GridBlock = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={GridSection}
    >
        <Grid
            component={Container}
            halign='center'
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 3 / 8, ls: 6 / 20, ws: 6 / 20}}
                component={SectionHeadingBlock}
                hight
            >
                <Animated>
                    <SectionHeading>
                        Сетка
                    </SectionHeading>
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 5 / 8, ls: 12 / 20, ws: 10 / 20}}
                component={SectionContentBlock}
            >
                {/*<Animated>*/}
                    {/*<CaseText last>*/}
                        {/*The arrow in the logo conveys the dynamics and reflects an important component of the brand concept – updating, moving forward, changing. Also, the arrow is a pointer that emphasizes the desire for individuality and vector In the choice of their style. The inscription Every week says about another element of the concept - a weekly update of the collections.*/}
                    {/*</CaseText>*/}
                {/*</Animated>*/}
            </Grid.Unit>
            <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}} />
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 18 / 20, ws: 18 / 20}}
                component={GridImgCell}
                paddingSsMs
                paddingLs
                paddingRs
                last
            >
                <Animated>
                    <img
                        src = { ubs_grid }
                        alt = ' ubs '
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default GridBlock
