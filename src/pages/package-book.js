import React, { Component } from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Cookie from "js-cookie";
import axios from "axios";
import GenLayout from "../components/genlayout";

export default class package_book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: "",
      rooms: "",
      start: "",
      end: "",
      price: "",
      type: this.props.type
    };
    this.handleChangeGuests = this.handleChangeGuests.bind(this);
    this.handleChangeRooms = this.handleChangeRooms.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeGuests(event) {
    this.setState({ guests: event.target.value });
  }

  handleChangeRooms(event) {
    this.setState({ rooms: event.target.value });
  }
  handleChangeStart(event) {
    this.setState({ start: event.target.value });
  }
  handleChangeEnd(event) {
    this.setState({ end: event.target.value });
  }
  handleSubmit(event){
    const token =  Cookie.get("token") ? Cookie.get("token") : null;
    var config = {
        headers: {'Access-Control-Allow-Origin': '*',"Content-Type": "application/json","authorization":"Token "+token}
    };
    var rand = Math.random().toString(36).substring(7);
    var pkg={
        package_type:this.props.type,
        package_id:rand,
        facilities_id:rand,
        start_date:this.state.start,
        expiry_date:this.state,
        price:this.state.price,
    }
    switch(this.props.type){
        case("gold"):
            var facilities = {

            }
            break;
        case("silver"):
            var facilities={

            }
        case("diamond"):
            var facilities = {

            }
        case("platinum"):
            var facilities={
                
            }
    }
  }
  render() {
    return (
      <GenLayout>
        <Helmet>
          <title></title>
          <meta name="description" content="Landing Page" />
        </Helmet>

        <section id="contact">
          <div className="inner">
            <section>
              <h3 style={{ fontFamily: "Cinzel Decorative" }}>
                Plan your Stay the way you want to
              </h3>
              <form onSubmit={this.handleSubmit}>
                <div className="field half first">
                  <label htmlFor="guests">Number of Guests</label>
                  <input
                    style={{ backgroundColor: "#fff", color: "#000000" }}
                    type="number"
                    name="guests"
                    id="guests"
                    value={this.state.guests} onChange={this.handleChangeGuests}
                  />
                </div>
                <div className="field half">
                  <label htmlFor="rooms">Number of Rooms</label>
                  <input
                    style={{ backgroundColor: "#fff", color: "#000000" }}
                    type="number"
                    name="rooms"
                    id="rooms"
                    value={this.state.rooms} onChange={this.handleChangeRooms}
                  />
                </div>
                <div className="field half first">
                  <label htmlFor="start">Starting Date</label>
                  <input
                    style={{ backgroundColor: "#fff", color: "#000000" }}
                    type="date"
                    name="start"
                    id="start"
                    value={this.state.start} onChange={this.handleChangeStart}
                  />
                </div>
                <div className="field half">
                  <label htmlFor="end">Ending Date</label>
                  <input
                    style={{ backgroundColor: "#fff", color: "#000000" }}
                    type="date"
                    name="end"
                    id="end"
                    value={this.state.end} onChange={this.handleChangeEnd}
                  />
                </div>

                <ul className="actions">
                  <button className="button">Book Now</button>
                </ul>
              </form>
            </section>
          </div>
        </section>
        <section
          style={{
            backgroundColor: "#8c816b",
            padding: "0em 0 0em 0em",
            marginTop: "1.4em"
          }}
          className="split"
        >
          <center>
            <h5 style={{ color: "#000" }}>Pack Selected: {this.props.type}</h5>
          </center>
        </section>
      </GenLayout>
    );
  }
}
