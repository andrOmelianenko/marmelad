/* Modules */
import   React                  from 'react'
import   Helmet                 from 'react-helmet'
import   Grid                   from 'styled-components-grid'
/* Components */
import   Form                   from '../chunks/Form'
import   Page                   from '../global/Page'
/* Styles */
import { Container }            from '../../styles/global/GENERAL'
import { BackToWorksLink }      from '../../styles/global/button'
import { GetInTouchSection,
         GetInTouchButtonBlock,
         GetInTouchButton }     from '../../styles/pages-styles/getInTouch/getInTouch-pages'
/* Statics */

const GetInTouch = () =>
    <Page>
        <div>
            <Helmet title="Get in touch"/>
            <Grid
                component={GetInTouchSection}
                halign='center'
                >
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
                    component={GetInTouchButtonBlock}
                >
                    <Grid
                        component={Container}
                        halign='center'
                    >
                        <Grid.Unit
                            component={GetInTouchButton}
                            size={{ss: 4 / 4, ms: 8 / 8, ls: 18 / 20}}
                        >
                            <BackToWorksLink to='/works'>
                                Назад к проектам
                                {/*Back to works*/}
                            </BackToWorksLink>
                        </Grid.Unit>
                    </Grid>
                </Grid.Unit>
                <Form expanded/>
            </Grid>
        </div>
    </Page>

export default GetInTouch