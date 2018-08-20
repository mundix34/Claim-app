import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import styled from 'styled-components';
import axios from 'axios';


var { REACT_APP_GOOGLE_KEY } = process.env;

const style = {
    zIndex: 1,
    width: '100%',
    height: '100%'

}

const Outer = styled.div`
display: flex;
height: 100%;
width: 100%;
margin: 0;
padding: 0;
`
const MapDiv = styled.div`
height: 100%;
width: 50%;
`
const NonMap = styled.div`
height: 100%;
width:50%;
background: red;
`

export class Maps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPlace: {},
            showingInfoWindow: false,
            activeMarker: {},
            centerlat: '',
            lat1: '',
            lat2: '',
            lat3: '',
            centerlng: '',
            lng1: '',
            lng2: '',
            lng3: '',
            centername:'',
            agent1:'',
            agent2:'',
            agent3:'',
            userId: this.props.userId


        }
    }

    componentDidMount() {
        axios.get(`/api/coords/${this.props.userId}`).then(res => {
            console.log(res.data);
            // this.setState({
            //     // ref_id: res.data.ref_id,
            // //     centerlat: '',
            // // lat1: '',
            // // lat2: '',
            // // lat3: '',
            // // centerlng: '',
            // // lng1: '',
            // // lng2: '',
            // // lng3: '',
            // // centername:'',
            // // agent1:'',
            // // agent2:'',
            // // agent3:''
            // })
        })
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
    mapClicked(mapProps, map, clickEvent) {
        // console.log('i am a marker');


    }
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: this.state.activeMarker
            })
        }
    };

    render() {
        var points = [
            { lat: 42.05, lng: -77.02 },
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
                        className={'map'}
                        style={style}
                        initialCenter={{
                            lat: 40.227717299999995,
                            lng: -111.6620489
                        }}
                        center={{
                            lat: 40.227717299999995,
                            lng: -111.6620489
                        }}
                        zoom={18}
                        bounds={bounds}
                        onClick={this.onMapClicked}
                    >

                        
                        <InfoWindow
                            onOpen={this.windowHasOpened}
                            onClose={this.windowHasClosed}
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                             <Marker onClick={this.onMarkerClick}
                            title={'Agent 1'}
                            name={'ta da'}
                            position={{ lat: 40.227717299999995, lng:-111.6620489}}
                        />
                        <Marker onClick={this.onMarkerClick}
                            title={'agent 2'}
                            name={'slc'}
                            position={{ lat: 40.227762999999996, lng:-111.66203759999999}}
                             />
                            
                        <Marker onClick={this.onMarkerClick}
                            title={'agent 3'}
                            name={'Home'}
                            position={{ lat: 40.2277414, lng: -111.6620407 }} />
                             

                    

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
