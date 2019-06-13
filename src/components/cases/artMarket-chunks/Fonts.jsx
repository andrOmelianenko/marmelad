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

    <FontsSection page='artMarket'>
        <Animated>
            <Grid>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontName}
                    PixelCyrRegular
                    marginRight
                    order1
                >
                    <FontFamily
                        PixelCyrRegular
                    >
                        Pixel Cyr
                    </FontFamily>
                    <FontOutline
                        PixelCyrRegular
                    >
                        Regular
                    </FontOutline>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontSet}
                    PixelCyrRegular
                    marginRight
                    order3
                >
                    <p>
                        Aa&emsp;Bb&emsp;Cc&emsp;Dd&emsp;Ee&emsp;Ff&emsp;Gg&emsp;Hh&emsp;Ii&emsp;Jj&emsp;Kk&emsp;Ll&emsp;
                        Mm&emsp;Nn&emsp;Oo&emsp;Pp&emsp;Qq&emsp;Rr&emsp;Ss&emsp;Tt&emsp;Uu&emsp;Vv&emsp;Ww&emsp;Xx&emsp;
                        Yy&emsp;Zz<br/>
                        <span>1&emsp;2&emsp;3&emsp;4&emsp;5&emsp;6&emsp;7&emsp;8&emsp;9&emsp;0</span>
                    </p>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontName}
                    PTSansBold
                    order2
                    last
                >
                    <FontFamily
                        PTSansBold
                    >
                        PT Sans
                    </FontFamily>
                    <FontOutline
                        PTSansBold
                    >
                        Bold
                    </FontOutline>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontSet}
                    PTSansBold
                    order4
                    last
                >
                    <p>
                        Aa&emsp;Bb&emsp;Cc&emsp;Dd&emsp;Ee&emsp;Ff&emsp;Gg&emsp;Hh&emsp;Ii&emsp;Jj&emsp;Kk&emsp;Ll&emsp;
                        Mm&emsp;Nn&emsp;Oo&emsp;Pp&emsp;Qq&emsp;Rr&emsp;Ss&emsp;Tt&emsp;Uu&emsp;Vv&emsp;Ww&emsp;Xx&emsp;
                        Yy&emsp;Zz<br/>
                        <span>1&emsp;2&emsp;3&emsp;4&emsp;5&emsp;6&emsp;7&emsp;8&emsp;9&emsp;0</span>
                    </p>
                </Grid.Unit>
            </Grid>
        </Animated>
    </FontsSection>;

export default Fonts