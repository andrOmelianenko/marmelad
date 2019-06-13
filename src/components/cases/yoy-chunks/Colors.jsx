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

    <ColorsSection page='yoOy'>
        <Animated>
            <Grid
                component={ColorsRow}
            >
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                >
                    <ColorContainer>
                        <ColorCircle color_c92a39 />
                        <ColorName>
                            Красный
                        </ColorName>
                        <ColorCode>
                            #c92a39
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignCenter
                >
                    <ColorContainer>
                        <ColorCircle color_000000 />
                        <ColorName>
                            Черный
                        </ColorName>
                        <ColorCode>
                            #000000
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignRight
                >
                    <ColorContainer>
                        <ColorCircle color_a1cdeb />
                        <ColorName>
                            Голубой
                        </ColorName>
                        <ColorCode>
                            #a1cdeb
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
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                >
                    <ColorContainer>
                        <ColorCircle color_2f9e31 />
                        <ColorName>
                            Зеленый
                        </ColorName>
                        <ColorCode>
                            #2f9e31
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignCenter
                >
                    <ColorContainer>
                        <ColorCircle color_fde100 />
                        <ColorName>
                            Желтый
                        </ColorName>
                        <ColorCode>
                            #fde100
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignRight
                >
                    <ColorContainer>
                        <ColorCircle color_e9e9ad />
                        <ColorName>
                            Светло-<br/>желтый
                        </ColorName>
                        <ColorCode>
                            #e9e9ad
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
            </Grid>
        </Animated>
    </ColorsSection>;

export default Colors