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

    <ColorsSection page='u21'>
        <Animated>
            <Grid
                component={ColorsRow}
            >
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                >
                    <ColorContainer>
                        <ColorCircle color_2d2c2b />
                        <ColorName>
                            95%&nbsp;Черный
                        </ColorName>
                        <ColorCode>
                            #2d2c2b
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignCenter
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
                last
            >
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                >
                    <ColorContainer>
                        <ColorCircle color_cceffc />
                        <ColorName>
                            Светло-<br/>голубой
                        </ColorName>
                        <ColorCode>
                            #cceffc
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignCenter
                >
                    <ColorContainer>
                        <ColorCircle color_fbd3cf />
                        <ColorName>
                            Светло-<br/>розовый
                        </ColorName>
                        <ColorCode>
                            #fbd3cf
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignRight
                >
                    <ColorContainer>
                        <ColorCircle color_aeded9 />
                        <ColorName>
                            Светло-<br/>зеленый
                        </ColorName>
                        <ColorCode>
                            #aeded9
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
            </Grid>
        </Animated>
    </ColorsSection>

export default Colors