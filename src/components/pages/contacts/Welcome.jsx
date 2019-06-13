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
import { WelcomeSection }       from '../../../styles/pages-styles/contacts/welcome-pages'
/* Statics */

const Welcome = () =>
    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={WelcomeSection}
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
                        Добро пожаловать!
                        {/* Welcome! */}
                    </SectionHeading>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 8 / 8, ls: 12 / 20, ws: 10 / 20}}
                    component={SectionContentBlock}
                >
                    <PlainText last>
                        Мы открыты для общения и новых встреч. Всегда рады видеть единомышленников и клиентов в нашем офисе.
                        {/* Focus on the analysis of your customers makes it possible for us to find and meet their needs. It is the key to building a powerful mechanism of sales. Focus on the analysis of your customer makes. */}
                    </PlainText>
                </Grid.Unit>
                <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}}/>
            </Grid>
        </Animated>
    </Grid.Unit>

export default Welcome
