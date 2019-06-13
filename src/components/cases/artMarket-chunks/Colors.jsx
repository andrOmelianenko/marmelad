/* Modules */
import   React          from 'react'
import   Grid           from 'styled-components-grid'
/* Components */
import   Animated       from '../../global/Animated'
import   ColorsSection  from '../global/Colors'
/* Styles */
import { CaseText }     from '../../../styles/global/GENERAL';
import { ColorsRow,
         ColorItem,
         ColorContainer,
         ColorCircle,
         ColorName,
         ColorCode }    from '../../../styles/cases-styles/colors-cases'
/* Statics */

const Colors = () =>

    <ColorsSection page='artMarket'>
        <Animated>
            <Grid
                component={ColorsRow}
            >
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                >
                    <ColorContainer>
                        <ColorCircle color_f6d258 />
                        <ColorName>
                            Желтый
                        </ColorName>
                        <ColorCode>
                            #f6d258
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignCenter
                >
                    <ColorContainer>
                        <ColorCircle color_5c7046 />
                        <ColorName>
                            Зеленый
                        </ColorName>
                        <ColorCode>
                            #5c7046
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignRight
                >
                    <ColorContainer>
                        <ColorCircle color_0b4a89 />
                        <ColorName>
                            Синий
                        </ColorName>
                        <ColorCode>
                            #0b4a89
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
            </Grid>
        </Animated>
        <Animated>
            <Grid
                component={ColorsRow}
                artMarket
            >
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                >
                    <ColorContainer>
                        <ColorCircle color_d0ae94 />
                        <ColorName>
                            Бежевый
                        </ColorName>
                        <ColorCode>
                            #d0ae94
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignCenter
                >
                    <ColorContainer>
                        <ColorCircle color_ee542c />
                        <ColorName>
                            Оранжевый
                        </ColorName>
                        <ColorCode>
                            #ee542c
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1 / 3}}
                    component={ColorItem}
                    alignRight
                >
                    <ColorContainer>
                        <ColorCircle color_5486a0 />
                        <ColorName>
                            Голубой
                        </ColorName>
                        <ColorCode>
                            #5486a0
                        </ColorCode>
                    </ColorContainer>
                </Grid.Unit>
            </Grid>
        </Animated>
        <Animated>
            <CaseText last>
                Для цве&shy;то&shy;вой па&shy;ли&shy;тры мы ис&shy;поль&shy;зо&shy;ва&shy;ли ги&shy;пер&shy;бо&shy;
                ли&shy;зи&shy;ро&shy;ван&shy;ные при&shy;род&shy;ные от&shy;тен&shy;ки ко&shy;то&shy;рые ши&shy;ро&shy;
                ко ис&shy;поль&shy;зо&shy;ва&shy;лись мод&shy;ны&shy;ми брен&shy;да&shy;ми в 2017 го&shy;ду.
            </CaseText>
        </Animated>
    </ColorsSection>;

export default Colors