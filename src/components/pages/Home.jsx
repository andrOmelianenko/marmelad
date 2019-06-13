/* Modules */
import React          from 'react'
import Helmet         from 'react-helmet'
import Grid           from 'styled-components-grid'
/* Components */
import Page           from '../global/Page'
import Main           from './home/Main'
import Greets         from './home/Greets'
import Works          from './home/Works'
import Slider         from '../chunks/Slider'
import Form           from '../chunks/Form'
import BottomContacts from '../chunks/BottomContacts'
/* Styles */
import { Hr }         from '../../styles/global/GENERAL'

const Home = () =>
    <Page>
        <Grid halign = 'center' >
            <Helmet title = "Home" />
            <Main />
            <Greets />
            <Works />
            <Slider home />
            <Hr home/>
            <Form />
            <BottomContacts />
        </Grid>
    </Page>

export default Home
