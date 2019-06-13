/* Modules */
import   React              from 'react'
/* Styles */
import { ScrollDownBlock }  from '../../styles/chunks/scrollDown'
import   ArrowDown          from '../SVG/ArrowDown'

const ScrollDown = ({ ...props }) =>

    <ScrollDownBlock
        white = { props.white }
        home = { props.home }
        >
        <ArrowDown />
        <p>
            Scroll down
        </p>
    </ScrollDownBlock>

export default ScrollDown
