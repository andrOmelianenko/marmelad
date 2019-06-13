/* Modules */
import React                  from 'react'
import Helmet                 from 'react-helmet'
import { HashRouter as Router,
         Route,
         Switch }             from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import { ThemeProvider }      from 'styled-components'
/* Components */
import Nav                    from './components/global/Nav'
import Footer                 from './components/global/Footer'
/* Styles */
import { theme }              from './styles/global/theme'
/* Code Split */
import asyncComponent         from './async_component'
const AsyncHome       = asyncComponent(() => import('./components/pages/Home'))
const AsyncAbout      = asyncComponent(() => import('./components/pages/About'))
const AsyncWorks      = asyncComponent(() => import('./components/pages/Works'))
const AsyncContacts   = asyncComponent(() => import('./components/pages/Contacts'))
const AsyncGetInTouch = asyncComponent(() => import('./components/pages/GetInTouch'))

const App = () =>
    <ThemeProvider
        theme = { theme }
        >
        <Router>
            <div>
                <Helmet titleTemplate="%s | Marmelad design studio"/>
                <Nav />
                <CSSTransitionGroup
                    transitionName = 'example'
                    transitionEnterTimeout = { 1000 }
                    transitionLeaveTimeout = { 1000 }
                    >
                    <Switch>
                        <Route exact path = '/'     component = { AsyncHome } />
                        <Route path = '/about'      component = { AsyncAbout } />
                        <Route path = '/works'      component = { AsyncWorks } />
                        <Route path = '/contacts'   component = { AsyncContacts } />
                        <Route path = '/getintouch' component = { AsyncGetInTouch } />
                        <Route render = { () => <main><p>Not Found</p></main> }/>
                    </Switch>
                </CSSTransitionGroup>
                <Footer />
            </div>
        </Router>
    </ThemeProvider>

export default App
