/* Modules */
import   React                  from 'react'
import   Grid                   from 'styled-components-grid'
/* Components */
import   Animated               from '../../global/Animated'
/* Styles */
import { Container,
         SectionHeading,
         SectionHeadingBlock,
         SectionContentBlock,
         ArticleHeading,
         ArticleText }          from '../../../styles/global/GENERAL';
import { WhatSection,
         Item }                 from '../../../styles/pages-styles/about/what-pages'
/* Statics */

const What = () =>
    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={WhatSection}
    >
        <Animated>
            <Grid
                component={Container}
                halign='center'
            >
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 8 / 8, ls: 18 / 20, ws: 6 / 20}}
                    component={SectionHeadingBlock}
                >
                    <SectionHeading>
                        Что мы делаем
                        {/* What we do */}
                    </SectionHeading>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 8 / 8, ls: 18 / 20, ws: 10 / 20}}
                    component={SectionContentBlock}
                    paddingNone
                >
                    <Grid>
                        <Grid.Unit
                            size={{ ss: 4/4, ms: 8/8, ls: 9/18 }}
                            component={Item}
                        >
                            <Animated>
                                <ArticleHeading>
                                    Запоминающиеся логотипы и корпоратиная айдентика
                                    {/* Cutchy Logos & Corporate Identity */}
                                </ArticleHeading>
                                <ArticleText>
                                    Мы изучаем человеческие потребности, разрабатываем сильные концепции и воплощаем их в дизайне. Это ключ к созданию успешного визуального образа.
                                    {/* We learn man’s needs, develope strong concepts & embody their in design to create proper visual image. It’s the key to make successful brand expirience. */}
                                </ArticleText>
                            </Animated>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ ss: 4/4, ms: 8/8, ls: 9/18 }}
                            component={Item}
                        >
                            <Animated>
                                <ArticleHeading>
                                    Человекоориентированный вебдизайн
                                    {/* Considered Web-design */}
                                </ArticleHeading>
                                <ArticleText>
                                    Мы тчательно подходим к разработке контента, опыта взаимодействия и графического дизайна. Это позволяет нам создать мощный механизм коммуникаций между пользователями и бизнесом в цифровой среде.
                                    {/* We think through content thoroughly, user expirience & design. It permit us to create strong mechanisms for reaching goals of business in the web enviroment. */}
                                </ArticleText>
                            </Animated>
                        </Grid.Unit>
                    </Grid>
                </Grid.Unit>
                <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}}/>
            </Grid>
        </Animated>
    </Grid.Unit>

export default What
