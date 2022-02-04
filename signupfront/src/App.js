import React, {Component} from "react";
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      VehicleOwner:'',
      VehicleModel:'',
      VehicleNumber:'',
      Type:'',
      Seats:'',
      email:'',
      password:''
    }

    this.changeVehicleOwner= this.changeVehicleOwner.bind(this)
    this.changeVehicleModel= this.changeVehicleModel.bind(this)
    this.changeVehicleNumber= this.changeVehicleNumber.bind(this)
    this.changeType= this.changeType.bind(this)
    this.changeSeats= this.changeSeats.bind(this)
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

  changeVehicleNumber(event){
    this.setState({
      VehicleNumber:event.target.value
    })
  }

  changeType(event){
    this.setState({
      Type:event.target.value
    })
  }

  changeSeats(event){
    this.setState({
      Seats:event.target.value
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
      VehicleNumber:this.state.VehicleNumber,
      email:this.state.email,
      Type:this.state.Type,
      Seats:this.state.Seats,
      password:this.state.password
    }

    axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))

    this.setState({
      VehicleOwner:'',
      VehicleModel:'',
      VehicleNumber:'',
      Type:'',
      Seats:'',
      email:'',
      password:''
    })
  }
   
  render() { 
    return (
      <div>
        
          <div className="container">
            <div className="right"> <img src='1.jpg'></img></div>
          
            <div className="left">
              <h2 className="signup">SIGN UP</h2>
              <form className="fm" onSubmit={this.onSubmit}>
                <input type='text' 
                  placeholder="Vehicle Owner" 
                  onChange={this.changeVehicleOwner}
                  value={this.state.VehicleOwner}
                  className="form-control"
                  required
                />
                <br/>
                <input type='text' 
                  placeholder="Vehicle Model" 
                  onChange={this.changeVehicleModel}
                  value={this.state.VehicleModel}
                  className="form-control"
                  required
                />
                <br/>
                <input type='text' 
                  placeholder="Vehicle Number" 
                  onChange={this.changeVehicleNumber}
                  value={this.state.VehicleNumber}
                  className="form-control"
                  required
                />
                <br/>

                <select className="type"  placeholder="Vehicle Type"  onChange={this.changeType}  value={this.state.Type} required>
                <option value="Car">Car</option>
                <option value="van">Van</option>
                <option value="bus">Bus</option>
                </select>

                <input type='text' 
                  placeholder="Number of Seats" 
                  onChange={this.changeSeats}
                  value={this.state.VehicleSeats}
                  className="form-control"
                  id="noSeats"
                  required
                />
                <br/>

                <input type='email' 
                  placeholder="E-mail" 
                  onChange={this.changeEmail}
                  value={this.state.email}
                  className="form-control"
                  required
                />
                <br/>
                <input type='password' 
                  placeholder="password" 
                  onChange={this.changePassword}
                  value={this.state.password}
                  className="form-control"
                  required
                />
                
                <br/>
                <input type='submit' className="btn" value='SIGN UP ME'/>
              </form>
            </div>
          
          
         
            <div>
              
            </div>
          </div>
      </div>
    );
  }
}
 
export default App;