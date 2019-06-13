/* Modules */
import React from 'react'
import Grid from 'styled-components-grid'
/* Components */
import Animated from '../../global/Animated'
import FontsSection from '../global/Fonts'
/* Styles */
import {
    FontFamilyAll,
    FontName,
    FontFamily,
    FontOutline,
    FontSet
} from '../../../styles/cases-styles/fonts-cases';
/* Statics */

const Fonts = () =>

    <FontsSection page='dvaNaDva'>
        <Animated>
            <Grid>
                <Grid.Unit
                    size={{ss: 1}}
                    component={FontFamilyAll}
                    PTSansDemi
                    order1
                >
                    <FontFamily PTSansDemi>
                        Pt Sans Pro
                    </FontFamily>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontName}
                    PTSansDemi
                    marginRight
                    order2
                >
                    <FontOutline
                        PTSansDemi
                    >
                        Demi
                    </FontOutline>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontSet}
                    PTSansDemi
                    marginRight
                    order4
                >
                    <p>
                        Aa&emsp;Bb&emsp;Cc&emsp;Dd&emsp;Ee&emsp;Ff&emsp;Gg&emsp;Hh&emsp;Ii&emsp;Jj&emsp;Kk&emsp;Ll&emsp;
                        Mm&emsp;Nn&emsp;Oo&emsp;Pp&emsp;Qq&emsp;Rr&emsp;Ss&emsp;Tt&emsp;Uu&emsp;Vv&emsp;Ww&emsp;Xx&emsp;
                        Yy&emsp;Zz<br/>
                        <span>1&ensp;2&ensp;3&ensp;4&ensp;5&ensp;6&ensp;7&ensp;8&ensp;9&ensp;0</span>
                    </p>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontName}
                    PTSansRegular
                    order3
                    last
                >
                    <FontOutline
                        PTSansRegular
                    >
                        Regular
                    </FontOutline>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontSet}
                    PTSansRegular
                    order5
                    last
                >
                    <p>
                        Aa&emsp;Bb&emsp;Cc&emsp;Dd&emsp;Ee&emsp;Ff&emsp;Gg&emsp;Hh&emsp;Ii&emsp;Jj&emsp;Kk&emsp;Ll&emsp;
                        Mm&emsp;Nn&emsp;Oo&emsp;Pp&emsp;Qq&emsp;Rr&emsp;Ss&emsp;Tt&emsp;Uu&emsp;Vv&emsp;Ww&emsp;Xx&emsp;
                        Yy&emsp;Zz<br/>
                        <span>1&ensp;2&ensp;3&ensp;4&ensp;5&ensp;6&ensp;7&ensp;8&ensp;9&ensp;0</span>
                    </p>
                </Grid.Unit>
            </Grid>
        </Animated>
    </FontsSection>;

export default Fonts