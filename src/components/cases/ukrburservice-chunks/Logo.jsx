/* Modules */
import React        from 'react'
import Grid         from 'styled-components-grid'
/* Components */
import Animated     from '../../global/Animated'
import LogoSection  from '../global/Logo'
import LogoItem     from '../global/LogoItem'
/* Styles */
import { CaseText } from '../../../styles/global/GENERAL';
import { LogoRow }  from '../../../styles/cases-styles/logo-cases'
/* Statics */

const Logo = () =>

    <LogoSection page = ' ukrburservice ' >
        <Animated>
            <CaseText last>
                Для заказчика в фирменном знаке наиболее важно было показать высокий профессионализм команды, использование передовых технологий и лидерские амбиции на рынке. Согласно этому мы решили объединить в логотипе 3 составляющих. Национальный орнамент отражает в себе лидерство на украинском рынке буровых услуг, скрещенные руки означают сплоченный коллектив, а переплетенные геометрические формы призваны ассоциировать компанию с ее технологичностью.
            </CaseText>
        </Animated>
        <Animated>
            <Grid
                component = { LogoRow }
            >
                <LogoItem>
                    Технологии
                </LogoItem>
                <LogoItem>
                    Развитие
                </LogoItem>
                <LogoItem>
                    Команда
                </LogoItem>
                <LogoItem>
                    Уникальность
                </LogoItem>
                <LogoItem>
                    Профес&shy;сионализм
                </LogoItem>
                <LogoItem>
                    Лидерство
                </LogoItem>
            </Grid>
        </Animated>
    </LogoSection>

export default Logo
