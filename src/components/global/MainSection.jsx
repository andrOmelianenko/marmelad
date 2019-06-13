/* Modules */
import   React,
       { Component }        from 'react'
import   ReactDOM           from 'react-dom'
import   Grid               from 'styled-components-grid'
/* Styles */
import { MainSectionBody }  from '../../styles/global/main-section'

class MainSection extends Component {
    componentDidMount() {
        const container = ReactDOM.findDOMNode(this.container)
        const height = document.documentElement.clientHeight
        
        if (window.screen.availWidth >= 1024) {
            container.style.height = '100vh'
        } else container.style.height = `${ height }px`
    }

    render() {
        return (
            <Grid.Unit
                size      = { {ss: 4 / 4, ms: 8 / 8, ls: 22 / 22} }
                component = { MainSectionBody }
                ref       = { this.setContainerRef }
                page      = { this.props.page }
                >
                { this.props.children }
            </Grid.Unit>
        )
    }

    setContainerRef = ref => {
        this.container = ref
    }
}

export default MainSection
