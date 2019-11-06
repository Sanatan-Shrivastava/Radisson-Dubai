import React, { Component } from 'react'
import { Link } from 'gatsby'
import GenLayout from '../components/genlayout'
import Cookie from "js-cookie"
import axios from 'axios'
import { Redirect } from '@reach/router'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '',password:''};
    
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
      }
      handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }

      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }

      handleSubmit(event) {
        var config = {
            headers: {'Access-Control-Allow-Origin': '*',"Content-Type": "application/json"}
        };
        var user= {
                email:this.state.email,
                password:this.state.password
        }
        axios.post('http://localhost:3000/user/',{
            'user':user
        } ,config)
          .then(function (response) {
            if(response.status===200){
                // Store TOKEN to Local storage
                let token = response.data.user.token
                Cookie.set("token",token)
                //Redirect to Dashboard
                return <Redirect to="/index"></Redirect>
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
            <section id="contact">
            <div className="inner">
                <section>
                    <form onSubmit={this.handleSubmit}>
                    <h3 style={{fontFamily:'ZCOOL+XiaoWei'}}>Login</h3>
                        
                        <div className="field half first">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChangeEmail} />
                        </div>
                        <div className="field half first">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" id="password" value={this.state.password} onChange={this.handleChangePassword}/>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Login" className="special"  /></li>
                            <li><input type="reset" value="Reset Password" /></li>
                        </ul>
                    </form>
                </section>
                <section className="split">
                
                </section>
            </div>
        </section>
        </GenLayout>
        )
    }
}
