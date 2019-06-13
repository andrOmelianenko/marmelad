/* Modules */
import React        from 'react'
import Grid               from 'styled-components-grid'
/* Components */
import Animated     from '../../global/Animated'
import LogoSection  from '../global/Logo'
/* Styles */
import { ArticleHeading,
         CaseText } from '../../../styles/global/GENERAL';
import { VinoteriaRow,
         VinoteriaItem }        from '../../../styles/cases-styles/logo-cases'

/* Statics */
import vinoteria_1               from '../../../img/cases/vinoteria/svg/logo_concept_1.svg'
import vinoteria_2               from '../../../img/cases/vinoteria/svg/logo_concept_2.svg'
import vinoteria_3               from '../../../img/cases/vinoteria/svg/logo_concept_3.svg'
import vinoteria_4               from '../../../img/cases/vinoteria/svg/logo_concept_4.svg'
import vinoteria_5               from '../../../img/cases/vinoteria/svg/logo_concept_5.svg'
import vinoteria_6               from '../../../img/cases/vinoteria/svg/logo_concept_6.svg'
import vinoteria_7               from '../../../img/cases/vinoteria/svg/logo_concept_7.svg'
import vinoteria_8               from '../../../img/cases/vinoteria/svg/logo_concept_8.svg'
import vinoteria_9               from '../../../img/cases/vinoteria/svg/logo_concept_9.svg'
import vinoteria_10              from '../../../img/cases/vinoteria/svg/logo_concept_10.svg'


const Logo = () =>

    <LogoSection page='vinoteria'>
        <Animated>
            <CaseText last>
                Первоначальные концепции лого были ориентированы на ассоциации с вином, качествами вина, местом продажи
                вина. После презентации первых концепций, пожелания заказчика сместились в сторону более смелого и
                абстрактного решения для лого. Так появился изящный символ, объединяющий в себе формы птички и винного
                бокала.
            </CaseText>
        </Animated>
        <Animated>
            <Grid
                component={VinoteriaRow}
            >
                <Grid.Unit
                    size={{ss: 1}}
                    component={VinoteriaItem}
                    vinoteria0
                >
                    <ArticleHeading left>Первоначальные концепции</ArticleHeading>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 21 / 100, ms: 20 / 100}}
                    component={VinoteriaItem}
                    vinoteria1
                >
                    <img src={vinoteria_1} alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 12 / 100, ms: 15 / 200}}
                    component={VinoteriaItem}
                    vinoteria2
                >
                    <img src={vinoteria_2} alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 25 / 100, ms: 16 / 100}}
                    component={VinoteriaItem}
                    vinoteria3
                >
                    <img src={vinoteria_3} alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 24 / 100, ms: 22 / 100}}
                    component={VinoteriaItem}
                    vinoteria4
                >
                    <img src={vinoteria_5} alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 24 / 100, ms: 15 / 100}}
                    component={VinoteriaItem}
                    vinoteria5
                >
                    <img src={vinoteria_6} alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 26 / 100, ms: 22 / 100}}
                    component={VinoteriaItem}
                    vinoteria6
                >
                    <img src={vinoteria_8} alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 35 / 100, ms: 27 / 100}}
                    component={VinoteriaItem}
                    vinoteria7
                >
                    <img src={vinoteria_4} alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 56 / 100, ms: 30 / 100}}
                    component={VinoteriaItem}
                    vinoteria8
                >
                    <img src={vinoteria_9} alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 46 / 100, ms: 45 / 100}}
                    component={VinoteriaItem}
                    vinoteria9
                >
                    <img src={vinoteria_7} alt=""/>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 38 / 100}}
                    component={VinoteriaItem}
                    vinoteria10
                >
                    <img src={vinoteria_10} alt=""/>
                </Grid.Unit>
            </Grid>
        </Animated>
    </LogoSection>

export default Logo