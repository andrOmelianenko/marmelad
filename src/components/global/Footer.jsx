/* Modules */
import   React          from 'react'
import   Grid           from 'styled-components-grid'
/* Styles */
import { Footer,
         FooContainer,
         FooterText }   from '../../styles/navigation/footer-styles'

const Foo = () =>

    <Grid
        component={Footer }
        halign = 'center'
        >
        <Grid.Unit
            size={{ ss: 4/4, ms: 8/8, ls: 20/22 }}
            component={FooContainer }
            >
            <Grid>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 4 / 8, ls: 6 / 20}}
                    component={FooterText }
                    >
                    Marmelad Design Studio, 2018
                </Grid.Unit>
                <Grid.Unit
                    size={{ss: 4 / 4, ms: 4 / 8, ls: 14 / 20}}
                    component={FooterText }
                    >
                    From Ukraine with love!
                </Grid.Unit>
            </Grid>
        </Grid.Unit>
    </Grid>

export default Foo
