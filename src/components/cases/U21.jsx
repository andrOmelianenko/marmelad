/* Modules */
import React              from 'react'
import Helmet             from 'react-helmet'
import Grid               from 'styled-components-grid'
/* Components */
import Page               from '../global/Page'
import Main               from './u21-chunks/Main'
import About              from './u21-chunks/About'
import FirstImage         from './u21-chunks/FirstImage'
import Logo               from './u21-chunks/Logo'
import SecondImages       from './u21-chunks/SecondImages'
import Fonts              from './u21-chunks/Fonts'
import Colors             from './u21-chunks/Colors'
import Image              from './u21-chunks/Images'

const U21 = () =>
    <Page>
        <Grid halign='center' >
            <Helmet title="U-21"/>
            {/*Main*/}
            <Main />

            {/*About*/}
            <About />

            {/*Image*/}
            <FirstImage />

            {/*Logo*/}
            <Logo />

            {/*LogoImages*/}
            <SecondImages />

            {/*Fonts*/}
            <Fonts />

            {/*Colors*/}
            <Colors />

            {/*Image*/}
            <Image />
        </Grid>
    </Page>

export default U21
