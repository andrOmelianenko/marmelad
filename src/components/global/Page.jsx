/* Modules */
import   React,
       { Component }    from 'react'
/* Styles */
import { AnimPage }     from '../../styles/navigation/pages-transition'

class Page extends Component {
    state = {
        mount: false
    }

    componentDidMount() {
        setTimeout(function() {
            this.setState({
                mount: true
            })
        }.bind(this), 200)
    }

    render () {
        const { mount } = this.state
        return (
            <AnimPage
                mount = { mount }
                >
                { this.props.children }
            </AnimPage>
        )
    }
}

export default Page
