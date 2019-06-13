/* Modules */
import React        from 'react'
import Grid               from 'styled-components-grid'
/* Components */
import Animated     from '../../global/Animated'
import LogoSection  from '../global/Logo'
import IdeaItem  from '../global/IdeaItem'
/* Styles */
import { CaseText } from '../../../styles/global/GENERAL';
import { IdeaRow }    from '../../../styles/cases-styles/logo-cases'
/* Statics */
const Logo = () =>

    <LogoSection page='artMarket'>
        <Animated>
            <CaseText last>
                Со&shy;вмест&shy;но с за&shy;каз&shy;чи&shy;ком мы выя&shy;ви&shy;ли ос&shy;нов&shy;ные на&shy;прав&shy;ле&shy;ния для раз&shy;ви&shy;тия ай&shy;ден&shy;ти&shy;ки: тра&shy;ди&shy;ции на&shy;род&shy;но&shy;го твор&shy;чес&shy;тва и сов&shy;ре&shy;мен&shy;ные трен&shy;ды в мо&shy;де и ди&shy;зай&shy;не.
            </CaseText>
        </Animated>
        <Animated>
            <Grid
                component = { IdeaRow }
            >
                <IdeaItem>
                    Мода, стиль
                </IdeaItem>
                <IdeaItem>
                    Искусство
                </IdeaItem>
                <IdeaItem>
                    Традиции
                </IdeaItem>
            </Grid>
        </Animated>
    </LogoSection>

export default Logo