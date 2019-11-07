import React, { Component } from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Cookie from "js-cookie";
import axios from "axios";
import GenLayout from "../components/genlayout";

export default class custom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: "",
      rooms: "",
      start: "",
      end: "",
      bar: "",
      swimming: "",
      gym: "",
      pool: "",
      racquetball: "",
      casino: "",
      golf: "",
      shooting: "",
      spa: "",
      trip: "",
      price:""
    };
    this.handleChangeGuests = this.handleChangeGuests.bind(this);
    this.handleChangeRooms = this.handleChangeRooms.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeBar = this.handleChangeBar.bind(this);
    this.handleChangeSwimming = this.handleChangeSwimming.bind(this);
    this.handleChangeGym = this.handleChangeGym.bind(this);
    this.handleChangePool = this.handleChangePool.bind(this);
    this.handleChangeRaquet = this.handleChangeRaquet.bind(this);
    this.handleChangeCasino = this.handleChangeCasino.bind(this);
    this.handleChangeGolf = this.handleChangeGolf.bind(this);
    this.handleChangeShooting = this.handleChangeShooting.bind(this);
    this.handleChangeSpa = this.handleChangeSpa.bind(this);
    this.handleChangeTrip = this.handleChangeTrip.bind(this);
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
  handleChangeBar(event) {
    this.setState({ bar: event.target.value });
  }
  handleChangeSwimming(event) {
    this.setState({ swimming: event.target.value });
  }
  handleChangeGym(event) {
    this.setState({ gym: event.target.value });
  }
  handleChangePool(event) {
    this.setState({ pool: event.target.value });
  }
  handleChangeRaquet(event) {
    this.setState({ racquetball: event.target.value });
  }
  handleChangeCasino(event) {
    this.setState({ casino: event.target.value });
  }
  handleChangeGolf(event) {
    this.setState({ golf: event.target.value });
  }
  handleChangeShooting(event) {
    this.setState({ shooting: event.target.value });
  }
  handleChangeSpa(event) {
    this.setState({ spa: event.target.value });
  }
  handleChangeTrip(event) {
    this.setState({ trip: event.target.value });
  }
  handleSubmit(event) {
    const token =  Cookie.get("token") ? Cookie.get("token") : null;
    var config = {
        headers: {'Access-Control-Allow-Origin': '*',"Content-Type": "application/json","authorization":"Token "+token}
    };
    let RAND_ID = Math.random().toString(36).substring(7);
    
    var package= {
            package_id:RAND_ID,
            package_type:"Custom",
            facilities_id:RAND_ID,
            price:this.state.price,
            start_date:this.state.start,
            expiry_date:this.state.end
    }
    var facilities = {
        package_id:RAND_ID,
        package_type:"Custom",
        facilities_id:RAND_ID,
        guests:this.state.guests,
        rooms:this.state.rooms,
        swimming: this.state.swimming,
        gym: this.state.gym,
        pool: this.state.pool,
        racquetball: this.state.racquetball,
        casino: this.state.casino,
        golf: this.state.golf,
        shooting: this.state.shooting,
        spa: this.state.spa,
        trip: this.state.trip,
        RoomType: this.state.roomtype,
        ResturantType:this.state.resturantype
    }
    axios.post('http://localhost:3000/package/',{
        // Need to send token here
        'package':package,
        'facilities':facilities
    } ,config)
      .then(function (response) {
        if(response.status===200){
            // Store TOKEN to Local storage
            // let token = response.data.user.token
            // Cookie.set("token",token)
            //Redirect to Dashboard
            // return <Redirect to="/index"></Redirect>
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
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
              <form method="post" action="#">
                <div className="field half first">
                  <label htmlFor="name">Number of Guests</label>
                  <input
                    style={{ backgroundColor: "#fff", color: "#000000" }}
                    type="number"
                    name="guest"
                    id="guest"
                  />
                </div>
                <div className="field half">
                  <label htmlFor="email">Number of Rooms</label>
                  <input
                    style={{ backgroundColor: "#fff", color: "#000000" }}
                    type="number"
                    name="room"
                    id="room"
                  />
                </div>
                <div className="field half first">
                  <label htmlFor="email">Starting Date</label>
                  <input
                    style={{ backgroundColor: "#fff", color: "#000000" }}
                    type="date"
                    name="email"
                    id="days"
                  />
                </div>
                <div className="field half">
                  <label htmlFor="email">Ending Date</label>
                  <input
                    style={{ backgroundColor: "#fff", color: "#000000" }}
                    type="date"
                    name="email"
                    id="days"
                  />
                </div>

                <ul className="actions">
                  <a className="button">Book Now</a>
                </ul>
              </form>
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
                <h5 style={{ color: "#000" }}>Add on the facilities</h5>
              </center>
              <section
                style={{ backgroundColor: "#8c816b", padding: "0em 0 0em 0em" }}
              >
                <div className="contact-method">
                  <div className="col-6">
                    <div className="mb-5">
                      <input
                        type="checkbox"
                        id="demo-human"
                        name="demo-human"
                      />
                      <label style={{ color: "#000000" }} htmlFor="demo-human">
                        Bar (Open Bar)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-5">
                      <input type="checkbox" id="demo-copy" name="demo-copy" />
                      <label style={{ color: "#000000" }} htmlFor="demo-copy">
                        Swimming (Free)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-5">
                      <input
                        type="checkbox"
                        id="demo-copy1"
                        name="demo-copy1"
                      />
                      <label style={{ color: "#000000" }} htmlFor="demo-copy1">
                        GYM (Membership: INR 8000)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-5">
                      <input
                        type="checkbox"
                        id="demo-copy2"
                        name="demo-copy1"
                      />
                      <label style={{ color: "#000000" }} htmlFor="demo-copy2">
                        Pool (Card: INR 400/day)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-5">
                      <input
                        type="checkbox"
                        id="demo-copy3"
                        name="demo-copy1"
                      />
                      <label style={{ color: "#000000" }} htmlFor="demo-copy3">
                        Racquetball (INR 500/day)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-5">
                      <input
                        type="checkbox"
                        id="demo-copy4"
                        name="demo-copy1"
                      />
                      <label style={{ color: "#000000" }} htmlFor="demo-copy4">
                        Casino (INR 4000/day)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-5">
                      <input
                        type="checkbox"
                        id="demo-copy5"
                        name="demo-copy1"
                      />
                      <label style={{ color: "#000000" }} htmlFor="demo-copy5">
                        Golf (INR 3500/3days)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-5">
                      <input
                        type="checkbox"
                        id="demo-copy6"
                        name="demo-copy1"
                      />
                      <label style={{ color: "#000000" }} htmlFor="demo-copy6">
                        Shooting (INR 2000/day)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-5">
                      <input
                        type="checkbox"
                        id="demo-copy7"
                        name="demo-copy1"
                      />
                      <label style={{ color: "#000000" }} htmlFor="demo-copy7">
                        Spa (2000 Rs/Day)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-5">
                      <input
                        type="checkbox"
                        id="demo-copy8"
                        name="demo-copy1"
                      />
                      <label style={{ color: "#000000" }} htmlFor="demo-copy8">
                        Trip to Burj Khalifa (INR 10000/day)
                      </label>
                    </div>
                  </div>

                  <div className="field half first">
                    <label htmlFor="name">Total</label>
                    <input
                      style={{ backgroundColor: "#000000" }}
                      style={{ backgroundColor: "#fff", width: "90%" }}
                      type="tel"
                      name="guest"
                      id="guest"
                    />
                  </div>
                </div>
              </section>
            </section>
          </div>
        </section>
      </GenLayout>
    );
  }
}
