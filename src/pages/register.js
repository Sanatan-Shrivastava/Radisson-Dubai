import { Link } from 'gatsby'
import GenLayout from '../components/genlayout'
import BannerLanding from '../components/BannerLanding'
import axios from 'axios'
import Cookie from 'js-cookie'
import Redirect from '@reach/router'

import React, { Component } from 'react'

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            gender: "",
            age: "",
            password: "",
            cnfpassword: "",
            phone: ""
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.ageHandler = this.ageHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.cnfpasswordHandler = this.cnfpasswordHandler.bind(this);
        this.phoneHandler = this.phoneHandler.bind(this);
        this.genderHandler = this.genderHandler.bind(this);
    }
    nameHandler(event) {
        this.setState({ name: event.target.value });
    }
    emailHandler(event) {
        this.setState({ email: event.target.value });
    }
    phoneHandler(event) {
        this.setState({ phone: event.target.value });
    }
    genderHandler(event) {
        this.setState({ gender: event.target.value });
    }
    ageHandler(event) {
        this.setState({ age: event.target.value });
    }
    passwordHandler(event) {
        this.setState({ password: event.target.value });
    }
    cnfpasswordHandler(event) {
        this.setState({ cnfpassword: event.target.value });
    }

    submitHandler(event) {
        event.preventDefault();
        if (this.state.password === this.state.cnfpassword) {
            const user = {
                name: this.state.name,
                password: this.state.password,
                phone: this.state.phone,
                age: this.state.age,
                email: this.state.email,
                gender: this.state.gender
            };
            var config = {
                headers: { 'Access-Control-Allow-Origin': '*', "Content-Type": "application/json" }
            };
            axios.post('http://localhost:3000/user/', {
                    'user': user
                }, config)
                .then(function(response) {
                    if (response.status === 200) {
                        // Store TOKEN to Local storage
                        let token = response.data.user.token
                        Cookie.set("token", token)
                            //Redirect to Dashboard
                        return <Redirect to = "/index" > < /Redirect>
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        } else {
            this.id.password.setCustomValidity('Passwords do not match');
            this.id.cnfpassword.setCustomValidity('Passwords do not match');
        }
    }
    render() {
        return ( <
            GenLayout >
            <
            section id = "contact" >
            <
            div className = "inner" >
            <
            section >
            <
            form onSubmit = { this.submitHandler } >
            <
            h3 style = {
                { fontFamily: 'ZCOOL+XiaoWei' } } > Please Register < /h3> <
            div className = "field half first" >
            <
            label htmlFor = "name" > First Name < /label> <
            input type = "text"
            name = "name"
            id = "name"
            onChange = { this.nameHandler }
            /> <
            /div> <
            div className = "field half" >
            <
            label htmlFor = "name" > Last Name < /label> <
            input type = "text"
            name = "name"
            id = "name"
            onChange = { this.nameHandler }
            /> <
            /div> <
            div className = "field half first" >
            <
            label htmlFor = "email" > Email < /label> <
            input type = "text"
            name = "email"
            id = "email"
            onChange = { this.emailHandler }
            /> <
            /div> <
            div className = "field half" >
            <
            label htmlFor = "tel" > Phone < /label> <
            input type = "tel"
            name = "phone"
            id = "phone"
            onChange = { this.phoneHandler }
            /> <
            /div> <
            div className = "field half first" >
            <
            label htmlFor = "phone" > Gender < /label> <
            input type = "tel"
            name = "gender"
            id = "gender"
            onChange = { this.genderHandler }
            /> <
            /div> <
            div className = "field half" >
            <
            label htmlFor = "tel" > Age < /label> <
            input type = "tel"
            name = "age"
            id = "age"
            onChange = { this.ageHandler }
            /> <
            /div> <
            div className = "field half first" >
            <
            label htmlFor = "email" > Password < /label> <
            input type = "text"
            name = "password"
            id = "password"
            onChange = { this.passwordHandler }
            /> <
            /div> <
            div className = "field half" >
            <
            label htmlFor = "email" > Confirm Password < /label> <
            input type = "text"
            name = "cnfpassword"
            id = "cnfpassword"
            onChange = { this.cnfpasswordHandler }
            /> <
            /div> <
            ul className = "actions" >
            <
            li > < input type = "submit"
            value = "Submit"
            className = "special" / > < /li> <
            li > < input type = "reset"
            value = "Clear" / > < /li> <
            /ul> <
            /form> <
            /section> <
            section className = "split" >

            <
            /section> <
            /div> <
            /section> <
            /GenLayout>
        )
    }
}