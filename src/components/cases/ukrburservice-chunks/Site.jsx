/* Modules */
import React            from 'react'
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { Container,
         SectionHeadingBlock,
         SectionContentBlock,
         CaseText,
         SectionHeading }       from '../../../styles/global/GENERAL';
import { SiteSection,
         SiteImgCell }  from '../../../styles/cases-styles/site-cases'
/* Statics */
import ubs_site         from '../../../img/cases/ubs/ubs_site_1366.png'

const Site = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={SiteSection}
    >
        <Grid
            component={Container}
            halign='center'
        >
            <Grid.Unit
                size={{ss: 4 / 4, ms: 3 / 8, ls: 6 / 20, ws: 6 / 20}}
                component={SectionHeadingBlock}
            >
                <Animated>
                    <SectionHeading>
                        Сайт
                    </SectionHeading>
                </Animated>
            </Grid.Unit>
            <Grid.Unit
                size={{ss: 4 / 4, ms: 5 / 8, ls: 12 / 20, ws: 10 / 20}}
                component={SectionContentBlock}
            >
                <Animated>
                    <CaseText last>
                        Кроме основных страниц сайта (о компании, услуги и пр.) для посетителей сайта, в лице потенциальных заказчиков, реализована возможность получить информацию о текущем месте расположения оборудования, техническом оснащении, и о том, когда буровые станки будут доступны для следующих проектов.
                    </CaseText>
                </Animated>
            </Grid.Unit>
            <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}} />
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 15 / 20}}
                component={SiteImgCell}
                paddingSsMs
                last
            >
                <Animated>
                    <img
                        src = { ubs_site }
                        alt = ' ubs '
                    />
                </Animated>
            </Grid.Unit>
        </Grid>
    </Grid.Unit>

export default Site