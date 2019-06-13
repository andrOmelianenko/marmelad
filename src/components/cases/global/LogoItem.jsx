/* Modules */
import   React,
       { Component }    from 'react'
import   Grid           from 'styled-components-grid'
/* Components */
/* Styles */
import { CaseText }     from '../../../styles/global/GENERAL';
import { LogoItemBody,
         LogoCircle }   from '../../../styles/cases-styles/logo-cases'

class LogoItem extends Component {

    render() {
        return (
            <Grid.Unit
                size      = { {ss: 2 / 4, ms: 1 / 3, ls: 3 / 12} }
                component = { LogoItemBody }
            >
                <LogoCircle>
                    <CaseText last center low>
                        { this.props.children }
                    </CaseText>
                </LogoCircle>
            </Grid.Unit>
        )
    }

}
export default LogoItem
