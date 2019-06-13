/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { ContainerImg,
         ImgSection,
         ImgLogo }      from '../../../styles/cases-styles/image-cases'
/* Statics */
import vinoteria_11_mob      from '../../../img/cases/vinoteria/svg/logo_1.1_mob.svg'
import vinoteria_11_desc      from '../../../img/cases/vinoteria/svg/logo_1.1_desc.svg'
import vinoteria_21_mob      from '../../../img/cases/vinoteria/svg/logo_1.2_mob.svg'
import vinoteria_21_desc      from '../../../img/cases/vinoteria/svg/logo_1.2_desc.svg'
import vinoteria_12_mob      from '../../../img/cases/vinoteria/svg/logo_2.1_mob.svg'
import vinoteria_12_desc      from '../../../img/cases/vinoteria/svg/logo_2.1_desc.svg'
import vinoteria_22_mob      from '../../../img/cases/vinoteria/svg/logo_2.2_mob.svg'
import vinoteria_22_desc      from '../../../img/cases/vinoteria/svg/logo_2.2_desc.svg'

const ImagesLogo = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection }
        imagesLogo
    >
        <Grid
            component={ContainerImg}
            halign='center'
        >
            <Grid.Unit
                size={{ss: 1, ms: 1 / 2}}
                component={ImgLogo}
                paddingLeftLs
                order1
                last
            >
                <Animated>
                    {
                        window.screen.availWidth < 600
                            ? <img
                                src={vinoteria_11_mob}
                                alt=''
                            />
                            : <img
                                src={vinoteria_11_desc}
                                alt=''
                            />
                    }
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 1, ms: 1 / 2}}
                component={ImgLogo}
                paddingLeftLs
                order3
                last
            >
                <Animated>
                    {
                        window.screen.availWidth < 600
                            ? <img
                                src={vinoteria_21_mob}
                                alt=''
                            />
                            : <img
                                src={vinoteria_21_desc}
                                alt=''
                            />
                    }
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 1, ms: 1 / 2}}
                component={ImgLogo}
                paddingRightLs
                order4
                last
            >
                <Animated>
                    {
                        window.screen.availWidth < 600
                            ? <img
                                src={vinoteria_22_mob}
                                alt=''
                            />
                            : <img
                                src={vinoteria_22_desc}
                                alt=''
                            />
                    }
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 1, ms: 1 / 2}}
                component={ImgLogo}
                paddingRightLs
                order2
                last
            >
                <Animated>
                    {
                        window.screen.availWidth < 600
                            ? <img
                                src={vinoteria_12_mob}
                                alt=''
                            />
                            : <img
                                src={vinoteria_12_desc}
                                alt=''
                            />
                    }
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default ImagesLogo