import React, { Component } from 'react';

class Kysymys extends Component {
    render() {
        return (
            <form>
            <ul>
                <li>{this.props.kysymyspropsi}</li>
                <br></br>
                <div className="radio">
                <li><input type="radio" id="radio-1" name="radios" value="1" /> a) {this.props.vastausvaihtoehdotpropsi[0]}</li>
                <li><input type="radio" id="radio-2" name="radios" value="2" /> b) {this.props.vastausvaihtoehdotpropsi[1]}</li>
                <li><input type="radio" id="radio-3" name="radios" value="3" /> c) {this.props.vastausvaihtoehdotpropsi[2]}</li>
                    {/*<input type="hidden" id="radio-previous" name="radio-previous"/>*/}
                </div>
                <br></br>
            </ul>
            </form>

        );
    }
}

export default Kysymys;