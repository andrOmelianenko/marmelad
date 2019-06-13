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

    <FontsSection page='u-21'>
        <Animated>
            <Grid>
                <Grid.Unit
                    size={{ss: 1, ms: 48 / 100}}
                    component={FontName}
                    BrandonGrotesqueMedium
                    marginRight
                    order1
                >
                    <FontFamily
                        BrandonGrotesqueMedium
                    >
                        Brandon Grotesque
                    </FontFamily>
                    <FontOutline
                        BrandonGrotesqueMedium
                    >
                        Medium
                    </FontOutline>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1, ms: 48 / 100}}
                    component={FontSet}
                    BrandonGrotesqueMedium
                    marginRight
                    order3
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
                    GothamProMedium
                    order2
                    last
                >
                    <FontFamily
                        GothamProMedium
                    >
                        Gotham pro
                    </FontFamily>
                    <FontOutline
                        GothamProMedium
                    >
                        Medium
                    </FontOutline>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 1, ms: 48 / 100}}
                    component={FontSet}
                    GothamProMedium
                    order4
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