/* Modules */
import React              from 'react'
import Helmet             from 'react-helmet'
import Grid               from 'styled-components-grid'

/* Components */
import Page               from '../global/Page'
import Main               from './vinoteria-chunks/Main'
import About              from './vinoteria-chunks/About'
import ImageBg            from './vinoteria-chunks/ImageBg'
import Logo               from './vinoteria-chunks/Logo'
import Finalize           from './vinoteria-chunks/Finalize'
import ImagesFont         from './vinoteria-chunks/ImagesFont'
import ImagesLogo         from './vinoteria-chunks/ImagesLogo'
import Colors             from './vinoteria-chunks/Colors'
import Fonts              from './vinoteria-chunks/Fonts'
import Images             from './vinoteria-chunks/Images'

const Vinoteria = () =>
    <Page>
        <Grid halign = 'center' >
            <Helmet title = 'Vinoteria' />

            {/*Main*/}
            <Main />

            {/*About*/}
            <About />

            {/*Image*/}
            <ImageBg />

            {/*Logo*/}
            <Logo />

            {/*Grid*/}
            <Finalize />

            {/*Image*/}
            <ImagesFont />

            {/*Image*/}
            <ImagesLogo />

            {/*Fonts*/}
            <Fonts />

            {/*Colors*/}
            <Colors />

            {/*Image*/}
            <Images />
        </Grid>
    </Page>;

export default Vinoteria
