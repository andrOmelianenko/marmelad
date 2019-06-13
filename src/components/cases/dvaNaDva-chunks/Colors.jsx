/* Modules */
import   React          from 'react'
import   Grid           from 'styled-components-grid'
/* Components */
import   Animated       from '../../global/Animated'
import   ColorsSection  from '../global/Colors'
/* Styles */
import { ColorsRow,
    ColorItem,
    ColorContainer,
    ColorCircle,
    ColorName,
    ColorCode }    from '../../../styles/cases-styles/colors-cases'
/* Statics */
const Colors = () =>

    <ColorsSection page='dvaNaDva'>
        <Animated>
            <Grid
                component={ColorsRow}
                dvaNaDva
            >
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                >
                    <ColorContainer>
                        <ColorCircle color_1744fe />
                        <ColorName>
                            Синий
                        </ColorName>
                        <ColorCode>
                            #1744fe
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignCenter
                >
                    <ColorContainer>
                        <ColorCircle color_bed8fd />
                        <ColorName>
                            Голубой
                        </ColorName>
                        <ColorCode>
                            #bed8fd
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignRight
                >
                    <ColorContainer>
                        <ColorCircle color_ffffff />
                        <ColorName>
                            Белый
                        </ColorName>
                        <ColorCode>
                            #ffffff
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
            </Grid>
        </Animated>
        <Animated>
            <Grid
                component={ColorsRow}
                dvaNaDva
            >
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                >
                    <ColorContainer>
                        <ColorCircle color_1d1e22 />
                        <ColorName>
                            Черный
                        </ColorName>
                        <ColorCode>
                            #1d1e22
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignCenter
                >
                    <ColorContainer>
                        <ColorCircle color_6f7b89 />
                        <ColorName>
                            Серый
                        </ColorName>
                        <ColorCode>
                            #6f7b89
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignRight
                >
                    <ColorContainer>
                        <ColorCircle color_efefef />
                        <ColorName>
                            Светло-<br/>серый
                        </ColorName>
                        <ColorCode>
                            #efefef
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
            </Grid>
        </Animated>
        <Animated>
            <Grid
                component={ColorsRow}
                last
            >
                <Grid.Unit
                    size={{ss: 1 / 3, ws: 3 / 10}}
                    component={ColorItem}
                >
                    <ColorContainer>
                        <ColorCircle color_41d15e />
                        <ColorName>
                            Зеленый
                        </ColorName>
                        <ColorCode>
                            #41d15e
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
            </Grid>
        </Animated>
    </ColorsSection>;

export default Colors