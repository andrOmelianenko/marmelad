/* Modules */
import React                    from 'react'
import Grid                     from 'styled-components-grid'
/* Components */
import Animated                 from '../../global/Animated'
import FontsSection             from '../global/Fonts'
/* Styles */
import { TransferSs }              from '../../../styles/global/GENERAL';
import { FontFamilyAll,
         FontName,
         FontFamily,
         FontOutline,
         FontSet }              from '../../../styles/cases-styles/fonts-cases';
/* Statics */

const Fonts = () =>

    <FontsSection page='yoOy'>
        <Animated>
            <Grid>
                <Grid.Unit
                    size={{ss: 1}}
                    component={FontFamilyAll}
                    AkzidenzGroteskProRegular
                    order1
                >
                    <FontFamily AkzidenzGroteskProRegular>
                        Akzidenz-<TransferSs/>Grotesk Pro
                    </FontFamily>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontName}
                    AkzidenzGroteskProRegular
                    marginRight
                    order2
                >
                    <FontOutline
                        AkzidenzGroteskProRegular
                    >
                        Regular
                    </FontOutline>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontSet}
                    AkzidenzGroteskProRegular
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
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontName}
                    AkzidenzGroteskProBold
                    order3
                >
                    <FontOutline
                        AkzidenzGroteskProBold
                    >
                        Bold
                    </FontOutline>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontSet}
                    AkzidenzGroteskProBold
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
                    size={{ss: 1}}
                    component={FontFamilyAll}
                    SuperclarendonBold
                    order6
                >
                    <FontFamily SuperclarendonBold>
                        Super<span>-</span><TransferSs/>clarendon
                    </FontFamily>
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontName}
                    SuperclarendonBold
                    marginRight
                    order7
                >
                    <FontOutline
                        SuperclarendonBold
                        marginRight
                    >
                        Bold
                    </FontOutline>
                </Grid.Unit>
                <Grid.Unit
                    size={{ms: 48 / 100}}
                    visible={{ss: false, ms: true}}
                    component={FontName}
                    order8
                />

                <Grid.Unit
                    size={{ss: 4 / 4, ms: 48 / 100}}
                    component={FontSet}
                    SuperclarendonBold
                    last
                    order9
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