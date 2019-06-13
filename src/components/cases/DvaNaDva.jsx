/* Modules */
import React     from 'react'
import Helmet    from 'react-helmet'
import Grid      from 'styled-components-grid'

/* Components */
import Page       from '../global/Page'
import Main       from './dvaNaDva-chunks/Main'
import About      from './dvaNaDva-chunks/About'
import ImageBg    from './dvaNaDva-chunks/ImageBg'
import Icon       from './dvaNaDva-chunks/Icon'
import Colors     from './dvaNaDva-chunks/Colors'
import Fonts      from './dvaNaDva-chunks/Fonts'
import Site       from './dvaNaDva-chunks/Site'

const DvaNaDva = () =>
    <Page>
        <Grid halign = 'center' >
            <Helmet title = '2x2' />

            {/*Main*/}
            <Main />

            {/*About*/}
            <About />

            {/*Image*/}
            <ImageBg />

            {/*Fonts*/}
            <Fonts />

            {/*Colors*/}
            <Colors />

            {/*Icon*/}
            <Icon />

            {/*Icon*/}
            <Site />
        </Grid>
    </Page>;

export default DvaNaDva
