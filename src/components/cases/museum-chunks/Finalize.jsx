/* Modules */
import React              from 'react'
import Grid               from 'styled-components-grid'
/* Components */
import Animated           from '../../global/Animated';
/* Styles */
import { ContainerImg,
         MuseumCell,
         MuseumGrid  }  from '../../../styles/cases-styles/image-cases'
import { FinalizeSection}  from '../../../styles/cases-styles/finalize-cases';
/* Statics */
import Museum_logotype    from '../../../img/cases/museum/svg/museum_logotype.svg';

const Finalize = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={FinalizeSection}
        museum
    >
        <ContainerImg>
            <Animated>
                <Grid
                    component={MuseumGrid}
                    halign='center'
                    museum_logo
                >
                    <Grid.Unit
                        size={{ss: 47 / 100, ls: 65 / 200}}
                        component={MuseumCell}
                        museum_logo
                        paddingLs
                    >
                        <img
                            src={Museum_logotype}
                            alt='Museum logotype'
                        />
                    </Grid.Unit>
                </Grid>
            </Animated>
        </ContainerImg>
    </Grid.Unit>;

export default Finalize
