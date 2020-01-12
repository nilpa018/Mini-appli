import React, { Component } from "react";
import "./Styles/App.css";
import data2 from "./Data/data.json";
import Header from "./Components/header";
import DetailsClient from "./Components/detailsclient";
import Leaflet from "./Components/leaflet";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: "",
      ville: "",
      cp: "",
      gps: ""
    };
    this.updateStorage();
  }

  updateStorage() {
    !localStorage["Json"]
      ? localStorage.setItem("Json", JSON.stringify(data2))
      : console.log("Json déjà présent");
  }

  selectedRow = (client, ville, cp, gps) => {
    this.setState({ client: client, ville: ville, cp: cp, gps: gps });
  };

  render() {
    let recup = localStorage.getItem("Json");
    let tableau = JSON.parse(recup);
    const data = this.state;
    return (
      <div className="App">
        <Header />
        <div className="Flex">
          <div className="ListingClients">
            <div>
              <p className="Title">Liste des clients</p>
            </div>
            <div className="List">
              <ul>
                {tableau.map(e => (
                  <li>
                    <button
                      onClick={() =>
                        this.selectedRow(e.client, e.ville, e.cp, e.gps)
                      }
                    >
                      {e.client} - {e.ville} ( {e.cp} )
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <DetailsClient data={data} />
        </div>
        <Leaflet data={data} />
      </div>
    );
  }
}

export default App;
