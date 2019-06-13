/* Modules */
import   React                      from 'react'
import   Grid                       from 'styled-components-grid'
/* Components */
import   Animated                   from '../../global/Animated'
/* Styles */
import { Container,
         SectionHeadingBlock,
         SectionContentBlock,
         SectionHeading,
         InfoHeading,
         InfoText,
         PhoneLink }                 from '../../../styles/global/GENERAL';
import { BottomContactsSection }    from '../../../styles/pages-styles/home/bottomcontacts-pages'
import { InfoItem }                 from '../../../styles/pages-styles/contacts/contacts'

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
                    size={{ss: 4 / 4, ms: 8 / 8, ls: 6 / 20, ws: 6 / 20}}
                    component={SectionHeadingBlock}
                    marginBottom
                    >
                    <SectionHeading>
                        Контакты
                    </SectionHeading>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 8 / 8, ls: 12 / 20, ws: 10 / 20}}
                    component={SectionContentBlock}
                    paddingNone
                    >
                    <Grid>
                        <Grid.Unit
                            size={{ss: 4 / 4, ms: 4 / 8, ls: 6 / 12}}
                            component={InfoItem}
                            >
                            <Animated>
                                <InfoHeading>
                                    Телефоны
                                </InfoHeading>
                                <InfoText visibleLs>
                                    +38&nbsp;(099)&nbsp;174&nbsp;39&nbsp;38
                                </InfoText>
                                <PhoneLink href="tel:+380991743938">+38&nbsp;(099)&nbsp;174&nbsp;39&nbsp;38</PhoneLink>
                            </Animated>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 4 / 4, ms: 4 / 8, ls: 6 / 12}}
                            component={InfoItem}
                            >
                            <Animated>
                                <InfoHeading>
                                    Адрес
                                </InfoHeading>
                                <InfoText>
                                    ул.&nbsp;Котляревского&nbsp;2а<br/>
                                    Полтава,&nbsp;Украина
                                </InfoText>
                            </Animated>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 4 / 4, ms: 4 / 8, ls: 6 / 12}}
                            component={InfoItem}
                            >
                            <Animated>
                                <InfoHeading>
                                    Skype
                                </InfoHeading>
                                <InfoText>
                                    Marmelad Design Studio
                                </InfoText>
                            </Animated>
                        </Grid.Unit>
                        <Grid.Unit
                            size={{ss: 4 / 4, ms: 4 / 8, ls: 6 / 12}}
                            component={InfoItem}
                            >
                            <Animated>
                                <InfoHeading>
                                    E-mail
                                </InfoHeading>
                                <InfoText>
                                    hello.marmelad@gmail.com
                                </InfoText>
                            </Animated>
                        </Grid.Unit>
                    </Grid>
                </Grid.Unit>
                <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}} />
            </Grid>
        </Animated>
    </Grid.Unit>

export default BottomContacts