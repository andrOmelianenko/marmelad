/* Modules */
import React                    from 'react'
import Grid                     from 'styled-components-grid'
/* Components */
import Animated                 from '../../global/Animated'
/* Styles */
import { Container,
         SectionHeadingBlock,
         SectionContentBlock,
         CaseText }       from '../../../styles/global/GENERAL';
import { SymbolSection,
         SymbolRow,
         SymbolItem,
         SymbolPlus,
         Plus }                 from '../../../styles/cases-styles/symbol-cases'
/* Statics */
import navicomEnergy_telesystem from '../../../img/cases/navicomEnergy/svg/navicomEnergy_telesystem.svg'
import navicomEnergy_direction  from '../../../img/cases/navicomEnergy/svg/navicomEnergy_direction.svg'
import navicomEnergy_technology from '../../../img/cases/navicomEnergy/svg/navicomEnergy_technology.svg'
import navicomEnergy_letter     from '../../../img/cases/navicomEnergy/svg/navicomEnergy_letter.svg'

const Symbol = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={SymbolSection}
    >
        <Grid
            component={Container}
            halign='center'
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 3 / 8, ls: 6 / 20, ws: 6 / 20}}
                component={SectionHeadingBlock}
            />
            <Grid.Unit
                size={{ss: 4 / 4, ms: 5 / 8, ls: 12 / 20, ws: 10 / 20}}
                component={SectionContentBlock}
                paddingNone
            >
                <Animated>
                    <Grid
                        component={SymbolRow}
                        navicomEnergy
                    >
                        <Grid.Unit
                            size={{ss: 26 / 100, ms: 14 / 100}}
                            component={SymbolItem}
                            NavicomEnergy
                            NavicomEnergy1
                        >
                            <img src={ navicomEnergy_telesystem } alt=""/>
                            <CaseText fsSs12 last center>
                                Телесистемы
                            </CaseText>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 100, ms: 3 / 100}}
                            component={SymbolPlus}
                            NavicomEnergy
                            NavicomEnergy2
                        >
                            <Plus />
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 26 / 100, ms: 12 / 100}}
                            component={SymbolItem}
                            NavicomEnergy
                            NavicomEnergy3
                        >
                            <img src={ navicomEnergy_direction } alt=""/>
                            <CaseText fsSs12 last center>
                                Направление
                            </CaseText>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 100, ms: 3 / 100}}
                            component={SymbolPlus}
                            NavicomEnergy
                            NavicomEnergy4
                        >
                            <Plus />
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 23 / 100, ms: 14 / 100}}
                            component={SymbolItem}
                            NavicomEnergy
                            NavicomEnergy5
                        >
                            <img src={ navicomEnergy_technology } alt=""/>
                            <CaseText fsSs12 last center>
                                Технологии
                            </CaseText>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 100, ms: 3 / 100}}
                            component={SymbolPlus}
                            NavicomEnergy
                            NavicomEnergy6
                        >
                            <Plus />
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 22 / 100, ms: 14 / 100}}
                            component={SymbolItem}
                            NavicomEnergy
                            NavicomEnergy7
                        >
                            <img src={ navicomEnergy_letter } alt="" />
                            <CaseText fsSs12 last center>
                                Буква
                            </CaseText>
                        </Grid.Unit>
                    </Grid>
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}} />
        </Grid>
    </Grid.Unit>

export default Symbol
