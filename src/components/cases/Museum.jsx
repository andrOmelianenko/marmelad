/* Modules */
import React              from 'react'
import Helmet             from 'react-helmet'
import Grid               from 'styled-components-grid'
/* Components */
import Page     from '../global/Page'
import Main     from './museum-chunks/Main'
import About    from './museum-chunks/About'
import Image    from './museum-chunks/Image'
import Finalize from './museum-chunks/Finalize'
import Set      from './museum-chunks/Set'
import Images   from './museum-chunks/Images'

const LocalLore = () =>
    <Page>
        <Grid halign = 'center' >
            <Helmet title = 'Poltava Museum of Local Lore' />

            <Main />

            <About />

            <Image />

            <Finalize />

            <Set />

            <Images />
        </Grid>
    </Page>;

export default LocalLore
