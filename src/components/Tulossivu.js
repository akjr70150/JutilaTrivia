import React, { Component } from 'react';

class Tulossivu extends Component {
    render() {

        var palaute = () => {
            if(this.props.location.pisteet/this.props.location.kysymystenLkm < 0.5) {
                return "Et tiedä Jutista MITÄÄN!"
            } else if (this.props.location.pisteet/this.props.location.kysymystenLkm > 0.5) {
                return "Taidat olla vähän ihastunut Timoon ;)"
            }
        };
        console.log(this.props.pisteet);
        return (
            <div>
                Sait {this.props.location.pisteet}/{this.props.location.kysymystenLkm} vastausta oikein.
                <br/>
                {palaute()}
            </div>
        );
    }
}

export default Tulossivu;