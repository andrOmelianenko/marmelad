/* Modules */
import React, { Component } from 'react'
/* Components */
import Animated       from '../../global/Animated'
import MainSection    from '../../global/MainSection'
/* Styles */
import { MainCenter,
         MainHeading,
         MainArrow } from '../../../styles/global/GENERAL'
/* Statics */
import arrowdown      from '../../../img/marmelad_arrowdown.svg'

class Main extends Component {
    state = {
        intervalID: 0
    }

    scrollStep = () => {
        if ( window.pageYOffset >= window.innerHeight ) {
            clearInterval( this.state.intervalID )
        }
        window.scroll( 0, window.pageYOffset + 15 )
    }

    doScroll() {
        let intervalID = setInterval( this.scrollStep, 10 )
        this.setState({ intervalID })
    }
    
    render () {
        return (
            <MainSection page = 'home' >
                <MainCenter home >
                    <Animated>
                        <MainHeading home >
                            Мы создаем веб-сайты и айдентику, которые выводят компании на&nbsp;новый уровень
                            {/* We create web-sites&nbsp;<TransferSsMs/>and identity,&nbsp;<TransferLs/>
                            which lead&nbsp;<TransferSsMs/>brands on a new level */}
                        </MainHeading>
                    </Animated>
                </MainCenter>
                <MainArrow
                    onClick = { () => this.doScroll() }
                    >
                    <img src={arrowdown} alt=""/>
                </MainArrow>
            </MainSection>
        )
    }
}

export default Main