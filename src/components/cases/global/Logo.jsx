/* Modules */
import   React,
       { Component }        from 'react'
import   Grid               from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { Container,
         SectionHeadingBlock,
         SectionContentBlock,
         SectionHeading }             from '../../../styles/global/GENERAL';
import { LogoSectionBody }         from '../../../styles/cases-styles/logo-cases'

class LogoSection extends Component {

    render() {
        return (
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
                component={LogoSectionBody}
                page={this.props.page}
            >
                <Grid
                    component={Container}
                    halign='center'
                >
                    <Grid.Unit
                        size={{ss: 4 / 4, ms: 3 / 8, ls: 6 / 20, ws: 6 / 20}}
                        component={SectionHeadingBlock}
                    >
                        <Animated>
                            <SectionHeading>
                                Логотип
                            </SectionHeading>
                        </Animated>
                    </Grid.Unit>
                    <Grid.Unit
                        size={{ss: 4 / 4, ms: 5 / 8, ls: 12 / 20, ws: 10 / 20}}
                        component={SectionContentBlock}
                        paddingTop
                    >
                        {this.props.children}
                    </Grid.Unit>
                    <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}} />
                </Grid>
            </Grid.Unit>
        )
    }

}
export default LogoSection
