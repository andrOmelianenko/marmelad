/* Modules */
import   React                  from 'react'
import   Grid                   from 'styled-components-grid'
/* Components */
import   Animated               from '../global/Animated'
/* Styles */
import { Container,
         InfoHeading,
         InfoText,
         PhoneLink }             from '../../styles/global/GENERAL';
import { BottomContactsSection,
         Item }                 from '../../styles/pages-styles/home/bottomcontacts-pages'

const BottomContacts = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={BottomContactsSection}
    >
        <Animated>
            <Grid
                component={Container}
                halign='center'
            >
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 4 / 8, ls: 4 / 20}}
                    component={Item}
                >
                    <InfoHeading>
                        Телефоны
                    </InfoHeading>
                    <InfoText visibleLs>
                        +38&nbsp;(099)&nbsp;174&nbsp;39&nbsp;38
                    </InfoText>
                    <PhoneLink href="tel:+380991743938">+38&nbsp;(099)&nbsp;174&nbsp;39&nbsp;38</PhoneLink>
                </Grid.Unit>
                <Grid.Unit size={{ls: 1 / 20}} visible={{ss: false, ls: true}}/>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 4 / 8, ls: 4 / 20}}
                    component={Item}
                >
                    <InfoHeading>
                        E-mail
                    </InfoHeading>
                    <InfoText>
                        hello.marmelad@gmail.com
                    </InfoText>
                </Grid.Unit>
                <Grid.Unit size={{ls: 1 / 20}} visible={{ss: false, ls: true}}/>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 4 / 8, ls: 4 / 20}}
                    component={Item}
                >
                    <InfoHeading>
                        Skype
                    </InfoHeading>
                    <InfoText>
                        Marmelad&nbsp;Design&nbsp;Studio
                    </InfoText>
                </Grid.Unit>
                <Grid.Unit size={{ls: 1 / 20}} visible={{ss: false, ls: true}}/>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 4 / 8, ls: 3 / 20}}
                    component={Item}
                >
                    <InfoHeading>
                        Адрес
                    </InfoHeading>
                    <InfoText>
                        ул.&nbsp;Котляревского&nbsp;2а<br/>
                        Полтава,&nbsp;Украина
                    </InfoText>
                </Grid.Unit>
            </Grid>
        </Animated>
    </Grid.Unit>

export default BottomContacts
