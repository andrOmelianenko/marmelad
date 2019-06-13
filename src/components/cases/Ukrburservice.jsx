/* Modules */
import React              from 'react'
import Helmet             from 'react-helmet'
import Grid               from 'styled-components-grid'
/* Components */
import Page               from '../global/Page'
import Main               from './ukrburservice-chunks/Main'
import About              from './ukrburservice-chunks/About'
import ImageBg            from './ukrburservice-chunks/ImageBg'
import Logo               from './ukrburservice-chunks/Logo'
import Symbol             from './ukrburservice-chunks/Symbol'
import Evolution          from './ukrburservice-chunks/Evolution'
import GridBlock          from './ukrburservice-chunks/Grid'
import Fonts              from './ukrburservice-chunks/Fonts'
import Colors             from './ukrburservice-chunks/Colors'
import Options            from './ukrburservice-chunks/Options'
import Image              from './ukrburservice-chunks/Images'
import Blanks             from './ukrburservice-chunks/Blanks'
import Car                from './ukrburservice-chunks/Car'
import Site               from './ukrburservice-chunks/Site'

const Ukrburservice = () =>
    <Page>
        <Grid halign = 'center' >
            <Helmet title = 'Ukrburservice' />

            {/*Main*/}
            <Main />

            {/*About*/}
            <About />

            {/*Image*/}
            <ImageBg />

            {/*Logo*/}
            <Logo />

            {/*Symbol*/}
            <Symbol />

            {/*Evolution*/}
            <Evolution />

            {/*Grid*/}
            <GridBlock />

            {/*Fonts*/}
            <Fonts />

            {/*Colors*/}
            <Colors />

            {/*Options*/}
            <Options />

            {/*Image*/}
            <Image />

            {/*Car*/}
            <Blanks />

            {/*Car*/}
            <Car />

            {/*Site*/}
            <Site />
        </Grid>
    </Page>;

export default Ukrburservice
