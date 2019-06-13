/* Modules */
import React              from 'react'
import Grid               from 'styled-components-grid'
/* Components */
import Animated           from '../../global/Animated'
/* Styles */
import { Container,
         SectionContentBlock,
         CaseText,
         TransferSs } from '../../../styles/global/GENERAL';
import { SymbolSection,
         SymbolRow,
         SymbolItem,
         SymbolPlus,
         Plus }           from '../../../styles/cases-styles/symbol-cases'
/* Statics */
import UBS_ornament       from '../../../img/cases/ubs/svg/ubs_ornament.svg'
import UBS_team           from '../../../img/cases/ubs/svg/ubs_team.svg'
import UBS_technology     from '../../../img/cases/ubs/svg/ubs_technology.svg'

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
            >
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 5 / 8, ls: 12 / 20, ws: 10 / 20}}
                component={SectionContentBlock}
            >
                <Animated>
                    <Grid
                        component={SymbolRow}
                    >
                        <Grid.Unit
                            size={{ss: 1 / 4, ms: 2 / 8, ls: 2 / 12}}
                            component={SymbolItem}
                            marginRight
                        >
                            <img src={ UBS_ornament } alt=""/>
                            <CaseText last center fsSs12>
                                Национальный <TransferSs/>орнамент
                            </CaseText>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 8, ms: 1 / 8, ls: 1 / 12}}
                            component={SymbolPlus}
                            marginRight
                        >
                            <Plus />
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 4, ms: 2 / 8, ls: 2 / 12}}
                            component={SymbolItem}
                            marginRight
                        >
                            <img src={ UBS_team } alt=""/>
                            <CaseText last center fsSs12>
                                Команда
                            </CaseText>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 8, ms: 1 / 8, ls: 1 / 12}}
                            component={SymbolPlus}
                            marginRight
                        >
                            <Plus />
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 1 / 4, ms: 2 / 8, ls: 2 / 12}}
                            component={SymbolItem}
                            marginRight
                        >
                            <img src={ UBS_technology } alt=""/>
                            <CaseText last center fsSs12>
                                Технологии
                            </CaseText>
                        </Grid.Unit>
                    </Grid>
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}} />
        </Grid>
    </Grid.Unit>

export default Symbol
