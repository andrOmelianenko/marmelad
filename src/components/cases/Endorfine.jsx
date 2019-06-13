/* Modules */
import React              from 'react'
import Helmet             from 'react-helmet'
import Grid               from 'styled-components-grid'
/* Components */
import Page               from '../global/Page'
import Main               from './endorfine-chunks/Main'
import About              from './endorfine-chunks/About'
import Image              from './endorfine-chunks/Images'

const Endorfine = () =>
    <Page>
        <Grid halign = 'center' >
            <Helmet title = "Endorfine"/>

            {/*Main*/}
            <Main />

            {/*About*/}
            <About />

            {/*Image*/}
            <Image />

        </Grid>
    </Page>;

export default Endorfine
