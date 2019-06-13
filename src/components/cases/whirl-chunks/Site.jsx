/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { ContainerImg }      from '../../../styles/cases-styles/image-cases'
import { SiteSection,
         WhirlSiteImgCell,
         SiteSheet }  from '../../../styles/cases-styles/site-cases'
/* Statics */
import Sheet1         from '../../../img/cases/whirl/photo_site/whirl_site_section1.jpg'
import Sheet2         from '../../../img/cases/whirl/photo_site/whirl_site_section2.jpg'
import Sheet3         from '../../../img/cases/whirl/photo_site/whirl_site_section3.jpg'
import Sheet4         from '../../../img/cases/whirl/photo_site/whirl_site_section4.jpg'
// import Sheet5         from '../../../img/cases/whirl/photo_site/whirl_site_section5.jpg'
import Sheet6         from '../../../img/cases/whirl/photo_site/whirl_site_section6.jpg'

const Site = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 22 / 22}}
        component={SiteSection}
        whirl
    >
        <ContainerImg
            className = 'ContainerImg'
        >
            <WhirlSiteImgCell
                className = 'WhirlSiteImgCell'
                last
            >
                <SiteSheet whirl>
                    <Animated>
                        <img src={Sheet1} alt='' />
                    </Animated>
                    <Animated>
                        <img src={Sheet2} alt='' />
                    </Animated>
                    <Animated>
                        <img src={Sheet3} alt='' />
                    </Animated>
                    <Animated>
                        <img src={Sheet4} alt='' />
                    </Animated>
                    {/*<Animated>*/}
                        {/*<img src={Sheet5} alt='' />*/}
                    {/*</Animated>*/}
                    <Animated>
                        <img src={Sheet6} alt='' />
                    </Animated>
                </SiteSheet>
            </WhirlSiteImgCell>
        </ContainerImg>
    </Grid.Unit>

export default Site