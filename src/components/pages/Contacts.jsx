/* Modules */
import   React          from 'react'
import   Helmet         from 'react-helmet'
import   Grid           from 'styled-components-grid'
/* Components */
import   Page           from '../global/Page'
import   Welcome        from './contacts/Welcome'
import   Map            from './contacts/Map'
import   Form           from '../chunks/Form'
import   BottomContacts from './contacts/BottomContacts'
/* Styles */
import { Hr }           from '../../styles/global/GENERAL';
/* Statics */

const Contacts = () =>
    <Page>
        <Grid halign = 'center' >
            <Helmet title = "Контакты" />

            <Welcome />

            <Map />

            <Form expanded />

            <Hr />

            <BottomContacts />
        </Grid>
    </Page>

export default Contacts
