import React, { Component } from 'react';
import { haeKaikkiRestFetch } from "../serviceclient";
import Kysymysdata from './Kysymysdata';


class Kysymyssivu extends Component {

    constructor(props) {
        super(props);
        this.state = {kysymysdata: []};
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
            console.log(this.state.kysymysdata);
        }
    }

    render() {
        return (
            <div>
                Tähän tulee dataa joskus
                <Kysymysdata kysymysJson = {this.state.kysymysdata}/>
            </div>
        );
    }
}

export default Kysymyssivu;