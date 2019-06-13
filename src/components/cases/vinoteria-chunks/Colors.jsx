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

    <ColorsSection page='vinoteria'>
        <Animated>
            <Grid
                component={ColorsRow}
            >
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                >
                    <ColorContainer>
                        <ColorCircle color_a30a42 />
                        <ColorName>
                            Красный
                        </ColorName>
                        <ColorCode>
                            #a30a42
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignCenter
                >
                    <ColorContainer>
                        <ColorCircle
                            color_181511
                        />
                        <ColorName>
                            Черный
                        </ColorName>
                        <ColorCode>
                            #181511
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
                last
            >
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                >
                    <ColorContainer>
                        <ColorCircle color_314060 />
                        <ColorName>
                            Синий
                        </ColorName>
                        <ColorCode>
                            #314060
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignCenter
                >
                    <ColorContainer>
                        <ColorCircle color_679079 />
                        <ColorName>
                            Зеленый
                        </ColorName>
                        <ColorCode>
                            #679079
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
            </Grid>
        </Animated>
    </ColorsSection>;

export default Colors