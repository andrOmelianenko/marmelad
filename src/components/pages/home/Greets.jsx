/* Modules */
import   React                  from 'react'
import   Grid                   from 'styled-components-grid'
/* Components */
import   Animated               from '../../global/Animated'
/* Styles */
import { Container,
         SectionHeadingBlock,
         SectionContentBlock,
         SectionHeading,
         PlainText }            from '../../../styles/global/GENERAL';
import { GreetsSection }        from '../../../styles/pages-styles/home/greets-pages'
/* Statics */

const Greets = () =>
    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={GreetsSection}
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
                        Привет!
                        {/* Greets! */}
                    </SectionHeading>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 8 / 8, ls: 12 / 20, ws: 10 / 20}}
                    component={SectionContentBlock}
                >
                    <PlainText last>
                        Мarmelad design studio – это команда, которая находит свежие идеи для развивающихся брендов. Мы создаем осмысленный дизайн, основанный на изучении и анализе. Потому что мы любим это.
                        {/* Marmelad Design Studio is a team which finds cool ideas for upcoming brands. Considered design based on learning and analysis. Because we love it. */}
                    </PlainText>
                </Grid.Unit>
                <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}}/>
            </Grid>
        </Animated>
    </Grid.Unit>

export default Greets
