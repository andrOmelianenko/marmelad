/* Modules */
import React                    from 'react'
import Grid                     from 'styled-components-grid'
/* Components */
import Animated                 from '../../global/Animated';
/* Styles */
import { ContainerImg }         from '../../../styles/cases-styles/image-cases'
import { FinalizeSection,
         FinalizeImgCell,
         FinalizeImgTile,
         FinalizeImgLogoGrid }      from '../../../styles/cases-styles/finalize-cases';
/* Statics */
import YoOy_asset          from '../../../img/cases/yoy/svg/Yoy_logo_grid.svg';

const Finalize = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={FinalizeSection }
        yoOy
    >
        <ContainerImg>
            <FinalizeImgCell
                yoOy
            >
                <Animated>
                    <FinalizeImgTile>
                        <FinalizeImgLogoGrid yoOy>
                            <img
                                src={YoOy_asset}
                                alt='YoOy'
                            />
                        </FinalizeImgLogoGrid>
                    </FinalizeImgTile>
                </Animated>
            </FinalizeImgCell>
        </ContainerImg>
    </Grid.Unit>

export default Finalize
