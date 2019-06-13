/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { ContainerImg }      from '../../../styles/cases-styles/image-cases'
import { SiteSection,
         WhirlSiteBaseImgCell,
         SiteSheetR,
         SiteSheetA,
         SiteSheetS }  from '../../../styles/cases-styles/site-cases'
/* Statics */
import SheetR         from '../../../img/cases/whirl/photo_site/nb_baseR.jpg'
import SheetA         from '../../../img/cases/whirl/photo_site/nb_baseA.jpg'
import SheetS         from '../../../img/cases/whirl/photo_site/nb_baseS.jpg'

const Site = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 22 / 22}}
        component={SiteSection}
        siteBase
        whirl
    >
        <ContainerImg
            className = 'ContainerImg'
        >
            <WhirlSiteBaseImgCell
                className = 'WhirlSiteImgCell'
                last
            >
                <SiteSheetR whirl>
                    <Animated>
                        <img src={SheetR} alt='' />
                    </Animated>
                </SiteSheetR>
                <SiteSheetA whirl>
                    <Animated>
                        <img src={SheetA} alt='' />
                    </Animated>
                </SiteSheetA>
                <SiteSheetS whirl>
                    <Animated>
                        <img src={SheetS} alt='' />
                    </Animated>
                </SiteSheetS>
            </WhirlSiteBaseImgCell>
        </ContainerImg>
    </Grid.Unit>

export default Site