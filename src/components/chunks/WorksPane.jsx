/* Modules */
import React, { Component }   from 'react'
import Grid                   from 'styled-components-grid'
import { CSSTransitionGroup } from 'react-transition-group'
/* Components */
import Work                   from './Work'
/* Styles */
import { ControlBlock,
         WorksList,
         SortLabel }          from '../../styles/pages-styles/works/works-pane'
import { WORKS }              from '../../data/works-data'

class WorksPane extends Component {
    state = {
        displayedWorks: WORKS,
        showAll: true,
        showWeb: false,
        showIdent: false
    }

    componentWillMount() {
        // this.sortArray(this.state.displayedWorks, true)
        if (this.props.homePage) {
            this.displayAtHomePage()
        }
    }

    displayAtHomePage = () => {
        const displayedWorks = WORKS.slice(0, 8)
        this.setState({ displayedWorks: displayedWorks })
    }

    // sortArray = (arr, reverse) => {
    //     reverse = !reverse ? 1 : -1;
    //     arr.sort((a, b) => reverse * (a.year - b.year))
    // }

    handleSort = event => {
        this.setState({
            showAll: false,
            showWeb: false,
            showIdent: false
        })

        this.setState({
            [event.target.id]: event.target.checked
        })

        const displayedWorks = WORKS.filter(el => {
            if (event.target.value === 'all') {
                return el.type
            }
            return !el.type.indexOf(event.target.value)
        })

        // this.sortArray(displayedWorks, true)

        this.setState({ displayedWorks: displayedWorks })
    }

    render() {
        const { showAll, showIdent, showWeb, displayedWorks } = this.state
        const { homePage, worksPage } = this.props
        
        return (
            <Grid halign = 'center' >
                {
                    ( worksPage )
                        ? <Grid.Unit
                            size = {{ ss: 4 / 4, ms: 8 / 8, ls: 18 / 20 }}
                            component = { ControlBlock }
                            >
                            <input
                                id = 'showAll'
                                type = 'radio'
                                value = 'all'
                                onChange = { this.handleSort }
                                checked = { showAll }
                                hidden
                                >
                            </input>
                            <SortLabel
                                htmlFor = 'showAll'
                                checked = { showAll }
                                >
                                Все
                                {/* All */}
                            </SortLabel>
                            <input
                                id = 'showIdent'
                                type = 'radio'
                                value = 'ident'
                                onChange = { this.handleSort }
                                checked = { showIdent }
                                hidden
                                >
                            </input>
                            <SortLabel
                                htmlFor = 'showIdent'
                                checked = { showIdent }
                                right = { showAll }
                                left = { showWeb }
                                >
                                Лого / Айдентика
                                {/* Logo / Identity */}
                            </SortLabel>
                            <input
                                id = 'showWeb'
                                type = 'radio'
                                value = 'web'
                                onChange = { this.handleSort }
                                checked = { showWeb }
                                hidden
                                >
                            </input>
                            <SortLabel
                                htmlFor = 'showWeb'
                                checked = { showWeb }
                                >
                                Сайты
                                {/* Webdesign */}
                            </SortLabel>
                          </Grid.Unit>
                        : null
                }
                <Grid.Unit>
                    <CSSTransitionGroup
                        component = { WorksList }
                        margin = { worksPage }
                        transitionName = "example"
                        transitionEnterTimeout = { 500 }
                        transitionLeaveTimeout = { 500 }
                        >
                        {
                            displayedWorks.map(( el, index ) => {
                                if (el.full) {
                                    return <Work
                                            key = { el.id }
                                            full = { el.full }
                                            name = { el.name }
                                            summary = { el.summary }
                                            to = {`/works/${ el.id }`}
                                            img = { el.img }
                                            logo = { el.logo }
                                            ws_show = { homePage && ( index === 6 || index === 7 )}
                                            />
                                } else return <Work
                                    key = { el.id }
                                    full = { el.full }
                                    img = { el.img }
                                    />
                            })
                        }
                        {
                            ( worksPage )
                                ? <Work
                                    closingBlock
                                    to = '/getintouch'
                                    />
                                : null
                        }
                    </CSSTransitionGroup>
                </Grid.Unit>
            </Grid>
        )
    }
}

export default WorksPane
