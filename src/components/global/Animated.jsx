/* Modules */
import   React,
       { Component }    from 'react'
import   ReactDOM       from 'react-dom'
/* Styles */
import { AnimElement }  from '../../styles/global/animated'

class Animated extends Component {
    state = {
        visible: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        this.handleScroll()
    }

    handleScroll = () => {
        const animObject = ReactDOM.findDOMNode(this.target)
        this.setState({
            visible: this.inViewportCheck(animObject)
        })
    }

    inViewportCheck = el => {
        let rect         = el.getBoundingClientRect()
        let elHeight     = rect.bottom - rect.top
        let keyValue     = elHeight * 0.75
        return (
            rect.bottom <= (document.documentElement.clientHeight + keyValue)
        )
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render () {
        const { slideUp } = this.props
        const { visible } = this.state
        return (
            <AnimElement
                ref = { (node) => {
                    if (node !== null) {
                        this.target = node;
                    }
                }}
                visible = { visible }
                slideUp = { slideUp }
                >
                { this.props.children }
            </AnimElement>
        )
    }
}

export default Animated
