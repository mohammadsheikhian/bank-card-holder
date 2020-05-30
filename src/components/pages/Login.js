import React, { Component } from 'react'
import './../../css/login.css'
import axios from 'axios'

export default class Login extends Component {
  constructor(props) {
    super(props)
    // create a ref to store the textInput DOM element
    this.inputEmail = React.createRef()
    this.inputPassword = React.createRef()
  }
  handlerLogin = event => {
    event.preventDefault()
    console.log(this.inputEmail.current.value)
    console.log(this.inputPassword.current.value)
    axios({
      method: 'create',
      url: 'http://0.0.0.0:8083/apiv1/tokens',
      data: {
        email: this.inputEmail.current.value,
        password: this.inputPassword.current.value
      }
    }).then(res => {
      const persons = res.data
      console.log(persons)
      this.setState({ persons })
    })
  }
  render() {
    return (
      <div className="text-center">
        <form className="form-signin">
          <img
            className="mb-4"
            src="/docs/4.5/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label className="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required=""
            ref={this.inputEmail}
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
            ref={this.inputPassword}
          />
          <div className="checkbox mb-3">
            {/* <label>
                    <input type="checkbox" value="remember-me"> Remember me</input>
                  </label>*/}
          </div>
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={this.handlerLogin.bind(this)}
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017-2020</p>
        </form>
      </div>
    )
  }
}
