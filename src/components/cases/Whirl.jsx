/* Modules */
import React              from 'react'
import Helmet             from 'react-helmet'
import Grid               from 'styled-components-grid'

/* Components */
import Page               from '../global/Page'
import Main               from './whirl-chunks/Main'
import About              from './whirl-chunks/About'
import Image1            from './whirl-chunks/Image1'
import Images2po2         from './whirl-chunks/Images2po2'
import Icon               from './whirl-chunks/Icon'
import Video              from './whirl-chunks/Video'
import Image2             from './whirl-chunks/Image2'
import Site               from './whirl-chunks/Site'
import SiteBase           from './whirl-chunks/SiteBase'
import Images             from './whirl-chunks/Images'

const Whirl = () =>
    <Page>
        <Grid halign = 'center' >
            <Helmet title = 'Whirl' />

            {/*Main*/}
            <Main />

            {/*About*/}
            <About />

            {/*Image*/}
            <Image1 />

            {/*Image*/}
            <Images2po2 />

            {/*Icon*/}
            <Icon />

            {/*Icon*/}
            <Video />

            {/*Image*/}
            <Image2 />

            {/*Icon*/}
            <Site />

            {/*Icon*/}
            <SiteBase />

            {/*Image*/}
            <Images />

        </Grid>
    </Page>;

export default Whirl
