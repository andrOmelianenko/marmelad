/* Modules */
import React        from 'react'
/* Components */
import Animated     from '../../global/Animated'
import AboutSection from '../global/About'
/* Styles */
import { CaseText } from '../../../styles/global/GENERAL';

const About = () =>

    <AboutSection page='dvaNaDva'>
        <Animated>
            <CaseText last>
                Перед нами стояла задача разработать посадочную страницу для продажи услуг по ремонту квартир, офисов и коттеджей. Главная цель – создание потока входящих запросов. Для достижения этой цели нами был разработан не только простой и понятный дизайн страницы, но и текстовый контент, который бы обеспечивал высокий коэффициент вовлеченности пользователей и качественно раскрывал преимущества услуг компании 2х2.
            </CaseText>
        </Animated>
    </AboutSection>

export default About