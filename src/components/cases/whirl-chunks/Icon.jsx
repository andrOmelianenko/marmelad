/* Modules */
import React                    from 'react'
import Grid                     from 'styled-components-grid'
/* Components */
import Animated                 from '../../global/Animated'
/* Styles */
import { SectionContentBlock }       from '../../../styles/global/GENERAL';
import { ContainerImg,
         ImgCell }      from '../../../styles/cases-styles/image-cases'
import { IconSection,
         IconRow,
         IconItem }        from '../../../styles/cases-styles/icon-cases'
/* Statics */
import Whirl           from '../../../img/cases/whirl/whirl_icons.jpg'

// import   whirl_icon01              from '../../../img/cases/whirl/svg/whirl_icon01.svg'
// import   whirl_icon02              from '../../../img/cases/whirl/svg/whirl_icon02.svg'
// import   whirl_icon03              from '../../../img/cases/whirl/svg/whirl_icon03.svg'
// import   whirl_icon04              from '../../../img/cases/whirl/svg/whirl_icon04.svg'
// import   whirl_icon05              from '../../../img/cases/whirl/svg/whirl_icon05.svg'
// import   whirl_icon06              from '../../../img/cases/whirl/svg/whirl_icon06.svg'
// import   whirl_icon07              from '../../../img/cases/whirl/svg/whirl_icon07.svg'
// import   whirl_icon08              from '../../../img/cases/whirl/svg/whirl_icon08.svg'
// import   whirl_icon09              from '../../../img/cases/whirl/svg/whirl_icon09.svg'
// import   whirl_icon10              from '../../../img/cases/whirl/svg/whirl_icon10.svg'
// import   whirl_icon11              from '../../../img/cases/whirl/svg/whirl_icon11.svg'
// import   whirl_icon12              from '../../../img/cases/whirl/svg/whirl_icon12.svg'
// import   whirl_icon13              from '../../../img/cases/whirl/svg/whirl_icon13.svg'
// import   whirl_icon14              from '../../../img/cases/whirl/svg/whirl_icon14.svg'
// import   whirl_icon15              from '../../../img/cases/whirl/svg/whirl_icon15.svg'
// import   whirl_icon16              from '../../../img/cases/whirl/svg/whirl_icon16.svg'
// import   whirl_icon17              from '../../../img/cases/whirl/svg/whirl_icon17.svg'
// import   whirl_icon18              from '../../../img/cases/whirl/svg/whirl_icon18.svg'
// import   whirl_icon19              from '../../../img/cases/whirl/svg/whirl_icon19.svg'
// import   whirl_icon20              from '../../../img/cases/whirl/svg/whirl_icon20.svg'
// import   whirl_icon21              from '../../../img/cases/whirl/svg/whirl_icon21.svg'
// import   whirl_icon22              from '../../../img/cases/whirl/svg/whirl_icon22.svg'
// import   whirl_icon23              from '../../../img/cases/whirl/svg/whirl_icon23.svg'
// import   whirl_icon24              from '../../../img/cases/whirl/svg/whirl_icon24.svg'
// import   whirl_icon25              from '../../../img/cases/whirl/svg/whirl_icon25.svg'
// import   whirl_icon26              from '../../../img/cases/whirl/svg/whirl_icon26.svg'
// import   whirl_icon27              from '../../../img/cases/whirl/svg/whirl_icon27.svg'
// import   whirl_icon28              from '../../../img/cases/whirl/svg/whirl_icon28.svg'
// import   whirl_icon29              from '../../../img/cases/whirl/svg/whirl_icon29.svg'
// import   whirl_icon30              from '../../../img/cases/whirl/svg/whirl_icon30.svg'
// import   whirl_icon31              from '../../../img/cases/whirl/svg/whirl_icon31.svg'
// import   whirl_icon32              from '../../../img/cases/whirl/svg/whirl_icon32.svg'
// import   whirl_icon33              from '../../../img/cases/whirl/svg/whirl_icon33.svg'
// import   whirl_icon34              from '../../../img/cases/whirl/svg/whirl_icon34.svg'
// import   whirl_icon35              from '../../../img/cases/whirl/svg/whirl_icon35.svg'

const Icon = () =>

    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={IconSection}
        whirl
    >
        <Grid
            component={ContainerImg}
            halign='center'
            paddingSide_ls
        >

            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 20}}
                component={ImgCell}
                last
            >
                <Animated>
                    <img src={Whirl} alt='' />
                </Animated>
            </Grid.Unit>

            {/*<Grid.Unit*/}
                {/*size={{ss: 4 / 4}}*/}
                {/*component={SectionContentBlock}*/}
                {/*paddingNoneMs*/}
                {/*whirl*/}
            {/*>*/}
                {/*<Animated>*/}
                    {/*<Grid*/}
                        {/*component={IconRow}*/}
                        {/*halign='center'*/}
                        {/*whirl*/}
                    {/*>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl01><img src={whirl_icon01} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl02><img src={whirl_icon02} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl03><img src={whirl_icon03} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl04><img src={whirl_icon04} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl05><img src={whirl_icon05} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl06><img src={whirl_icon06} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl11><img src={whirl_icon11} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl20><img src={whirl_icon20} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl08><img src={whirl_icon08} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl09><img src={whirl_icon09} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl18><img src={whirl_icon18} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl19><img src={whirl_icon19} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl10><img src={whirl_icon10} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl12><img src={whirl_icon12} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl25><img src={whirl_icon25} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl07><img src={whirl_icon07} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl15><img src={whirl_icon15} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl16><img src={whirl_icon16} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl17><img src={whirl_icon17} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl14><img src={whirl_icon14} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl21><img src={whirl_icon21} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl23><img src={whirl_icon23} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl24><img src={whirl_icon24} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl13><img src={whirl_icon13} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl29><img src={whirl_icon29} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl26><img src={whirl_icon26} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl22><img src={whirl_icon22} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl32><img src={whirl_icon32} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl28><img src={whirl_icon28} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl34><img src={whirl_icon34} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl33><img src={whirl_icon33} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl27><img src={whirl_icon27} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl30><img src={whirl_icon30} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl31><img src={whirl_icon31} alt=""/></Grid.Unit>*/}
                        {/*<Grid.Unit size={{ss: 1 / 4, ls: 1 / 7}} component={IconItem} center whirl whirl35><img src={whirl_icon35} alt=""/></Grid.Unit>*/}
                    {/*</Grid>*/}
                {/*</Animated>*/}
            {/*</Grid.Unit>*/}
        </Grid>
    </Grid.Unit>

export default Icon
