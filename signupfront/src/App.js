import React, {Component} from "react";
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      FullName:'',
      userName:'',
      email:'',
      password:''
    }

    this.changeFullName= this.changeFullName.bind(this)
    this.changeUserName= this.changeUserName.bind(this)
    this.changeEmail= this.changeEmail.bind(this)
    this.changePassword= this.changePassword.bind(this)
    this.onSubmit=this.onSubmit.bind(this)

  }

  changeFullName(event){
    this.setState({
      FullName:event.target.value
    })
  }

  changeUserName(event){
    this.setState({
        userName:event.target.value
    })
  }

  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }

  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()

    const registered={
      FullName:this.state.FullName,
      userName:this.state.userName,
      email:this.state.email,
      password:this.state.password
    }

    axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))

    this.setState({
      FullName:'',
      userName:'',
      email:'',
      password:''
    })
  }
   
  render() { 
    return (
      <div>
          <div className="container">
            <div className="form">
              <form onSubmit={this.onSubmit}>
                <input type='text' 
                  placeholder="Full Name" 
                  onChange={this.changeFullName}
                  value={this.state.fullName}
                  className="form-control"
                />
                <br/>
                <input type='text' 
                  placeholder="user Name" 
                  onChange={this.changeUserName}
                  value={this.state.UserName}
                  className="form-control"
                />
                <br/>
                <input type='text' 
                  placeholder="E-mail" 
                  onChange={this.changeEmail}
                  value={this.state.email}
                  className="form-control"
                />
                <br/>
                <input type='password' 
                  placeholder="password" 
                  onChange={this.changePassword}
                  value={this.state.password}
                  className="form-control"
                />
                
                <br/>
                <input type='submit' className="btn" value='submit'/>
              </form>
            </div>
          </div>
      </div>
    );
  }
}
 
export default App;