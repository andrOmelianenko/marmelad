/* Modules */
import React                    from 'react'
import Grid                     from 'styled-components-grid'
/* Components */
import Animated                 from '../../global/Animated'
import FontsSection             from '../global/Fonts'
/* Styles */
import { FontFamilyAll,
    FontName,
    FontFamily,
    FontOutline,
    FontSet }              from '../../../styles/cases-styles/fonts-cases';
/* Statics */

const Fonts = () =>

    <FontsSection page='navicomEnergy'>
        <Animated>
            <Grid>
                <Grid.Unit
                    size={{ss: 1}}
                    component={FontFamilyAll}
                    HelveticaNeueBold
                    order1
                >
                    <FontFamily HelveticaNeueBold>
                        Helvetica Neue
                    </FontFamily>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1, ms: 48 / 100}}
                    component={FontName}
                    HelveticaNeueBold
                    marginRight
                    order2
                >
                    <FontOutline
                        HelveticaNeueBold
                    >
                        Bold
                    </FontOutline>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1, ms: 48 / 100}}
                    component={FontSet}
                    HelveticaNeueBold
                    marginRight
                    order4
                >
                    <p>
                        Aa&ensp;Bb&ensp;Cc&ensp;Dd&ensp;Ee&ensp;Ff&ensp;Gg&ensp;Hh&ensp;Ii&ensp;Jj&ensp;Kk&ensp;Ll&ensp;
                        Mm&ensp;Nn&ensp;Oo&ensp;Pp&ensp;Qq&ensp;Rr&ensp;Ss&ensp;Tt&ensp;Uu&ensp;Vv&ensp;Ww&ensp;Xx&ensp;
                        Yy&ensp;Zz<br/>
                        <span>1&ensp;2&ensp;3&ensp;4&ensp;5&ensp;6&ensp;7&ensp;8&ensp;9&ensp;0</span>
                    </p>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1, ms: 48 / 100}}
                    component={FontName}
                    HelveticaNeueRegular
                    order3
                    last
                >
                    <FontOutline
                        HelveticaNeueRegular
                    >
                        Regular
                    </FontOutline>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1, ms: 48 / 100}}
                    component={FontSet}
                    HelveticaNeueRegular
                    order5
                    last
                >
                    <p>
                        Aa&ensp;Bb&ensp;Cc&ensp;Dd&ensp;Ee&ensp;Ff&ensp;Gg&ensp;Hh&ensp;Ii&ensp;Jj&ensp;Kk&ensp;Ll&ensp;
                        Mm&ensp;Nn&ensp;Oo&ensp;Pp&ensp;Qq&ensp;Rr&ensp;Ss&ensp;Tt&ensp;Uu&ensp;Vv&ensp;Ww&ensp;Xx&ensp;
                        Yy&ensp;Zz<br/>
                        <span>1&ensp;2&ensp;3&ensp;4&ensp;5&ensp;6&ensp;7&ensp;8&ensp;9&ensp;0</span>
                    </p>
                </Grid.Unit>
            </Grid>
        </Animated>
    </FontsSection>;

export default Fonts