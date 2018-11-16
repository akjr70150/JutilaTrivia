import React, { Component } from 'react';
import Kysymys from './Kysymys';
import Vastauslomake from './Vastauslomake';
import { Redirect } from 'react-router-dom';

class Kysymysdata extends Component {

    state = {kysymysid: 0, pisteet: 0, palaute: "", oikeinvaivaarin: ""};

    muunnaIndeksiKirjaimeksi(arvo) {
        if(arvo === "a") {
            console.log("a")
            return 0;
        } else if(arvo === "b") {
            console.log("b")
            return 1;
        } else if(arvo === "c") {
            console.log("c")
            return 2;
        }
    };

    vastaaKysymykseen = (vastaus) => { // vastaus = lomakkeelta lähetetty data

        this.setState({kysymysid: this.state.kysymysid+1});

        // console.log(this.state.kysymysid);
        // console.log("vastauksesi on " + vastaus.vastaus);
        // console.log("oikea vastaus on " + vastaus.oikeaVastaus);

        // Tarkistetaan onko vastaus oikein (joko indeksinä tai kirjaimena annettu)

        // if(vastaus.vastaus == "" && (vastaus.vastaus == vastaus.oikeaVastaus || this.muunnaIndeksiKirjaimeksi(vastaus.vastaus) == vastaus.oikeaVastaus)) {
        if(vastaus.vastaus === vastaus.oikeaVastaus || this.muunnaIndeksiKirjaimeksi(vastaus.vastaus) === vastaus.oikeaVastaus) {
            this.setState({pisteet: this.state.pisteet+1, oikeinvaivaarin: "oikein", palaute: "Vastasit oikein!"});
        } else {
            this.setState({oikeinvaivaarin: "vaarin", palaute: "Vastasit väärin!"});
            console.log(vastaus.vastaus);
            console.log(vastaus.oikeaVastaus)
        }

    }

    render() {

        console.log("this state: " + this.state);
        // Tulostaa kaikki kysymykset:
        // var kysymysoliot = this.props.kysymysJson.map(function(kysymysmappi){
        //     return <Kysymys key={kysymysmappi.id} kysymyspropsi={kysymysmappi.kysymys} vastausvaihtoehdotpropsi={kysymysmappi.vastausvaihtoehdot}/>
        // })

        var aktiivinenKysymys = this.props.kysymysJson[this.state.kysymysid];
        console.log(this.props.kysymysJson[0])

        // Jos kysymyksiä ei ole jäljellä, siirrytään tulossivulle
        if(this.state.kysymysid === this.props.kysymysJson.length) { //this.state.kysymyksiaJaljella === false
            return <Redirect to={{
                pathname: '/tulokset',
                pisteet: this.state.pisteet,
                kysymystenLkm: this.state.kysymysid
            }}
            />
        }

        return (
            <div>

                {/* Kysymys ja vastausvaihtoehdot: */}
                <Kysymys aktiivinenKysymys={aktiivinenKysymys}/>

                <Vastauslomake lahetaVastausKysymysdatalle={this.vastaaKysymykseen} oikeaVastaus={aktiivinenKysymys.oikeaVastausIndeksi}/>

                <span className={this.state.oikeinvaivaarin}>{this.state.palaute}</span><br/>
                Pisteet: {this.state.pisteet}/{this.state.kysymysid}

            </div>
        );
    }
}

export default Kysymysdata;