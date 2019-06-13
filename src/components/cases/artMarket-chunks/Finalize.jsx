/* Modules */
import React                    from 'react'
import Grid                     from 'styled-components-grid'
/* Components */
import Animated                 from '../../global/Animated';
/* Styles */
import { Container,
         SectionHeading,
         SectionHeadingBlock }  from '../../../styles/global/GENERAL';
import { ContainerImg }         from '../../../styles/cases-styles/image-cases'
import { FinalizeSection,
         FinalizeImgCell,
         FinalizeImgTile,
         FinalizeImgLogoGrid,
         FinalizeImgLogo }      from '../../../styles/cases-styles/finalize-cases';
/* Statics */
import ArtMarket_asset          from '../../../img/cases/artMarket/svg/artMarket_asset.svg';
import artMarket_logo_h         from '../../../img/cases/artMarket/svg/artMarket_logo_h.svg';
import artMarket_logo_v         from '../../../img/cases/artMarket/svg/artMarket_logo_v.svg';

const Finalize = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={FinalizeSection}
    >
        <Grid
            component={Container}
            halign='center'
        >
            <Grid.Unit
                size={{ss: 1, ls: 18 / 20, ws: 20 / 20}}
                component={SectionHeadingBlock}
                finalize
            >
                <Animated>
                    <SectionHeading>
                        Финальный логотип
                    </SectionHeading>
                </Animated>
            </Grid.Unit>
        </Grid>
        <ContainerImg
            artMarket
        >
            <FinalizeImgCell
                first
            >
                <Animated>
                    <FinalizeImgTile artMarket>
                        <FinalizeImgLogoGrid artMarket>
                            <img
                                src={ArtMarket_asset}
                                alt='ArtMarket'
                            />
                        </FinalizeImgLogoGrid>
                    </FinalizeImgTile>
                </Animated>
            </FinalizeImgCell>
            <FinalizeImgCell
                last
            >
                <Grid
                    halign='center'
                    valign='center'
                >
                    <Grid.Unit
                        size={{ss: 3 / 4, ms: 5 / 8, ls: 10 / 20, ws: 10 / 20}}
                        component={FinalizeImgLogo}
                        horizontal
                    >
                        <Animated>
                            <img
                                src={artMarket_logo_h}
                                alt='ArtMarket'
                            />
                        </Animated>
                    </Grid.Unit>
                    <Grid.Unit
                        size={{ss: 3 / 4, ms: 5 / 8, ls: 10 / 20, ws: 10 / 20}}
                        component={FinalizeImgLogo}
                    >
                        <Animated>
                            <img
                                src={artMarket_logo_v}
                                alt='ArtMarket'
                            />
                        </Animated>
                    </Grid.Unit>
                </Grid>
            </FinalizeImgCell>
        </ContainerImg>
    </Grid.Unit>

export default Finalize
