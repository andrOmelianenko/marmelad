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
import { PrinciplesSection,
         Item }                 from '../../../styles/pages-styles/about/principles-pages'
/* Statics */

const Principles = () =>
    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={PrinciplesSection}
    >
        <Animated>
            <Grid
                component={Container}
                halign='center'
            >
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 8 / 8, ls: 18 / 20}}
                    component={SectionHeadingBlock}
                    marginBottom
                >
                    <SectionHeading>
                        Наши принципы
                        {/* Our principles */}
                    </SectionHeading>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 8 / 8, ls: 18 / 20}}
                    component={SectionContentBlock}
                    paddingNone
                >
                    <Grid>
                        <Grid.Unit
                            size={{ ss: 4/4, ms: 4/8, ls: 6/18 }}
                            component={Item}
                        >
                            <Animated>
                                <ArticleHeading left>
                                    Честность
                                    {/* Honesty */}
                                </ArticleHeading>
                                <ArticleText>
                                    Наша цель не сделать деньги на клиенте, а создать реальную ценность для его проекта. Если мы полагаем что не сможем этого сделать, мы сообщим ему об этом.
                                    {/* Our goal is not to have a deal, but create a real value. If we guess that we cant help our client, we inform him about it. */}
                                </ArticleText>
                            </Animated>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ ss: 4/4, ms: 4/8, ls: 6/18 }}
                            component={Item}
                        >
                            <Animated>
                                <ArticleHeading left>
                                    Продуманный подход
                                    {/* Learned approach */}
                                </ArticleHeading>
                                <ArticleText>
                                    Наша работа основана на знаниях психологии восприятия, принципах геометрии, маркетинга и актуальных технологий.
                                    {/* Our work based on knowledge of psychology of perception, principles of geometry, marketing and last technologies of web-development. */}
                                </ArticleText>
                            </Animated>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ ss: 4/4, ms: 4/8, ls: 6/18 }}
                            component={Item}
                        >
                            <Animated>
                                <ArticleHeading left>
                                    Функция + Форма
                                    {/* Function + Shape */}
                                </ArticleHeading>
                                <ArticleText>
                                    Мы стремимся совмещать функциональную и эстетическую составляющие дизайна, для того чтобы создавать привлекательные и простые для восприятия вещи.
                                    {/* We strive to make aesthetic design based on functional features of brand or product. */}
                                </ArticleText>
                            </Animated>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ ss: 4/4, ms: 4/8, ls: 6/18 }}
                            component={Item}
                        >
                            <Animated>
                                <ArticleHeading left>
                                    Постоянное развитие
                                    {/* Constant skill-up */}
                                </ArticleHeading>
                                <ArticleText>
                                    Мы приумножаем наши навыки и опыт выкладываясь на полную в каждом проекте.
                                    {/* We multiply our skills and expirience when we laid out in full making every project. */}
                                </ArticleText>
                            </Animated>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ ss: 4/4, ms: 4/8, ls: 6/18 }}
                            component={Item}
                        >
                            <Animated>
                                <ArticleHeading left>
                                    Результат превыше всего
                                    {/* Result is the main */}
                                </ArticleHeading>
                                <ArticleText>
                                    Мы создаем дизайн для потребителей, но не для удовлетворения внутренних желаний заказчика. Если мы понимаем что наше видение полезнее для проекта, чем видение заказчика, мы стоим на своем.
                                    {/* We design for end-users of brands, but not for satisfaction of internal wishes of decision makers. If we know that our vision is righter than client’s vision, we try to convince him. */}
                                </ArticleText>
                            </Animated>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ ss: 4/4, ms: 4/8, ls: 6/18 }}
                            component={Item}
                        >
                            <Animated>
                                <ArticleHeading left>
                                    Никаких шаблонов
                                    {/* No templates */}
                                </ArticleHeading>
                                <ArticleText>
                                    Каждый проект – это уникальная задача. Поэтому мы исключаем использование шаблонных решений в своей работе. WordPress, Joomla и пр. не для нас.
                                    {/* We know that each objective is unique. That’s why we don’t use typal solutions in web-design and branding. */}
                                </ArticleText>
                            </Animated>
                        </Grid.Unit>
                    </Grid>
                </Grid.Unit>
            </Grid>
        </Animated>
    </Grid.Unit>

export default Principles
