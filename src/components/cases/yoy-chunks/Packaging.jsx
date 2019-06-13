/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { Container,
         SectionHeadingBlock,
         SectionContentBlock,
         CaseText,
         SectionHeading }       from '../../../styles/global/GENERAL';
import { ContainerImg,
         ImgCell }      from '../../../styles/cases-styles/image-cases'
import { PackagingSection,
         PackagingContainer,
         PackagingItem }  from '../../../styles/cases-styles/packaging-cases'

import { YoOyPackaging }  from '../../../styles/cases-styles/imageBg-cases'
/* Statics */
import YoOyGogol        from '../../../img/cases/yoy/svg/Yoy_gogol.svg'
import YoOyKotlarevsky  from '../../../img/cases/yoy/svg/Yoy_kotlarevsky.svg'
import YoOyKondratyk    from '../../../img/cases/yoy/svg/Yoy_kondratyk.svg'
import YoOySkovoroda    from '../../../img/cases/yoy/svg/Yoy_skovoroda.svg'
import YoOyPetlyra      from '../../../img/cases/yoy/svg/Yoy_petlyra.svg'

const Packaging = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={PackagingSection}
        yoOy
    >
        <Grid
            component={Container}
            halign='center'
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 3 / 8, ls: 6 / 20, ws: 6 / 20}}
                component={SectionHeadingBlock}
            >
                <Animated>
                    <SectionHeading>
                        Упаковка
                    </SectionHeading>
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 5 / 8, ls: 12 / 20, ws: 10 / 20}}
                component={SectionContentBlock}
                paddingTop
            >
                <Animated>
                    <CaseText last>
                        Идеей для упаковки было обыграть тему известных личностей, связанных с полтавским регионом. Таким образом подчеркнуть фишку локального бренда. Персонаж и название для каждого бленда связаны с его вкусовыми характеристиками и крепостью кофейной смеси.
                    </CaseText>
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}} />
        </Grid>
        <Grid
            component={ContainerImg}
            halign='center'
            yoOyPackaging
        >
            <Grid.Unit
                component={ImgCell}
                paddingLs
                yoOyPackaging
            >
                <Animated>
                    <YoOyPackaging />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                component={ImgCell}
                paddingLs
                last
            >
                <Grid
                    component={PackagingContainer}
                    halign='center'
                    yoOy
                >
                    <Grid.Unit
                        size={{ss: 2 / 4, ls: 1 / 5}}
                        component={PackagingItem}
                        gogol
                        yoOy
                    >
                        <Animated>
                            <img src={YoOyGogol} alt=""/>
                            <p>ГОГОЛЬ</p>
                        </Animated>
                    </Grid.Unit>
                    <Grid.Unit
                        size={{ss: 2 / 4, ls: 1 / 5}}
                        component={PackagingItem}
                        kotlarevsky
                        yoOy
                    >
                        <Animated>
                            <img src={YoOyKotlarevsky} alt=""/>
                            <p>котляревський</p>
                        </Animated>
                    </Grid.Unit>
                    <Grid.Unit
                        size={{ss: 2 / 4, ls: 1 / 5}}
                        component={PackagingItem}
                        kondratyk
                        yoOy
                    >
                        <Animated>
                            <img src={YoOyKondratyk} alt=""/>
                            <p>кондратюк</p>
                        </Animated>
                    </Grid.Unit>
                    <Grid.Unit
                        size={{ss: 2 / 4, ls: 1 / 5}}
                        component={PackagingItem}
                        skovoroda
                        yoOy
                    >
                        <Animated>
                            <img src={YoOySkovoroda} alt=""/>
                            <p>сковорода</p>
                        </Animated>
                    </Grid.Unit>
                    <Grid.Unit
                        size={{ss: 2 / 4, ls: 1 / 5}}
                        component={PackagingItem}
                        petlyra
                        yoOy
                        last
                    >
                        <Animated>
                            <img src={YoOyPetlyra} alt=""/>
                            <p>петлюра</p>
                        </Animated>
                    </Grid.Unit>
                </Grid>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default Packaging