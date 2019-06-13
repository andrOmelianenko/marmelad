/* Modules */
import React              from 'react'
import Helmet             from 'react-helmet'
import Grid               from 'styled-components-grid'
/* Components */
import Page               from '../global/Page'
import Main               from './navicomEnergy-chunks/Main'
import About              from './navicomEnergy-chunks/About'
import Logo               from './navicomEnergy-chunks/Logo'
import Symbol             from './navicomEnergy-chunks/Symbol'
import FirstImage         from './navicomEnergy-chunks/FirstImage'
import GridBlock          from './navicomEnergy-chunks/Grid'
import Fonts              from './navicomEnergy-chunks/Fonts'
import Colors             from './navicomEnergy-chunks/Colors'
import Image              from './navicomEnergy-chunks/Images'
import MockUp             from './navicomEnergy-chunks/MockUp'
import Car                from './navicomEnergy-chunks/Car'

const NavicomEnergy = () =>
    <Page>
        <Grid halign = 'center' >
            <Helmet title = 'Navicom Energy' />

            {/*Main*/}
            <Main />

            {/*About*/}
            <About />

            {/*Logo*/}
            <Logo />

            {/*Symbol*/}
            <Symbol />

            {/*Symbol*/}
            <FirstImage />

            {/*Grid*/}
            <GridBlock />

            {/*Fonts*/}
            <Fonts />

            {/*Colors*/}
            <Colors />

            {/*Image*/}
            <Image />

            {/*Car*/}
            <MockUp />

            {/*Car*/}
            <Car />
        </Grid>
    </Page>;


export default NavicomEnergy
