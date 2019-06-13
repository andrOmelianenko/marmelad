/* Modules */
import React      from 'react'
import Helmet     from 'react-helmet'
import Grid       from 'styled-components-grid'

/* Components */
import Page       from '../global/Page'
import Main       from './yoy-chunks/Main'
import About      from './yoy-chunks/About'
import Finalize   from './yoy-chunks/Finalize'
import Options    from './yoy-chunks/Options'
import ImageBg    from './yoy-chunks/ImageBg'
import Colors     from './yoy-chunks/Colors'
import Fonts      from './yoy-chunks/Fonts'
import Image      from './yoy-chunks/Images'
import Packaging  from './yoy-chunks/Packaging'

const YoOy = () =>
    <Page>
        <Grid halign = 'center' >
            <Helmet title = 'ЙоОй!' />

            {/*Main*/}
            <Main />

            {/*About*/}
            <About />

            {/*Grid*/}
            <Finalize />

            {/*Options*/}
            <Options />

            {/*Image*/}
            <ImageBg />

            {/*Fonts*/}
            <Fonts />

            {/*Colors*/}
            <Colors />

            {/*Image*/}
            <Image />

            {/*Image*/}
            <Packaging />

        </Grid>
    </Page>;

export default YoOy
