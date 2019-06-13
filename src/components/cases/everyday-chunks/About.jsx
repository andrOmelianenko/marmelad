/* Modules */
import React        from 'react'
/* Components */
import Animated     from '../../global/Animated'
import AboutSection from '../global/About'
/* Styles */
import { CaseText } from '../../../styles/global/GENERAL';
/* Statics */

const About = () =>

    <AboutSection page='artMarket'>
        <Animated>
            <CaseText>
                EveryDay Studio это комплекс приложений для планирования питания и тренировок. Это программное
                обеспечение предназначено для диетологов, фитнес-тренеров, фитнес-клубов и медицинских клиник.
                {/*Everyday Studio is a software suite for nutrition planning. It is intended for dietologists, fitness trainers, fitness clubs and medical institutions.*/}
            </CaseText>
            <CaseText last>
                Клиент обратился к нам за разработкой дизайна печатной презентационной продукции, которую они могли бы
                использовать на конференциях, презентациях и прочих мероприятиях.
                {/*The client asked us for help with print designs which they could use for distribution purposes at conferences, presentations, etc. We made all required work in time. Moreover, we designed some additional layouts, that could be useful for the client in the future.*/}
            </CaseText>
        </Animated>
    </AboutSection>;

export default About