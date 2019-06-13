/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { Container }       from '../../../styles/global/GENERAL';
import { SiteSection,
         DvaNaDvaCenter,
         DvaNaDvaSiteImgCell,
         SiteImgCell,
         MacBook,
         SiteSheet,
         PopUpImg }  from '../../../styles/cases-styles/site-cases'
/* Statics */
import PopUp         from '../../../img/cases/2x2/dvaNaDva_site_popup.png'
import Macbook       from '../../../img/cases/2x2/dvaNaDva_macbook.png'
import Sheet1_ss     from '../../../img/cases/2x2/photo_site_mobile/dvaNaDva_site_section1.jpg'
import Sheet1        from '../../../img/cases/2x2/photo_site_desktop/dvaNaDva_site_section1.jpg'
import Sheet2_ss     from '../../../img/cases/2x2/photo_site_mobile/dvaNaDva_site_section2.jpg'
import Sheet2        from '../../../img/cases/2x2/photo_site_desktop/dvaNaDva_site_section2.jpg'
import Sheet3_ss     from '../../../img/cases/2x2/photo_site_mobile/dvaNaDva_site_section3.jpg'
import Sheet3        from '../../../img/cases/2x2/photo_site_desktop/dvaNaDva_site_section3.jpg'
import Sheet4_ss     from '../../../img/cases/2x2/photo_site_mobile/dvaNaDva_site_section4.jpg'
import Sheet4        from '../../../img/cases/2x2/photo_site_desktop/dvaNaDva_site_section4.jpg'
import Sheet5_ss     from '../../../img/cases/2x2/photo_site_mobile/dvaNaDva_site_section5.jpg'
import Sheet5        from '../../../img/cases/2x2/photo_site_desktop/dvaNaDva_site_section5.jpg'
import Sheet6_ss     from '../../../img/cases/2x2/photo_site_mobile/dvaNaDva_site_section6.jpg'
import Sheet6        from '../../../img/cases/2x2/photo_site_desktop/dvaNaDva_site_section6.jpg'
import Sheet7_ss     from '../../../img/cases/2x2/photo_site_mobile/dvaNaDva_site_section7.jpg'
import Sheet7        from '../../../img/cases/2x2/photo_site_desktop/dvaNaDva_site_section7.jpg'
import Sheet8_ss     from '../../../img/cases/2x2/photo_site_mobile/dvaNaDva_site_section8.jpg'
import Sheet8        from '../../../img/cases/2x2/photo_site_desktop/dvaNaDva_site_section8.jpg'
import Sheet9_ss     from '../../../img/cases/2x2/photo_site_mobile/dvaNaDva_site_section9.jpg'
import Sheet9        from '../../../img/cases/2x2/photo_site_desktop/dvaNaDva_site_section9.jpg'
import Ipad          from '../../../img/cases/2x2/dvaNaDva_site_adaptation.png'

const Site = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 22 / 22}}
        component={SiteSection}
        dvaNaDva
    >
        <DvaNaDvaCenter>
            <Container>
                <DvaNaDvaSiteImgCell
                    paddingSsMs
                    last
                >
                    <MacBook>
                        <Animated>
                            <img
                                src={Macbook}
                                alt=''
                            />
                        </Animated>
                    </MacBook>
                    <SiteSheet dvaNaDva>
                        <Animated>
                            <PopUpImg>
                                <img
                                    src={PopUp}
                                    alt=''
                                />
                            </PopUpImg>
                            {
                                window.screen.availWidth < 600
                                    ? <img
                                        src={Sheet1_ss}
                                        alt=''
                                    />
                                    : <img
                                        src={Sheet1}
                                        alt=''
                                    />
                            }
                            {
                                window.screen.availWidth < 600
                                    ? <img
                                        src={Sheet2_ss}
                                        alt=''
                                    />
                                    : <img
                                        src={Sheet2}
                                        alt=''
                                    />
                            }
                        </Animated>
                        <Animated>
                            {
                                window.screen.availWidth < 600
                                    ? <img
                                        src={Sheet3_ss}
                                        alt=''
                                    />
                                    : <img
                                        src={Sheet3}
                                        alt=''
                                    />
                            }
                        </Animated>
                        <Animated>
                            {
                                window.screen.availWidth < 600
                                    ? <img
                                        src={Sheet4_ss}
                                        alt=''
                                    />
                                    : <img
                                        src={Sheet4}
                                        alt=''
                                    />
                            }
                        </Animated>
                        <Animated>
                            {
                                window.screen.availWidth < 600
                                    ? <img
                                        src={Sheet5_ss}
                                        alt=''
                                    />
                                    : <img
                                        src={Sheet5}
                                        alt=''
                                    />
                            }
                        </Animated>
                        <Animated>
                            {
                                window.screen.availWidth < 600
                                    ? <img
                                        src={Sheet6_ss}
                                        alt=''
                                    />
                                    : <img
                                        src={Sheet6}
                                        alt=''
                                    />
                            }
                        </Animated>
                        <Animated>
                            {
                                window.screen.availWidth < 600
                                    ? <img
                                        src={Sheet7_ss}
                                        alt=''
                                    />
                                    : <img
                                        src={Sheet7}
                                        alt=''
                                    />
                            }
                        </Animated>
                        <Animated>
                            {
                                window.screen.availWidth < 600
                                    ? <img
                                        src={Sheet8_ss}
                                        alt=''
                                    />
                                    : <img
                                        src={Sheet8}
                                        alt=''
                                    />
                            }
                        </Animated>
                        <Animated>
                            {
                                window.screen.availWidth < 600
                                    ? <img
                                        src={Sheet9_ss}
                                        alt=''
                                    />
                                    : <img
                                        src={Sheet9}
                                        alt=''
                                    />
                            }
                        </Animated>
                    </SiteSheet>
                </DvaNaDvaSiteImgCell>
                <SiteImgCell
                    paddingSsMs
                    last
                    dvaNaDva
                >
                    <Animated>
                        <img
                            src={Ipad}
                            alt=''
                        />
                    </Animated>
                </SiteImgCell>
            </Container>
        </DvaNaDvaCenter>
    </Grid.Unit>

export default Site