import React, { Component } from 'react';

class Kysymys extends Component {
    render() {
        return (
            <ul>
                <li>{this.props.kysymyspropsi}</li>
            </ul>
        );
    }
}

export default Kysymys;