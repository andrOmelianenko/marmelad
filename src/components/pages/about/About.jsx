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
         PlainText }            from '../../../styles/global/GENERAL';
import { AboutSection }         from '../../../styles/pages-styles/about/about-pages'
/* Statics */

const About = () =>
    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={AboutSection}
    >
        <Animated>
            <Grid
                component={Container}
                halign='center'
            >
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 8 / 8, ls: 6 / 20, ws: 6 / 20}}
                    component={SectionHeadingBlock}
                    marginBottom
                >
                    <SectionHeading>
                        О нас
                        {/* About us */}
                    </SectionHeading>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 8 / 8, ls: 12 / 20, ws: 10 / 20}}
                    component={SectionContentBlock}
                >
                    <PlainText last>
                        Каждый проект для нас – это полное погружение в задачу. Мы используем методичный подход, основанный на знаниях и опыте, для того чтобы разрабатывать эффективный брендинг и веб дизайн.
                        {/* Each project for us is a full immersion into the objective. We use methodical approach, that based on knowledge, for branding and webdesign. */}
                    </PlainText>
                </Grid.Unit>
                <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}}/>
            </Grid>
        </Animated>
    </Grid.Unit>

export default About
