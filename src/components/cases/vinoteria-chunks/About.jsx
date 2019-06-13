/* Modules */
import React        from 'react'
/* Components */
import Animated     from '../../global/Animated'
import AboutSection from '../global/About'
/* Styles */
import { CaseText } from '../../../styles/global/GENERAL';
/* Statics */

const About = () =>

    <AboutSection page='vinoteria'>
        <Animated>
            <CaseText>
                Заказчик обратился к нам за помощью в создании фирменного стиля для магазина элитного алкоголя. Главной целью было разработать визуальный язык, который бы качественно отличался от того что есть у прямых и косвенных конкурентов в городе.
            </CaseText>
            <CaseText last>
                Для начала требовалось придумать нейм, достаточно простой для восприятия потребителей, и при этом отражающий специфику магазина. Из всех предложенных нами вариантов, клиент остановился на Vinoteria.
            </CaseText>
        </Animated>
    </AboutSection>;

export default About