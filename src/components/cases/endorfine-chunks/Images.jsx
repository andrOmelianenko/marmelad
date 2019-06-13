/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { ContainerImg,
         ImgSection,
         ImgCell }      from '../../../styles/cases-styles/image-cases'
/* Statics */
import Endorfine1_ss_ms        from '../../../img/cases/endorfine/endorfine_image1_ss_ms.jpg'
import Endorfine1_ls           from '../../../img/cases/endorfine/endorfine_image1_ls.jpg'
import Endorfine2_ss_ms        from '../../../img/cases/endorfine/endorfine_image2_ss_ms.jpg'
import Endorfine2_ls           from '../../../img/cases/endorfine/endorfine_image2_ls.jpg'
import Endorfine3_ss_ms        from '../../../img/cases/endorfine/endorfine_image3_ss_ms.jpg'
import Endorfine3_ls           from '../../../img/cases/endorfine/endorfine_image3_ls.jpg'
import Endorfine4_ss_ms        from '../../../img/cases/endorfine/endorfine_image4_ss_ms.jpg'
import Endorfine4_ls           from '../../../img/cases/endorfine/endorfine_image4_ls.jpg'
import Endorfine5_ss_ms        from '../../../img/cases/endorfine/endorfine_image5_ss_ms.jpg'
import Endorfine5_ls           from '../../../img/cases/endorfine/endorfine_image5_ls.jpg'
import Endorfine6_ss_ms        from '../../../img/cases/endorfine/endorfine_image6_ss_ms.jpg'
import Endorfine6_ls           from '../../../img/cases/endorfine/endorfine_image6_ls.jpg'
import Endorfine7_ss_ms        from '../../../img/cases/endorfine/endorfine_image7_ss_ms.jpg'
import Endorfine7_ls           from '../../../img/cases/endorfine/endorfine_image7_ls.jpg'

const Image = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
    >
        <Grid
            component={ContainerImg}
            halign='center'
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                paddingLs
            >
                <Animated>
                    {
                        window.screen.availWidth < 1024
                            ? <img
                                src={Endorfine1_ss_ms}
                                alt='Endorfine'
                            />
                            : <img
                                src={Endorfine1_ls}
                                alt='Endorfine'
                            />
                    }
                </Animated>
            </Grid.Unit>
        </Grid>
        <Grid
            component={ContainerImg}
            halign='center'
            paddingSide
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                paddingSsMs
                paddingLs
            >
                <Animated>
                    {
                        window.screen.availWidth < 1024
                            ? <img
                                src={Endorfine2_ss_ms}
                                alt='Endorfine'
                            />
                            : <img
                                src={Endorfine2_ls}
                                alt='Endorfine'
                            />
                    }
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                paddingSsMs
                paddingLs
            >
                <Animated>
                    {
                        window.screen.availWidth < 1024
                            ? <img
                                src={Endorfine3_ss_ms}
                                alt='Endorfine'
                            />
                            : <img
                                src={Endorfine3_ls}
                                alt='Endorfine'
                            />
                    }
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingSsMs
                paddingLeftLs
                marginNone
            >
                <Animated>
                    {
                        window.screen.availWidth < 1024
                            ? <img
                                src={Endorfine4_ss_ms}
                                alt='Endorfine'
                            />
                            : <img
                                src={Endorfine4_ls}
                                alt='Endorfine'
                            />
                    }
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ls: 10 / 20}} visible={{ss: false, ls: true}} />
            <Grid.Unit size={{ls: 10 / 20}} visible={{ss: false, ls: true}} />
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 10 / 20}}
                component={ImgCell}
                paddingSsMs
                paddingRightLs
            >
                <Animated>
                    {
                        window.screen.availWidth < 1024
                            ? <img
                                src={Endorfine5_ss_ms}
                                alt='Endorfine'
                            />
                            : <img
                                src={Endorfine5_ls}
                                alt='Endorfine'
                            />
                    }
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                paddingSsMs
                paddingLs
            >
                <Animated>
                    {
                        window.screen.availWidth < 1024
                            ? <img
                                src={Endorfine6_ss_ms}
                                alt='Endorfine'
                            />
                            : <img
                                src={Endorfine6_ls}
                                alt='Endorfine'
                            />
                    }
                </Animated>
            </Grid.Unit>
        </Grid>
        <Grid
            component={ContainerImg}
            halign='center'
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                paddingLeftLs
                marginNone
            >
                <Animated>
                    {
                        window.screen.availWidth < 1024
                            ? <img
                                src={Endorfine7_ss_ms}
                                alt='Endorfine'
                            />
                            : <img
                                src={Endorfine7_ls}
                                alt='Endorfine'
                            />
                    }
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default Image
