/* Modules */
import React        from 'react'
/* Components */
import Animated     from '../../global/Animated'
import AboutSection from '../global/About'
/* Styles */
import { CaseText } from '../../../styles/global/GENERAL';
/* Statics */

const About = () =>

    <AboutSection page='everyDay'>
        <Animated>
            <CaseText>
                Endorfine — это семейный бизнес по производству натуральных джемов, варенья и конфитюров высочайшего
                качества, созданных дарить людям радость, новые вкусовые ощущения, и возможность открыть для себя этот
                знакомый нам с детства продукт в новом формате. Благодаря авторским рецептам, смелым сочетаниям
                ингредиентов и любви к своему делу команды Endorfine.
            </CaseText>
            <CaseText last>
                Перед нами стояла задача разработать название и упаковку.
            </CaseText>
        </Animated>
    </AboutSection>;

export default About