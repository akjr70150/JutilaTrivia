import React, { Component } from 'react';

class Kysymys extends Component {
    render() {
        return (

            <ul>

                <br/>

                <li>{this.props.aktiivinenKysymys.kysymys}</li>
                <li>a) {this.props.aktiivinenKysymys.vastausvaihtoehdot[0]}</li>
                <li>b) {this.props.aktiivinenKysymys.vastausvaihtoehdot[1]}</li>
                <li>c) {this.props.aktiivinenKysymys.vastausvaihtoehdot[2]}</li>
                    {/*<input type="hidden" id="radio-previous" name="radio-previous"/>*/}

                <br/>
            </ul>


        );
    }

}

export default Kysymys;