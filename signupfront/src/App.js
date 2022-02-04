import React, {Component} from "react";
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      VehicleOwner:'',
      VehicleModel:'',
      Type:'',
      VehicleNumber:'',
      VehicleSeats:'',
      email:'',
      password:''
    }

    this.changeVehicleOwner= this.changeVehicleOwner.bind(this)
    this.changeVehicleModel= this.changeVehicleModel.bind(this)
    this.changeType= this.changeType.bind(this)
    this.changeVehicleNumber= this.changeVehicleNumber.bind(this)
    this.changeVehicleSeats= this.changeVehicleSeats.bind(this)
    this.changeEmail= this.changeEmail.bind(this)
    this.changePassword= this.changePassword.bind(this)
    this.onSubmit=this.onSubmit.bind(this)

  }

  changeVehicleOwner(event){
    this.setState({
      VehicleOwner:event.target.value
    })
  }

  changeVehicleModel(event){
    this.setState({
      VehicleModel:event.target.value
    })
  }

  changeType(event){
    this.setState({
      Type:event.target.value
    })
  }

  changeVehicleNumber(event){
    this.setState({
      VehicleNumber:event.target.value
    })
  }

  changeVehicleSeats(event){
    this.setState({
      VehicleSeats:event.target.value
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
      VehicleOwner:this.state.VehicleOwner,
      VehicleModel:this.state.VehicleModel,
      Type:this.state.Type,
      VehicleNumber:this.state.VehicleNumber,
      VehicleSeats:this.state.VehicleSeats,
      email:this.state.email,
      password:this.state.password
    }

    axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))

    this.setState({
      VehicleOwner:'',
      VehicleModel:'',
      Type:'',
      VehicleNumber:'',
      VehicleSeats:'',
      email:'',
      password:''
    })
  }
   
  render() { 
    return (
      <div>
          <div className="container">
            <h2 className="signup">SIGN UP</h2>
            <div className="form">
              <form onSubmit={this.onSubmit} className="fm">
                <input type='text' 
                  placeholder="Vehicle Owner" 
                  onChange={this.changeVehicleOwner}
                  value={this.state.VehicleOwner}
                  className="form-control"
                />
                
                <input type='text' 
                  placeholder="Vehicle Model" 
                  onChange={this.changeVehicleModel}
                  value={this.state.VehicleModel}
                  className="form-control"
                />
               
              
                <select className="type"  placeholder="Vehivle Type"  onChange={this.changeType}  value={this.state.Type}>
                <option value="Car">Car</option>
                <option value="van">Van</option>
                <option value="bus">Bus</option>
                </select>
 
                <input type='text' 
                  placeholder="Vehicle Number" 
                  onChange={this.changeVehicleNumber}
                  value={this.state.VehicleNumber}
                  className="form-control"
                />

                <input type='text' 
                  placeholder="Number of Seates" 
                  onChange={this.changeVehicleSeats}
                  value={this.state.VehicleSeats}
                  className="form-control"
                />


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
                <input type='submit' className="btn" value='SIGN UP'/>
              </form>
            </div>
          </div>
      </div>
    );
  }
}
 
export default App;