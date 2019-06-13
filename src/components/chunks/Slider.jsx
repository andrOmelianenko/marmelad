/* Modules */
import   React,
       { Component }            from 'react'
import   Grid                   from 'styled-components-grid'
/* Components */
import   Animated               from '../global/Animated'
import   Review                 from './Review'
/* Styles */
import { Container,
         SectionHeadingBlock,
         SectionHeading }       from '../../styles/global/GENERAL'
import { SliderSection,
         ToggleWrap,
         ToggleItem,
         ToggleLabel,
         ReviewWrap }           from '../../styles/chunks/slider'
import { REVIEW }               from '../../data/review-data'

class Slider extends Component {
    state = {
        displayedReview: REVIEW,
        show1: false,
        show2: false,
        show3: false,
        show4: true,
        show5: false,
        show6: false,
        show7: false,
        currentPostId: 4
    }

    handleChange = event => {
        this.setState({
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false,
            show7: false
        })

        this.setState({
            [event.target.id]: event.target.checked
        })

        const displayedReview = REVIEW.filter(el =>
            !el.type.indexOf(event.target.value)
        )

        this.setState({
            displayedReview: displayedReview
        })
    }

    currentPost = el => {
        let getNext = el.target.getAttribute('data-post')
        let element = document.getElementById("ReviewItem")
        setTimeout(() => {
            this.setState({ currentPostId: getNext })
        }, 250)
        element.style.opacity = "0"
    }

    render() {
        let current = Number( this.state.currentPostId )
        // eslint-disable-next-line
        this.props.case
            ? current = Number(this.props.case)
            : current
        let items = REVIEW.filter(el => {
            return el.id === current
        })

        return (
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
                component={SliderSection}
                >
                <Grid
                    component={Container}
                    halign='center'
                    >
                    {
                        ( this.props.home )
                            ? <Grid.Unit
                                size={{ss: 4 / 4, ms: 8 / 8, ls: 6 / 20, ws: 6 / 20}}
                                component={SectionHeadingBlock}
                                hight
                                >
                                <Animated>
                                    <SectionHeading>
                                        Наши клиенты о нас
                                        {/* Our clients about us */}
                                    </SectionHeading>
                                </Animated>
                            </Grid.Unit>
                            : <Grid.Unit
                                size={{ss: 4 / 4, ms: 8 / 8, ls: 6 / 20, ws: 6 / 20}}
                                component={SectionHeadingBlock}
                                >
                                <Animated>
                                    <SectionHeading>
                                        Слово клиента
                                    </SectionHeading>
                                </Animated>
                            </Grid.Unit>
                    }
                    <Grid.Unit
                        size={{ss: 4 / 4, ms: 8 / 8, ls: 12 / 20, ws: 10 / 20}}
                        component={ReviewWrap}
                        >
                        <Animated>
                            <blockquote>
                                <Review
                                    {...items[0]}
                                />
                                {
                                    ( this.props.home )
                                        ? <ToggleWrap>
                                            <ToggleItem>
                                                <input
                                                    id='show4'
                                                    type='radio'
                                                    value='show4'
                                                    onChange={this.handleChange}
                                                    checked={this.state.show4}
                                                    hidden
                                                    />
                                                <ToggleLabel
                                                    htmlFor='show4'
                                                    checked={this.state.show4}
                                                    onClick={this.currentPost}
                                                    data-post="4"
                                                    >
                                                    1
                                                </ToggleLabel>
                                            </ToggleItem>
                                            <ToggleItem>
                                                <input
                                                    id='show6'
                                                    type='radio'
                                                    value='show6'
                                                    onChange={this.handleChange}
                                                    checked={this.state.show6}
                                                    hidden
                                                    />
                                                <ToggleLabel
                                                    htmlFor='show6'
                                                    checked={this.state.show6}
                                                    onClick={this.currentPost}
                                                    data-post="6"
                                                    >
                                                    2
                                                </ToggleLabel>
                                            </ToggleItem>
                                            <ToggleItem>
                                                <input
                                                    id='show7'
                                                    type='radio'
                                                    value='show7'
                                                    onChange={this.handleChange}
                                                    checked={this.state.show7}
                                                    hidden
                                                    />
                                                <ToggleLabel
                                                    htmlFor='show7'
                                                    checked={this.state.show7}
                                                    onClick={this.currentPost}
                                                    data-post="7"
                                                    >
                                                    3
                                                </ToggleLabel>
                                            </ToggleItem>
                                        </ToggleWrap>
                                        : null
                                }
                            </blockquote>
                        </Animated>
                    </Grid.Unit>
                    <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}} />
                </Grid>
            </Grid.Unit>
        )
    }
}

export default Slider
