import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './TitleStatus.css';


const Button = styled.button`
margin: 1rem;
width: 7em;
background: #26436d;
  color: white;
  border: 0;
  text-transform: uppercase;
  height: 2.5em;
  border-radius: 3px;
`

class TitleStatus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            haveTitle: '',
            file: '',
            filetype: '',
            filename: '',
            img: ''

        }
        this.handlePhoto = this.handlePhoto.bind(this);
        this.sendPhoto = this.sendPhoto.bind(this);
    }

    handlePage() {
        this.state.haveTitle === 'yes' ? this.props.history.push("/title") :
            this.state.haveTitle === 'other' ? this.props.history.push("/End") : alert('Please make a selection')

    }
    backPage() {
        this.props.history.push("/title-status")

    }
    handleTitleStatus(val) {
        this.setState({
            haveTitle: val
        })

    }
    handlePhoto(event) {
        const reader = new FileReader();
        const file = event.target.files[0];

        reader.onload = photo => {
            this.setState({
                file: photo.target.result,
                filename: file.name,
                filetype: file.type,
                img: '',
            });
        };
        reader.readAsDataURL(file);
    }

    sendPhoto(event) {
        return axios.post('/api/s3', this.state).then(response => {
            this.setState({ img: response.data.Location });
        });
    }



    render() {
        return (
            <div className="title-status-wrapper">

            <div className="title-status">
                <h4 className="semi-heading">In this section you will identify the status of your title, if you have lost or misplaced your title please select "Other"</h4>
                <label>Do you possess your vehicle's title </label> 
                <select onChange={(e) => this.handleTitleStatus(e.target.value)}>
                    <option className="option-title" type="text" value="select" >select</option>
                    <option className="option-title" type="text" value="yes" >Yes</option>
                    <option className="option-title" type="text" value="other" >Other</option>
                </select> <br />

                <Button onClick={() => this.backPage()}>Back</Button>
                <Button onClick={() => this.handlePage()}>Continue</Button>
            </div>
            <div className="upload">
                <h4>Upload a photo of your title completed correctly to get paid instantly.</h4>
                    <input type="file" id="real" onChange={this.handlePhoto} />
                    <Button onClick={this.sendPhoto}>upload</Button>
                    <div className="img-display">
                        <img src={this.state.img} alt="pic" />
                    </div>
                </div>
            </div>
        );
    }
}
export default TitleStatus;