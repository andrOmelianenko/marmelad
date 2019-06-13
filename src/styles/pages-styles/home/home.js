import styled    from "styled-components"
import { media } from '../../global/media-settings'

export const HeadSection = styled.section`
    ${ media.ss`
        margin-bottom: 48px;
    ` }
    ${ media.ms`
        margin-bottom: 74px;
    ` }
    ${ media.ls`
        margin-bottom: 139px;
    ` }
`

export const WorksSection = styled.section`
    ${ media.ss`
        margin-bottom: 88px;
    ` }
    ${ media.ls`
        position: relative;
        margin-bottom: 144px;
        h2 {
            margin-bottom: 50px;
        }
        & > div {
            padding: 0 1rem;
        }
    ` }
`
