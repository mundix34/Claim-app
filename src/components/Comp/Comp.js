import React, { Component } from 'react';
import axios from 'axios';
import { getComparables } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
// import styled from 'styled-components';
import { Bar, Pie, Line } from 'react-chartjs-2';
import './Comp.css'

const btnStyle = {
    margin: '5px',
    width: '80px',
    background: '#26436d',
    color: 'white',
    padding: '0 1.5 rem'

}



class Comp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ref_id: '',
            chartData: {},
            year: null,
            make: '',
            model: '',
            zip: null,
            pie: false,
            line: false,
            bar: true
        }
        this.showPie = this.showPie.bind(this);
        this.showLine = this.showLine.bind(this);
    }


    componentDidMount() {
        axios.get(`/api/comparables/${this.props.reference}`).then(res => {
            console.log(res.data[0].acv);
            this.props.getComparables(res.data)
            this.setState({
                ref_id: res.data.ref_id,
                year: res.data[0].vehicle_year,
                make: res.data[0].make,
                model: res.data[0].model,
                zip: res.data[0].zip,
                chartData: {
                    labels: ['Your Value', 'Vehicle 1', 'Vehicle 2', 'Vehicle 3', res.data[0].value_4 ? 'Vehicle 4' : ''],
                    datasets: [
                        {
                            label: 'Actual Cash Value',
                            data: [
                                res.data[0].acv,
                                res.data[0].value_1,
                                res.data[0].value_2,
                                res.data[0].value_3,
                                res.data[0].value_4,
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)'

                            ],
                            borderWidth: 1,
                            hoverBorderWidth: 3,
                            borderColor: 'grey',
                            hoverBorderColor: 'black'
                        }
                    ]
                }
            })
        })
    }

    showPie() {
        this.setState({
            pie: !this.state.pie,
            line: false,
            bar: !this.state.bar
        })
    }
    showLine() {
        this.setState({
            line: !this.state.line,
            pie: false,
            bar: !this.state.bar



        })
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom'
    }


    render() {

        return (
            <div className="chart-wrapper animated fadeInUpBig">
                <div className="chart-content ">
                    {this.state.bar? <Bar
                        data={this.state.chartData}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: `${this.state.year} ${this.state.make} ${this.state.model} Within 500 Miles Radius of Zip Code ${this.state.zip}`,
                                fontSize: 20,
                                fontColor: 'black'
                            },
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition
                            }
                        }}
                    />: null}
                    {this.state.pie ? <Pie
                        data={this.state.chartData}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: `${this.state.year} ${this.state.make} ${this.state.model} Within 500 Miles Radius of Zip Code ${this.state.zip}`,
                                fontSize: 20
                            },
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition
                            }
                        }}
                    /> : null}
                    {this.state.line ? <Line
                        data={this.state.chartData}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: `${this.state.year} ${this.state.make} ${this.state.model} Within 500 Miles Radius of Zip Code ${this.state.zip}`,
                                fontSize: 20
                            },
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition
                            }
                        }}
                    /> : null}
                    <Button style={btnStyle} onClick={() => this.showPie()}> Pie Chart</Button>
                    <Button style={btnStyle} onClick={() => this.showLine()}> Line Chart</Button>
                    <Button className = "close" onClick={() => this.props.hideComp()}><i className="far fa-window-close"></i></Button>

                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        reference: state.user.ref_id,
        comparables: state.comparables
    }
}

export default connect(mapStateToProps, { getComparables })(Comp)