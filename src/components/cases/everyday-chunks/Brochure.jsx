/* Modules */
import React                    from 'react'
import Grid                     from 'styled-components-grid'
/* Components */
import Animated                 from '../../global/Animated'
/* Styles */
import { Container,
         SectionHeadingBlock,
         SectionContentBlock,
         CaseText,
         SectionHeading }       from '../../../styles/global/GENERAL';
import { BrochureSection }      from '../../../styles/cases-styles/brochure-cases'
/* Statics */

const Brochure = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={BrochureSection }
        >
        <Grid
            component={Container }
            halign='center'
            >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 3 / 8, ls: 6 / 20, ws: 6 / 20}}
                component={SectionHeadingBlock }
            >
                <Animated>
                    <SectionHeading>
                        Брошюра
                    </SectionHeading>
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 5 / 8, ls: 12 / 20, ws: 10 / 20}}
                component={SectionContentBlock }
                paddingTop
            >
                <Animated>
                    <CaseText last >
                        Основной частью нашего задания была разработка презентационной брошюры. Целью было показать преимущества ПО EveryDay Studio, подкрепленные отзывами клиентов, а также рассказать о тарифных планах, созданных для разных групп целевой аудитории.
                        {/*As a part of the project, a presentation brochure was developed. The goal was to show the  advantages of Everyday Studio software, backed up by user feedback and present tariff packages created for different user groups.*/}
                    </CaseText>
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}} />
        </Grid>
    </Grid.Unit>

export default Brochure
