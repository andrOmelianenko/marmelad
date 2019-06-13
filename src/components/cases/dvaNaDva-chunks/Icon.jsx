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
import { IconSection,
         IconRow,
         IconItem }        from '../../../styles/cases-styles/icon-cases'
/* Statics */
import   dvaNaDva_icon1               from '../../../img/cases/2x2/svg/dvaNaDva_icon01.svg'
import   dvaNaDva_icon2               from '../../../img/cases/2x2/svg/dvaNaDva_icon02.svg'
import   dvaNaDva_icon3               from '../../../img/cases/2x2/svg/dvaNaDva_icon03.svg'
import   dvaNaDva_icon4               from '../../../img/cases/2x2/svg/dvaNaDva_icon04.svg'
import   dvaNaDva_icon5               from '../../../img/cases/2x2/svg/dvaNaDva_icon05.svg'
import   dvaNaDva_icon6               from '../../../img/cases/2x2/svg/dvaNaDva_icon06.svg'
import   dvaNaDva_icon7               from '../../../img/cases/2x2/svg/dvaNaDva_icon07.svg'
import   dvaNaDva_icon8               from '../../../img/cases/2x2/svg/dvaNaDva_icon08.svg'
import   dvaNaDva_icon9               from '../../../img/cases/2x2/svg/dvaNaDva_icon09.svg'
import   dvaNaDva_icon10              from '../../../img/cases/2x2/svg/dvaNaDva_icon10.svg'

const Icon = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={IconSection}
        dvaNaDva
    >
        <Grid
            component={Container}
            halign='center'
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 3 / 8, ls: 6 / 20, ws: 6 / 20}}
                component={SectionHeadingBlock}
                icon
            >
                <Animated>
                    <SectionHeading>
                        Иконки
                    </SectionHeading>
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 5 / 8, ls: 12 / 20, ws: 10 / 20}}
                component={SectionContentBlock}
                paddingNoneMs
                paddingNoneLs
            >
                <Animated>
                    <Grid
                        component={IconRow}
                        halign='center'
                    >
                        <Grid.Unit
                            size={{ss: 1 / 3, ms: 1 / 5}}
                            component={IconItem}
                            item1
                        >
                            <img src={dvaNaDva_icon1} alt=""/>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 3, ms: 1 / 5}}
                            component={IconItem}
                            item2
                            center
                        >
                            <img src={dvaNaDva_icon2} alt=""/>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 3, ms: 1 / 5}}
                            component={IconItem}
                            item3
                            right
                        >
                            <img src={dvaNaDva_icon3} alt=""/>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 3, ms: 1 / 5}}
                            component={IconItem}
                            item4
                        >
                            <img src={dvaNaDva_icon4} alt=""/>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 3, ms: 1 / 5}}
                            component={IconItem}
                            item5
                            center
                        >
                            <img src={dvaNaDva_icon5} alt=""/>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 3, ms: 1 / 5}}
                            component={IconItem}
                            item6
                            right
                        >
                            <img src={dvaNaDva_icon6} alt=""/>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 3, ms: 1 / 5}}
                            component={IconItem}
                            item7
                        >
                            <img src={dvaNaDva_icon7} alt=""/>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 3, ms: 1 / 5}}
                            component={IconItem}
                            item8
                            center
                        >
                            <img src={dvaNaDva_icon8} alt=""/>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 3, ms: 1 / 5}}
                            component={IconItem}
                            item9
                            right
                        >
                            <img src={dvaNaDva_icon9} alt=""/>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 3, ms: 1 / 5}}
                            component={IconItem}
                            item10
                            center
                        >
                            <img src={dvaNaDva_icon10} alt=""/>
                        </Grid.Unit>
                    </Grid>
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}}/>
        </Grid>
    </Grid.Unit>

export default Icon
