import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import styled from 'styled-components';

var { REACT_APP_GOOGLE_KEY } = process.env;

const style = {
    
}

const Outer = styled.div`
display: flex
`
const MapDiv = styled.div`
height: '100%',
width: '50%'
`
const NonMap = styled.div`
height: '100%',
width:'50%',
background: 'red'
`

export class Maps extends Component {
    constructor() {
        super()
        this.state = {
            maps: [],
            text: ''

        }
    }
    handleText(val) {
        this.setState({
            text: val
        })
    }

    nextPage() {
        this.props.history.push("/end")

    }
    backPage() {
        this.props.history.push("/payment")

    }
    render() {
        var points = [
            { lat: 42.02, lng: -77.01 },
            { lat: 42.03, lng: -77.02 },
            { lat: 41.03, lng: -77.04 },
            { lat: 42.05, lng: -77.02 }
        ]
        var bounds = new this.props.google.maps.LatLngBounds();
        for (var i = 0; i < points.length; i++) {
            bounds.extend(points[i]);
        }
        return (
            <Outer>
                <MapDiv>
            <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                    lat: 40.7608,
                    lng: -111.8910
                }}
                zoom={8}
                bounds={bounds}
                onClick={this.onMapClicked}
            >

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                <Marker
                    name={'Provo'}
                    position={{ lat: 40.2338, lng: -111.6585 }} />
                <Marker
                    name={'Ogden'}
                    position={{ lat: 41.2230, lng: -111.9738 }} />
                <InfoWindow onClose={this.onInfoWindowClose}>
                    
                </InfoWindow>
          
            </Map> 
             </MapDiv>
            <NonMap>

            </NonMap>
            </Outer>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: REACT_APP_GOOGLE_KEY
})(Maps)