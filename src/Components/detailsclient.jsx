import React, { Component } from "react";
import "../Styles/detailsclient.css";

class DetailsClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: "",
      ville: "",
      cp: "",
      gps: ""
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.data.client !== state.client) {
      return {
        client: props.data.client,
        ville: props.data.ville,
        cp: props.data.cp,
        gps: props.data.gps
      };
    }
    return null;
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  updateNow = () => {
    const selectedClient = this.state.client;
    let recup = localStorage.getItem("Json");
    let decode = JSON.parse(recup);
    const search = decode.find(value => value.client === selectedClient);
    const ind = decode.indexOf(search);
    const {
      client,
      ville,
      cp,
      gps,
      newClient,
      newVille,
      newCp,
      newGps
    } = this.state;

    const clientUp = newClient === undefined ? client : newClient;
    const villeUp = newVille === undefined ? ville : newVille;
    const cpUp = newCp === undefined ? cp : newCp;
    const gpsUp = newGps === undefined ? gps : newGps;

    const newValues = {
      client: clientUp,
      ville: villeUp,
      cp: cpUp,
      gps: gpsUp
    };
    decode[ind] = newValues;
    localStorage.setItem("Json", JSON.stringify(decode));
  };

  render() {
    const { client, ville, cp, gps } = this.state;
    return (
      <div className="DetailsClient">
        <form>
          <label>
            <p className="Title">Informations</p>
            Nom du client :
            <input
              type="text"
              id="client"
              value={client}
              name="newClient"
              placeholder={client}
            />
            <br></br>
            Code Postal :
            <input
              type="text"
              id="cp"
              name="newCp"
              onChange={this.handleChange}
              placeholder={cp}
            />
            <br></br>
            Ville :
            <input
              type="text"
              id="ville"
              name="newVille"
              onChange={this.handleChange}
              placeholder={ville}
            />
            <br></br>
            Coordonnées GPS :
            <input
              type="text"
              id="gps"
              name="newGps"
              onChange={this.handleChange}
              placeholder={gps}
            />
            <br></br>
          </label>
          <button onClick={this.updateNow}>Mettre à jour</button>
        </form>
      </div>
    );
  }
}

export default DetailsClient;
