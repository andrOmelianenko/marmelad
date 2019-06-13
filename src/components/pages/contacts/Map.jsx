/* Modules */
import   React          from 'react'
import   Grid           from 'styled-components-grid'
import { withGoogleMap,
         GoogleMap,
         Marker }       from "react-google-maps"
/* Components */
import   Animated       from '../../global/Animated'
/* Styles */
import { ContainerImg } from '../../../styles/pages-styles/about/image-cases'
import { MapSection }   from '../../../styles/pages-styles/contacts/map-pages'
/* Statics */
import   MapStyles      from "../../../data/MapStyles.json"
import   MapIcon        from "../../../img/map-marker.svg"

const Map = () =>
    <Grid.Unit
        size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
        component={MapSection}
    >
        <Animated>
            <Grid
                halign='center'
                component={ContainerImg}
            >
                <Grid.Unit
                    component={StyledMap}
                />
            </Grid>
        </Animated>
    </Grid.Unit>

const StyledMapExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 49.589298, lng: 34.557927 }}
        defaultOptions={{
            styles: MapStyles,
            scrollwheel: false,
            disableDefaultUI: true,
            zoomControl: true
        }}
    >
        <Marker
            icon={( MapIcon )}
            defaultPosition={{ lat: 49.589298, lng: 34.557927 }}
            defaultOptions={{ styles: {
                height: '10px',
                width: '10px'
            }}}
        />
    </GoogleMap>
))

const StyledMap = () =>
    <StyledMapExampleGoogleMap
        containerElement={
            <div style={{ height: `100%` }} />
        }
        mapElement={
            <div style={{ height: `100%` }} />
        }
    />

export default Map