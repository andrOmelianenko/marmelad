/* Modules */
import   React,
       { Component }    from 'react'
/* Styles */
import { ReviewItem }   from '../../styles/chunks/slider'
import { PlainText,
         CaseText }     from '../../styles/global/GENERAL'

class Review extends Component {
    componentWillReceiveProps() {
        setTimeout(function(){
            let element = document.getElementById("ReviewItem")
            element.style.opacity = "1"
        }, 250)
    }

    render() {
        const { text, img, name, post } = this.props
        return (
            <ReviewItem id = "ReviewItem" >
                <PlainText>
                    { text }
                </PlainText>
                <footer>
                    <img
                        src = { img }
                        alt = 'client'
                        />
                    <cite>
                        <CaseText>
                            { name }
                        </CaseText>
                        <CaseText last >
                            { post }
                        </CaseText>
                    </cite>
                </footer>
            </ReviewItem>
        )
    }
}

export default Review
