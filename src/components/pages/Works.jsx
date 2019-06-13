/* Modules */
import   React                  from 'react'
import { Route,
         Switch }               from 'react-router-dom'
import   Grid                   from 'styled-components-grid'
import   Helmet                 from 'react-helmet'
/* Components */
import   WorksPane              from '../chunks/WorksPane'
import   BottomContacts         from '../chunks/BottomContacts'
import   CaseCanvas             from '../chunks/CaseCanvas'
import   Page                   from '../global/Page'
/* Styles */
import { Container,
         SectionContentBlock }  from '../../styles/global/GENERAL'
import { WorksSection }         from '../../styles/pages-styles/works/works-pages'

const Works = () =>
    <Switch>
        <Route exact path = '/works' render = { props =>
            <Page>
                <Helmet title = "Works" />
                <Grid halign = 'center' >
                    <Grid.Unit
                        size = {{ ss: 4 / 4, ms: 8 / 8, ls: 20 / 22 }}
                        component = { WorksSection }
                        >
                        <Grid
                            component = { Container }
                            halign = 'center'
                            >
                            <Grid.Unit
                                size = {{ ss: 4 / 4, ms: 8 / 8, ls: 20 / 20 }}
                                component = { SectionContentBlock }
                                paddingTopNone
                                >
                                <WorksPane worksPage />
                            </Grid.Unit>
                        </Grid>
                    </Grid.Unit>
                    <BottomContacts />
                </Grid>
            </Page>
        }/>
        <Route path = '/works/:id' component = { CaseCanvas }/>
    </Switch>

export default Works
