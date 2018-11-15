import React, { Component } from 'react';
import Kysymys from './Kysymys';

class Kysymysdata extends Component {
    render() {

        var kysymysoliot = this.props.kysymysJson.map(function(kysymysmappi){
            return <Kysymys key={kysymysmappi.id} kysymyspropsi={kysymysmappi.kysymys}/>
        })

        return (
            <div>
                {kysymysoliot}
            </div>
        );
    }
}

export default Kysymysdata;