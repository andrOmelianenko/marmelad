/* Modules */
import   React                  from 'react'
import   Grid                   from 'styled-components-grid'
/* Components */
import   Animated               from '../global/Animated'
import   Whirl                  from '../cases/Whirl'
import   Museum              from '../cases/Museum'
import   U21                    from '../cases/U21'
import   EveryDay               from '../cases/EveryDay'
import   Ukrburservice          from '../cases/Ukrburservice'
import   ArtMarket              from '../cases/ArtMarket'
import   NavicomEnergy          from '../cases/NavicomEnergy'
import   DvaNaDva               from '../cases/DvaNaDva'
import   YoOy                   from '../cases/Yoy'
import   Endorfine              from '../cases/Endorfine'
import   Vinoteria              from '../cases/Vinoteria'
import   Slider                 from '../chunks/Slider'
/* Styles */
import { ButtonLink,
         StringLink }           from '../../styles/global/button'
import { LinkSection,
         NextLink }             from '../../styles/cases-styles/GENERAL-cases'
import { AllLink }             from '../../styles/pages-styles/GENERAL-pages'
import { GridCaseCanvas,
         GridUnitCaseCanvas,
         GridUnitSlider }       from '../../styles/chunks/caseCanvas'

const CaseCanvas = ({ ...props }) =>
    <Grid
        halign = 'center'
        component={GridCaseCanvas}
        >
        <Grid.Unit
            size={{ss: 4 / 4, ms: 8 / 8, ls: 22 / 22}}
            component={GridUnitCaseCanvas}
            >
            {
                (props.match.params.id === '1')
              ? <Whirl/>
              : (props.match.params.id === '2')
              ? <Museum/>
              : (props.match.params.id === '3')
              ? <Ukrburservice/>
              : (props.match.params.id === '4')
              ? <EveryDay/>
              : (props.match.params.id === '5')
              ? <U21 />
              : (props.match.params.id === '6')
              ? <ArtMarket/>
              : (props.match.params.id === '7')
              ? <NavicomEnergy/>
              : (props.match.params.id === '8')
              ? <DvaNaDva/>
              : (props.match.params.id === '9')
              ? <YoOy/>
              : (props.match.params.id === '10')
              ? <Endorfine/>
              : (props.match.params.id === '11')
              ? <Vinoteria/>
              : null
            }
        </Grid.Unit>
        <Grid.Unit
            size={{ss: 4 / 4, ms: 8 / 8, ls: 22 / 22}}
            component={GridUnitSlider}
            nomargin = { !(props.match.params.id === '4' || props.match.params.id === '5' || props.match.params.id === '6' || props.match.params.id === '7') }
            >
            {
                ( props.match.params.id === '4' || props.match.params.id === '5' || props.match.params.id === '6' || props.match.params.id === '7')
                    ? <Grid halign = 'center' >
                        <Slider
                            case = { props.match.params.id }
                            />
                      </Grid>
                    : null
            }
            <Grid
                component={LinkSection}
                className='LinkSection'
                halign = 'center'
                >
                <Grid.Unit size={{ls: 6 / 22}} visible = {{ss: false, ls: true}} />
                <Grid.Unit
                    size = {{ ss: 4 / 4, ms: 4 / 8, ls: 6 / 22 }}
                    component={NextLink}
                    >
                    <Animated
                        slideUp
                        >
                        <StringLink
                            to = {
                                (Number(props.match.params.id) < 11)
                                    ? '/works/' + (parseInt(props.match.params.id, 10) + 1)
                                    : '/works/1'
                            }
                            >
                            Следующий проект
                            {/*Next project*/}
                        </StringLink>
                    </Animated>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 4 / 8, ls: 6 / 22}}
                    component={AllLink}
                    >
                    <Animated slideUp >
                        <ButtonLink
                            to = '/works'
                            allWorksCases
                            >
                            Посмотреть все работы
                            {/*View all works*/}
                        </ButtonLink>
                    </Animated>
                </Grid.Unit>
            </Grid>
        </Grid.Unit>
    </Grid>

export default CaseCanvas
