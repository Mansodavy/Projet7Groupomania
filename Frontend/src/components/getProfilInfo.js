import React, { Component } from "react";
import "react-router-dom";
import axios from "axios";
import Footer from "../View/Footer";
import swal from "sweetalert";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5000/api/";

class GetProfilInfo extends Component {
  state = {
    profil: [],
    rank: [],
  };
  // On appelle la fonction getProfil()
  // we call the function getProfil()

  componentDidMount() {
    this.getProfil();
  }
  getProfil() {
    const user = JSON.parse(localStorage.getItem("user"));
    axios
      .get(API_URL + "user/getOneUser/", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        if (res.data.roles[0].name === "admin") {
          this.setState({ rank: "Administrateur" });
        } else if (res.data.roles[0].name === "user") {
          this.setState({ rank: "Utilisateur" });
        }

        this.setState({ profil: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let { profil } = this.state;
    let { rank } = this.state;
    return (
      <div className="is-12-desktop">
        <form className="box">
          <div className="file is-centered">
            <figure className="image is-128x128">
              <img className="is-rounded" src={profil.imageUrl} />
            </figure>
          </div>
          <br />
          <br />
          <label className="label has-text-centered	">
            {profil.nom} {profil.prenom}
          </label>
          <label className="label has-text-centered	">{rank}</label>
          <div className="field mt-5"></div>
        </form>
      </div>
    );
  }
}
export default GetProfilInfo;
