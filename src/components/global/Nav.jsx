/* Modules */
import   React,
       { Component }    from 'react'
import   Grid           from 'styled-components-grid'
/* Styles */
import { Header,
         StNavLink,
         NavList,
         NavItem,
         InnerNavList,
         LabelCross,
         ActiveSS,
         ActiveLS }     from '../../styles/navigation/nav-styles'
/* Statics */
import   logo           from '../../img/marmelad-logo.svg'

class Nav extends Component {
    state = {
        inHome:         true,
        inWorks:        false,
        inAbout:        false,
        inContacts:     false,
        inCase:         false,
        blackBg:        false,
        hide:           false,
        mobile:         false,
        checked:        false,
        lastScrollTop:  0,
        contrScrollVal: 20
    }

    componentWillMount() {
        this.checkLocation(window.location.hash)
        this.checkScreen()
        window.addEventListener("hashchange", e =>
            this.checkLocation(window.location.hash)
        )
        window.addEventListener("resize", e =>
            this.checkScreen()
        )
        window.addEventListener("scroll", this.handleScroll)
    }

    checkScreen = () => {
        if (document.documentElement.clientWidth < 1024) {
            this.setState({
                mobile: true
            })
        } else if (document.documentElement.clientWidth >= 1024) {
            this.setState({
                mobile: false
            })
        }
    }

    handleScroll = () => {
        let scrolled     = window.pageYOffset
        let contrVal     = this.state.contrScrollVal
        let prevScrolled = this.state.lastScrollTop

        if ( Math.abs(prevScrolled - scrolled) <= contrVal ) {
            return
        }

        if ( scrolled > prevScrolled ) {
            this.setState({ checked: false })
            this.setState({ hide: true })
        } else if ( scrolled < prevScrolled ) {
            this.setState({ hide: false })
        }

        if ( (scrolled + 30) < prevScrolled ) this.setState({ checked: false })

        this.setState({
            lastScrollTop: scrolled
        })

        // TODO -----------------------------
        if (scrolled >= document.documentElement.clientHeight) {
            this.setState({
                blackBg: true
            })
        } else {
            this.setState({
                blackBg: false
            })
        }
    }

    checkLocation = path => {
        window.scrollTo(0,0)
        this.setState({
            checked:    false,
            inWorks:    false,
            inAbout:    false,
            inCase:     false,
            inContacts: false
        })
        if (path === '#/') {
            this.setState({
                inHome: true
            })
        } else if (path !== '#/') {
            this.setState({
                inHome: false
            })
            switch (path) {
                case '#/about':
                    this.setState({
                        inAbout: true
                    })
                    break
                case '#/works':
                    this.setState({
                        inWorks: true
                    })
                    break
                case '#/contacts':
                    this.setState({
                        inContacts: true
                    })
                    break
                default:
                    break
            }
        }
        if (path.includes('#/works/')) {
            this.setState({
                inCase: true
            })
        }
    }

    toggleCheckbox = event => {
        const target = event.target
        const checkVal = target.checked
        this.setState({
            checked: checkVal
        })
    }

    render() {
        const { inHome, inCase, blackBg, checked, mobile, hide } = this.state
        
        return (
            <Grid
                transp_main = { inHome || inCase }
                blackBg = { blackBg }
                hide = { hide }
                checked = { checked }
                component={ Header }
                halign = 'center'
                >
                <Grid.Unit
                    size={{ ss: 4/4, ms: 8/8, ls: 20/22 }}
                    component = 'nav'
                    >
                    <Grid
                        component={NavList }
                        halign = 'justify'
                        >
                        <Grid.Unit
                            size={{ss: 3/4, ls: 4/20 }}
                            component={ NavItem }
                            >
                            <StNavLink
                                exact
                                to = '/'
                                >
                                <img src = { logo } alt = 'logo'/>
                            </StNavLink>
                        </Grid.Unit>
                        <input
                            type = 'checkbox'
                            id = 'toggleNav'
                            checked = { checked }
                            onChange = { this.toggleCheckbox }
                            hidden
                            />
                        <LabelCross
                            htmlFor = 'toggleNav'
                            home = { inHome }
                            blackBg = { blackBg }
                            checked = { checked }
                            >
                            <span />
                        </LabelCross>
                        <InnerNavList
                            home = { inHome }
                            blackBg = { blackBg }
                            checked = { checked }
                            mobile = { mobile }
                            >
                            <Grid
                                component={NavList }
                                halign = {
                                    (mobile)
                                        ? 'left'
                                        : 'right'
                                }
                                >
                                <NavItem>
                                    <StNavLink
                                        home = { inHome }
                                        blackBg = { blackBg }
                                        checked = { checked }
                                        active = { this.state.inWorks }
                                        activeStyle = {
                                             (mobile)
                                                ? ActiveSS
                                                : ActiveLS
                                        }
                                        to = '/works'
                                        exact
                                        >
                                        Проекты
                                        {/* Works */}
                                    </StNavLink>
                                </NavItem>

                                <NavItem>
                                    <StNavLink
                                        home = { inHome }
                                        blackBg = { blackBg }
                                        checked = { checked }
                                        active = { this.state.inAbout }
                                        activeStyle = {
                                             (mobile)
                                                ? ActiveSS
                                                : ActiveLS
                                        }
                                        to = '/about'
                                        >
                                        О нас + Направления
                                        {/* About + Activities */}
                                    </StNavLink>
                                </NavItem>

                                <NavItem>
                                    <StNavLink
                                        home = { inHome }
                                        blackBg = { blackBg }
                                        checked = { checked }
                                        active = { this.state.inContacts }
                                        activeStyle = {
                                             (mobile)
                                                ? ActiveSS
                                                : ActiveLS
                                        }
                                        to = '/contacts'
                                        >
                                        Контакты
                                        {/* Contacts */}
                                    </StNavLink>
                                </NavItem>

                                {/* <NavItem>
                                    {
                                        (mobile)
                                            ? 'Russian'
                                            : 'RU'
                                    }
                                </NavItem>

                                <NavItem>
                                    {
                                        (mobile)
                                            ? 'English'
                                            : 'EN'
                                    }
                                </NavItem> */}
                            </Grid>
                        </InnerNavList>
                    </Grid>
                </Grid.Unit>
            </Grid>
        )
    }
}

export default Nav
