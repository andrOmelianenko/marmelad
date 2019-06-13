/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { ContainerImg,
         ImgSection,
         ImgCell,
         MuseumGrid,
         MuseumCell }      from '../../../styles/cases-styles/image-cases'
/* Statics */
import Museum_1            from '../../../img/cases/museum/museum_3.jpg'
import Museum_2            from '../../../img/cases/museum/svg/museum_1.svg'
import Museum_3            from '../../../img/cases/museum/svg/museum_icons.svg'
import Museum_4            from '../../../img/cases/museum/museum_4.jpg'
import Museum_5            from '../../../img/cases/museum/museum_5.jpg'
import Museum_6            from '../../../img/cases/museum/museum_6.jpg'
import Museum_7            from '../../../img/cases/museum/museum_7.png'
import Museum_8            from '../../../img/cases/museum/museum_8.png'
import Museum_9            from '../../../img/cases/museum/museum_9.jpg'
import Museum_10           from '../../../img/cases/museum/museum_10.jpg'
import Museum_11           from '../../../img/cases/museum/museum_11.jpg'
import Museum_12           from '../../../img/cases/museum/museum_12.jpg'

const Images = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={ImgSection}
        museum2
    >
        <Grid
            component={ContainerImg}
            halign='center'
            paddingSide
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 7 / 20}}
                component={ImgCell}
                className='ImgCell'
                paddingSsMs
                paddingLs
            >
                <Animated>
                    <img
                        src={Museum_1}
                        alt='Museum'
                    />
                </Animated>
            </Grid.Unit>
            {
                window.screen.availWidth < 1024
                    ? null
                    : <Grid.Unit
                        size={{ss: 1, ls: 13 / 20}}
                        component={ImgCell}
                        className='ImgCell 1024'
                        paddingLs
                        museum_svg
                    >
                        <Animated>
                            <Grid halign='center' valign='bottom'
                                component={MuseumGrid}
                                  className='MuseumGrid bottom'
                                  museum_svg>
                                <Grid.Unit
                                    component={MuseumCell}
                                    className='MuseumCell'
                                    museum_svg
                                >
                                    <img
                                        src={Museum_2}
                                        alt=''
                                    />
                                </Grid.Unit>
                            </Grid>
                        </Animated>
                    </Grid.Unit>
            }
        </Grid>
        {
            window.screen.availWidth < 1024
                ? <Grid
                    component={ContainerImg}
                    halign='center'
                >
                    <Grid.Unit
                        size={{ss: 1, ls: 13 / 20}}
                        component={ImgCell}
                        className='ImgCell'
                        paddingLs
                    >
                        <Animated>
                            <Grid halign='center' valign='bottom'
                                  component={MuseumGrid}
                                  museum_svg>
                                <Grid.Unit
                                    component={MuseumCell}
                                    className='MuseumCell'
                                >
                                    <img
                                        src={Museum_2}
                                        alt=''
                                    />
                                </Grid.Unit>
                            </Grid>
                        </Animated>
                    </Grid.Unit>
                    <Grid.Unit
                        size={{ss: 1, ls: 13 / 20}}
                        component={ImgCell}
                        paddingLs
                    >
                        <Animated>
                            <Grid halign='center' valign='center'
                                  component={MuseumGrid}
                                  museum_svg_last>
                                <Grid.Unit
                                    component={MuseumCell}
                                    className='MuseumCell'
                                    size={{ss: 3 / 4, ms: 5 / 8, ls: 8 / 20}}>
                                    <img
                                        src={Museum_3}
                                        alt=''
                                    />
                                </Grid.Unit>
                            </Grid>
                        </Animated>
                    </Grid.Unit>
                </Grid>
                : null
        }
        <Grid
            component={ContainerImg}
            halign='center'
            paddingSide
        >
            {
                window.screen.availWidth < 1024
                    ? null
                    : <Grid.Unit
                        size={{ss: 4 / 4, ms: 8 / 8, ls: 13 / 20}}
                        component={ImgCell}
                        paddingLs
                        museum_svg
                    >
                        <Animated>
                            <Grid halign='center' valign='center'
                                  component={MuseumGrid}
                                  museum_svg_last>
                                <Grid.Unit
                                    component={MuseumCell}
                                    size={{ss: 3 / 4, ms: 5 / 8, ls: 8 / 20}}>
                                    <img
                                        src={Museum_3}
                                        alt='ArtMarket'
                                    />
                                </Grid.Unit>
                            </Grid>
                        </Animated>
                    </Grid.Unit>
            }
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 7 / 20}}
                component={ImgCell}
                paddingSsMs
                paddingLs
            >
                <Animated>
                    <img
                        src={Museum_4}
                        alt='u21'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                paddingSsMs
                paddingLs
                >
                <Animated>
                    <img
                        src={Museum_5}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                paddingSsMs
                paddingLs
                >
                <Animated>
                    <img
                        src={Museum_6}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>

            <Grid.Unit
                size={{ss: 1}}
                component={ImgCell}
            >
                <Animated>
                    <Grid halign='center' valign='center'
                          component={MuseumGrid}>
                        <Grid.Unit
                            size={{ss: 37 / 200, ls: 15 / 100}}
                            component={MuseumCell}
                            first
                        >
                            <img
                                src={Museum_7}
                                alt='Museum'
                            />
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 41 / 100, ls: 33 / 100}}
                            component={MuseumCell}
                            last
                        >
                            <img
                                src={Museum_8}
                                alt='Museum'
                            />
                        </Grid.Unit>
                    </Grid>
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
                    <img
                        src={Museum_9}
                        alt='u21'
                    />
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
                    <img
                        src={Museum_10}
                        alt='u21'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                paddingSsMs
                paddingLs
                >
                <Animated>
                    <img
                        src={Museum_11}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                paddingSsMs
                paddingLs
                last
                >
                <Animated>
                    <img
                        src={Museum_12}
                        alt='ubs'
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default Images
