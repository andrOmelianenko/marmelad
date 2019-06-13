/* Modules */
import React                    from 'react'
import Grid                     from 'styled-components-grid'
/* Components */
import Animated                 from '../../global/Animated'

/* Styles */
import { Container,
         SectionHeadingBlock,
         SectionContentBlock,
         SectionHeading }       from '../../../styles/global/GENERAL';
import { ConceptionSection,
         ConceptionRow,
         ConceptionItem }       from '../../../styles/cases-styles/conception-cases'
/* Statics */
import ArtMarket_concept_1      from '../../../img/cases/artMarket/svg/artMarket_concept_1.svg'
import ArtMarket_concept_2      from '../../../img/cases/artMarket/svg/artMarket_concept_2.svg'
import ArtMarket_concept_3      from '../../../img/cases/artMarket/svg/artMarket_concept_3.svg'
import ArtMarket_concept_4      from '../../../img/cases/artMarket/svg/artMarket_concept_4.svg'
import ArtMarket_concept_5      from '../../../img/cases/artMarket/svg/artMarket_concept_5.svg'
import ArtMarket_concept_6      from '../../../img/cases/artMarket/svg/artMarket_concept_6.svg'

const Conception = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ConceptionSection}
    >
        <Grid
            halign='center'
            component={Container}
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 6 / 20, ws: 6 / 20}}
                component={SectionHeadingBlock}
            >
                <Animated>
                    <SectionHeading>
                        Концепции логотипа
                    </SectionHeading>
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 12 / 20, ws: 10 / 20}}
                component={SectionContentBlock}
                paddingTopNone
            >
                <Animated>
                    <Grid
                        component={ConceptionRow}
                        halign='center'
                        valign='center'
                    >
                        <Grid.Unit
                            size={{ss: 1 / 3, ls: 4 / 12}}
                            component={ConceptionItem}
                        >
                            <img src={ArtMarket_concept_1} alt=""/>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 3, ls: 4 / 12}}
                            component={ConceptionItem}
                            alignCenter
                        >
                            <img src={ArtMarket_concept_2} alt=""/>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 3, ls: 4 / 12}}
                            component={ConceptionItem}
                            alignRight
                        >
                            <img src={ArtMarket_concept_3} alt=""/>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 3, ls: 4 / 12}}
                            component={ConceptionItem}
                        >
                            <img src={ArtMarket_concept_4} alt=""/>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 3, ls: 4 / 12}}
                            component={ConceptionItem}
                            alignCenter
                        >
                            <img src={ArtMarket_concept_5} alt=""/>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 3, ls: 4 / 12}}
                            component={ConceptionItem}
                            alignRight
                        >
                            <img src={ArtMarket_concept_6} alt=""/>
                        </Grid.Unit>
                    </Grid>
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}}/>
        </Grid>
    </Grid.Unit>

export default Conception
