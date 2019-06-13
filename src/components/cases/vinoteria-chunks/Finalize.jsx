/* Modules */
import React                    from 'react'
import Grid                     from 'styled-components-grid'
/* Components */
import Animated                 from '../../global/Animated';
/* Styles */
import { ContainerImg }         from '../../../styles/cases-styles/image-cases'
import { FinalizeSection,
         FinalizeImgCell,
         FinalizeImgLogo }      from '../../../styles/cases-styles/finalize-cases';
/* Statics */
import vinoteria_logo_s         from '../../../img/cases/vinoteria/svg/vino_logo_grid_1.svg';
import vinoteria_logo_r         from '../../../img/cases/vinoteria/svg/vino_logo_grid_2.svg';

const Finalize = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={FinalizeSection}
        vinoteria
    >
        <ContainerImg
            paddingSide
        >
            <FinalizeImgCell
                last
            >
                <Grid
                    halign='center'
                    valign='bottom'
                >
                    <Grid.Unit
                        size={{ss: 1, ms: 55 / 100, ls: 8 / 22}}
                        component={FinalizeImgLogo}
                        square
                    >
                        <Animated>
                            <img
                                src={vinoteria_logo_s}
                                alt=''
                            />
                        </Animated>
                    </Grid.Unit>
                    <Grid.Unit
                        size={{ss: 47 / 100, ms: 45 / 100, ls: 6 / 22}}
                        component={FinalizeImgLogo}
                        rectangle
                    >
                        <Animated>
                            <img
                                src={vinoteria_logo_r}
                                alt=''
                            />
                        </Animated>
                    </Grid.Unit>
                </Grid>
            </FinalizeImgCell>
        </ContainerImg>
    </Grid.Unit>

export default Finalize
