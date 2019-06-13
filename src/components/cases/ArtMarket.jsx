/* Modules */
import React              from 'react'
import Helmet             from 'react-helmet'
import Grid               from 'styled-components-grid'

/* Components */
import Page               from '../global/Page'
import Main               from './artMarket-chunks/Main'
import About              from './artMarket-chunks/About'
import FirstImages        from './artMarket-chunks/FirstImages'
import Logo               from './artMarket-chunks/Logo'
import SecondImage        from './artMarket-chunks/SecondImage'
import Colors             from './artMarket-chunks/Colors'
import Conception         from './artMarket-chunks/Conception'
import Finalize           from './artMarket-chunks/Finalize'
import Fonts              from './artMarket-chunks/Fonts'
import Image              from './artMarket-chunks/Images'

const ArtMarket = () =>
    <Page>
        <Grid halign = 'center' >
            <Helmet title = 'ArtMarket' />

            {/*Main*/}
            <Main />

            {/*About*/}
            <About />

            {/*Image*/}
            <FirstImages />

            {/*Logo*/}
            <Logo />

            {/*Image*/}
            <SecondImage />

            {/*Colors*/}
            <Colors />

            {/*Symbol*/}
            <Conception />

            {/*Grid*/}
            <Finalize />

            {/*Fonts*/}
            <Fonts />

            {/*Image*/}
            <Image />
        </Grid>
    </Page>;

export default ArtMarket
