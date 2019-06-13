/* Modules */
import React, { Component }            from 'react'
import ReactDOM              from "react-dom"
import Grid             from 'styled-components-grid'
/* Components */
import Animated         from '../../global/Animated'
/* Styles */
import { Container }       from '../../../styles/global/GENERAL';

import { VideoSection,
         VideoCell,
         VideoImg }      from '../../../styles/cases-styles/video-cases'

import BGVideo          from '../../../img/cases/whirl/video/bg_video.mp4'
import BGVideoImg          from '../../../img/cases/whirl/video/bg_video.png'
import FirstBg          from '../../../img/cases/whirl/home_first_bg_ss_ms.jpg'

class Video extends Component {
    componentDidMount() {
        ReactDOM.findDOMNode(this.container).play()
    }

    render() {
        return (
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
                component={VideoSection}
                vinoteria
            >
                <Grid
                    component={Container}
                    halign='center'
                >
                    <Grid.Unit
                        size={{ss: 4 / 4, ms: 91 / 100, ls: 18 / 20}}
                        component={VideoCell}
                        className='VideoCell'
                        paddingSsMs
                        paddingLs
                        whirl
                        last
                    >
                        <Animated>
                            <video muted loop poster={FirstBg} ref={this.setContainerRef}>
                                <source
                                    src={BGVideo}
                                    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                                />
                            </video>
                            <VideoImg>
                                <img src={BGVideoImg} alt=""/>
                            </VideoImg>
                        </Animated>
                    </Grid.Unit>
                </Grid>
            </Grid.Unit>
        )
    }

    setContainerRef = ref => {
        this.container = ref
    }
}
export default Video