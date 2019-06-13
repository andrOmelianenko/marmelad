/* Modules */
import React                    from 'react'
import Grid                     from 'styled-components-grid'
/* Components */
import Animated                 from '../../global/Animated'
import FontsSection             from '../global/Fonts'
/* Styles */
import { FontName,
         FontFamily,
         FontOutline,
         FontSet }              from '../../../styles/cases-styles/fonts-cases';
/* Statics */

const Fonts = () =>

    <FontsSection page='vinoteria'>
        <Animated>
            <Grid>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontName}
                    PFDinTextUniversalRegular
                    marginRight
                    order1
                >
                    <FontFamily
                        PFDinTextUniversalRegular
                    >
                        PF Din Text Universal
                    </FontFamily>
                    <FontOutline
                        PFDinTextUniversalRegular
                    >
                        Regular
                    </FontOutline>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontSet}
                    PFDinTextUniversalRegular
                    marginRight
                    order3
                    last
                >
                    <p>
                        Aa&ensp;Bb&ensp;Cc&ensp;Dd&ensp;Ee&ensp;Ff&ensp;Gg&ensp;Hh&ensp;Ii&ensp;Jj&ensp;Kk&ensp;Ll&ensp;
                        Mm&ensp;Nn&ensp;Oo&ensp;Pp&ensp;Qq&ensp;Rr&ensp;Ss&ensp;Tt&ensp;Uu&ensp;Vv&ensp;Ww&ensp;Xx&ensp;
                        Yy&ensp;Zz<br/>
                        <span>1&ensp;2&ensp;3&ensp;4&ensp;5&ensp;6&ensp;7&ensp;8&ensp;9&ensp;0</span>
                    </p>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontName}
                    order2
                />
            </Grid>
        </Animated>
    </FontsSection>;

export default Fonts