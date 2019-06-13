/* Modules */
import   React, { Component } from 'react'
/* Styles */
import { WorkHeading,
         WorkSummary,
         WorkBlock,
         AnimLayer,
         TempLayer,
         AnimBg,
         AddSpan,
         ClosingLayer,
         SpanButton,
         CaseLink }   from '../../styles/pages-styles/works/work-component'
import { ButtonLink } from '../../styles/global/button'
import { TransferSs,
         TransferMs } from '../../styles/global/GENERAL'


class Work extends Component {
    state = { show: false }

    componentDidMount() { this.setState({ show: true })}

    render() {
        const { closingBlock, img, to, name,
                summary, full, logo, ws_show } = this.props
        const { show } = this.state
        
        return (
            <WorkBlock
                closingBlock = { closingBlock }
                show = { show }
                full = { full }
                ws_show = { ws_show }
                >
                {
                    logo
                        ? <AnimBg
                            bgImg = { img }
                            logo = { logo }
                            />
                        : <AnimBg bgImg = { img } />
                }
                {
                    (closingBlock)
                        ? <ClosingLayer>
                                <AddSpan>
                                    +
                                </AddSpan>
                                <WorkSummary
                                    add
                                    >
                                    Я хочу обсудить <TransferSs /><TransferMs />
                                    с вами свою задачу!
                                    {/* I want you make <TransferSsMs />
                                    project for me! */}
                                </WorkSummary>
                                <ButtonLink
                                    getInTouch
                                    to = { to }
                                    >
                                    Связаться
                                    {/* Get in touch */}
                                </ButtonLink>
                          </ClosingLayer>
                        : full
                        ? <AnimLayer>
                                <WorkHeading>
                                    { name }
                                </WorkHeading>

                                <CaseLink
                                    to = { to }
                                    />

                                <WorkSummary
                                    view
                                    >
                                    { summary }
                                </WorkSummary>
                                <SpanButton
                                    view
                                    >
                                    Посмотреть
                                    {/* View */}
                                </SpanButton>
                          </AnimLayer>
                        : <TempLayer>
                            <div>
                                <p>Скоро</p>
                            </div>
                          </TempLayer>
                }
            </WorkBlock>
        )
    }
}

export default Work
