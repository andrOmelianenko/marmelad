/* Modules */
import React              from 'react'
import Helmet             from 'react-helmet'
import Grid               from 'styled-components-grid'
/* Components */
import Page               from '../global/Page'
import Main               from './everyday-chunks/Main'
import About              from './everyday-chunks/About'
import FirstImages        from './everyday-chunks/FirstImages'
import Brochure           from './everyday-chunks/Brochure'
import Image              from './everyday-chunks/Images'
import ImageBg            from './everyday-chunks/ImageBg'

const EveryDay = () =>
    <Page>
        <Grid halign = 'center' >
            <Helmet title = "Every Day"/>

            {/*Main*/}
            <Main />

            {/*About*/}
            <About />

            {/*Image*/}
            <FirstImages />

            {/*Brochure*/}
            <Brochure />

            {/*Image*/}
            <Image />

            {/*Image*/}
            <ImageBg />
        </Grid>
    </Page>;

export default EveryDay
