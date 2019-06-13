/* Modules */
import React        from 'react'
/* Components */
import Animated     from '../../global/Animated'
import AboutSection from '../global/About'
/* Styles */
import { CaseText } from '../../../styles/global/GENERAL';
/* Statics */

const About = () =>

    <AboutSection page='u21'>
        <Animated>
            <CaseText>
                U–21 - первый магазин в Полтаве, в котором представлена одежда исключительно украинских дизайнеров. Его особенностью является постоянное обновление коллекций в течение 21 дня и последующие распродажи.
                {/*U-21 is the first store in Poltava, in which the clothes of exclusively Ukrainian designers are presented. Its feature is the constant renewal of collections for 21 days and subsequent sales.*/}
            </CaseText>
            <CaseText>
                Покупателями U–21 являются в основном молодые украинцы с активной жизненной позицией и чувством стиля. Это люди, которые не боятся перемен и осознают их необходимость. А в одежде больше всего ценят индивидуальность и эксклюзивность.
                {/*Buyers of U–21 are mostly young Ukrainians with an active lifestyle and a sense of style. These are people, who are not afraid of change and are aware of their necessity. And in clothes most of all appreciate the individuality and exclusivity.*/}
            </CaseText>
            <CaseText last>
                Нашей студии было поручено разработать легкий, понятный, современный логотип и йдентику, которые продемонстрируют особенности концепции магазина.
                {/*Our studio was tasked to develop an easy-to-understand, concise, modern logo and identity that demonstrates the features of the store concept.*/}
            </CaseText>
        </Animated>
    </AboutSection>

export default About