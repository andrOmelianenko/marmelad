/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { CaseText }      from '../../../styles/global/GENERAL'
import { ContainerImg,
         ImgSection,
         ImgCell }      from '../../../styles/cases-styles/image-cases'
/* Statics */
import Vino_font1               from '../../../img/cases/vinoteria/svg/Vino_font1.svg'
import Vino_font2               from '../../../img/cases/vinoteria/svg/Vino_font2.svg'
import vino_strelka_font_mob    from '../../../img/cases/vinoteria/svg/vino_strelka_font_mob.svg'
import vino_strelka_font_desc   from '../../../img/cases/vinoteria/svg/vino_strelka_font_desc.svg'

const ImagesFont = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
        imagesFont
    >
        <Grid
            component={ContainerImg}
            halign='center'
            valign='center'
            paddingSide
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 18 / 20}}
                component={ImgCell}
                last
            >
                <Animated>
                    <CaseText center fsSs12>PF Din Text Comp Pro</CaseText>
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 43 / 100, ls: 38 / 100}}
                component={ImgCell}
                paddingMs
                vinoteria1
            >
                <Animated>
                    <img
                        src={Vino_font1}
                        alt=''
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 0.0375}}
                visible={{ms: false}}
                component={ImgCell}
                vino_strelka
            >
                <Animated>
                    <img
                        src={vino_strelka_font_mob}
                        alt=''
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ms: 0.0375, ls: 0.03}}
                visible={{ss: false, ms: true}}
                component={ImgCell}
                vino_strelka
            >
                <Animated>
                    <img
                        src={vino_strelka_font_desc}
                        alt=''
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 43 / 100, ls: 38 / 100}}
                component={ImgCell}
                paddingMs
                vinoteria2
            >
                <Animated>
                    <Animated>
                        <img
                            src={Vino_font2}
                            alt=''
                        />
                    </Animated>
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default ImagesFont