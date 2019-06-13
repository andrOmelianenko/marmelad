/* Modules */
import   React,
       { Component }    from 'react'
import   Grid           from 'styled-components-grid'
/* Components */
/* Styles */
import { IdeaItemBody,
         IdeaCircle }   from '../../../styles/cases-styles/logo-cases'

class IdeaItem extends Component {

    render() {
        return (
            <Grid.Unit
                size      = { {ss: 1 / 3, ms: 1 / 3, ls: 3 / 12, ws: 3 / 10} }
                component = { IdeaItemBody }
            >
                <IdeaCircle>
                    <p>
                        { this.props.children }
                    </p>
                </IdeaCircle>
            </Grid.Unit>
        )
    }

}
export default IdeaItem
