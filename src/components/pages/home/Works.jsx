/* Modules */
import React              from 'react'
import Grid               from 'styled-components-grid'
/* Components */
import Animated           from '../../global/Animated'
import WorksPane          from '../../chunks/WorksPane'
/* Styles */
import { Container,
         SectionHeadingBlock,
         SectionContentBlock,
         SectionHeading } from '../../../styles/global/GENERAL'
import { ButtonLink }     from '../../../styles/global/button'
import { WorksSection }   from '../../../styles/pages-styles/home/works-pages'
/* Statics */

const Works = () =>
    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={WorksSection}
        >
        <Grid
            component={Container}
            halign='center'
            >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 18 / 20}}
                component={SectionHeadingBlock}
                homeWorks
                >
                <Animated>
                    <SectionHeading>
                        Недавние проекты
                        {/* Latest works */}
                    </SectionHeading>
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={SectionContentBlock}
                paddingTopNone
                >
                <WorksPane homePage />
            </Grid.Unit>
            <Animated slideUp >
                <ButtonLink
                    to = '/works'
                    allWorks
                    >
                    Посмотреть все проекты
                    {/* View all works */}
                </ButtonLink>
            </Animated>
        </Grid>
    </Grid.Unit>

export default Works
