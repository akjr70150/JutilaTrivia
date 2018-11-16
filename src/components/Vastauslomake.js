import React, { Component } from 'react';

class Vastauslomake extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    state = {vastaus: null, oikeaVastaus: ""};

    handleClick(e) {
        e.preventDefault();

        // Tyhjennetään vastauskenttä
        this.refs.tekstikentta.value = "";
        this.props.lahetaVastausKysymysdatalle(this.state);
    };

    tallennaVastaus = (e) => {
        this.setState({vastaus: e.target.value, oikeaVastaus: this.props.oikeaVastaus});
        console.log(this.props.oikeaVastaus);

    };

    render() {
        return (
            <form>
                <input type="text" onChange={this.tallennaVastaus} size="2" ref="tekstikentta"/><br/>
                <button type="submit" onClick={this.handleClick}>Lähetä vastaus</button>
            </form>
        );
    }
}

export default Vastauslomake;