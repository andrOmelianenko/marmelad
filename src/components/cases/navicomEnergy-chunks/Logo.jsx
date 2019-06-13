/* Modules */
import React from 'react'
import Grid from 'styled-components-grid'
/* Components */
import Animated from '../../global/Animated'
import LogoSection  from '../global/Logo'
import LogoItem     from '../global/LogoItem'
/* Styles */
import { LogoRow } from '../../../styles/cases-styles/logo-cases'
/* Statics */

const Logo = () =>

    <LogoSection page=' ukrburservice '>
        <Animated>
            <Grid
                component={LogoRow}
                navicomEnergy
            >
                <LogoItem>
                    Профес&shy;сиональная
                </LogoItem>
                <LogoItem>
                    Результативная
                </LogoItem>
                <LogoItem>
                    Надежная
                </LogoItem>
                <LogoItem>
                    Прогрессивная
                </LogoItem>
                <LogoItem>
                    Высоко&shy;технологичная
                </LogoItem>
                <LogoItem>
                    Энерго&shy;ефективная, экологичная
                </LogoItem>
            </Grid>
        </Animated>
    </LogoSection>

export default Logo