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

    <ColorsSection page='navicomEnergy'>
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
                        <ColorCircle color_0067b2 />
                        <ColorName>
                            Синий
                        </ColorName>
                        <ColorCode>
                            #0067b2
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignCenter
                >
                    <ColorContainer>
                        <ColorCircle color_333333 />
                        <ColorName>
                            Черный
                        </ColorName>
                        <ColorCode>
                            #333333
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignRight
                >
                    <ColorContainer>
                        <ColorCircle color_999999 />
                        <ColorName>
                            Серый
                        </ColorName>
                        <ColorCode>
                            #999999
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
            </Grid>
        </Animated>
    </ColorsSection>;

export default Colors