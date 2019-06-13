/* Modules */
import   React          from 'react'
import   Helmet         from 'react-helmet'
import   Grid           from 'styled-components-grid'
/* Components */
import   Page           from '../global/Page'
import   AboutBlock     from './about/About'
import   FirstImage     from './about/FirstImage'
import   What           from './about/What'
import   Principles     from './about/Principles'
import   Form           from '../chunks/Form'
import   BottomContacts from '../chunks/BottomContacts'
/* Styles */
import { Hr }           from '../../styles/global/GENERAL';
/* Statics */

const About = () =>
    <Page>
        <Grid halign = 'center' >
            <Helmet title = "About" />

            <AboutBlock />

            <FirstImage />

            <What />

            <Principles />

            <Hr home/>

            <Form />

            <BottomContacts />
        </Grid>
    </Page>

export default About
