import React, { Component } from 'react';
import { haeKaikkiRestFetch } from "../serviceclient";
import Kysymysdata from './Kysymysdata';


class Kysymyssivu extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount () {
        this.haekaikki();
    }
    haekaikki() {
        haeKaikkiRestFetch(this.kaikkihaettu);
    }
    kaikkihaettu = (haettudata, virhe) => {
        if(virhe) {
            // virhekäsittely
            alert("virhe");
        } else {
            this.setState({kysymysdata: haettudata});
            // console.log(this.state.kysymysdata);
        }
    }

    render() {
        return (
            <div>{ this.state.kysymysdata &&
            <Kysymysdata kysymysJson = {this.state.kysymysdata}/>
            }
            </div>
        );
    }
}

export default Kysymyssivu;