import React, { Component } from 'react'
import jwtDecode from 'jwt-decode'

export default class Profile extends Component {


    constructor(){
        
        super()
        this.state={
            first_name:'',
            last_name:'',
            email:''
        }
        
        
    }

    componentDidMount(){
        const token=localStorage.usertoken
        const decode=jwtDecode(token)
        this.setState({
            first_name:decode.first_name,
            last_name:decode.last_name,
            email:decode.email
        })
        
        console.log(decode)
        
        
    }

    render() {
        return (
            
            <div className='container'>
                <div className='jumbotron mt-5'>
                    <div className='col-sm8 mx-auto'>
                        <h1 className='text-center'>Profile</h1>
                    </div>
                    <table className='table col-md-6 mx-auto'>
                        <h2>
                            <tbody>
                                <tr>
                                    <td>First Name</td>
                                    <td>{this.state.first_name}</td>
                                </tr>

                                <tr>
                                    <td>Last Name</td>
                                    <td>{this.state.last_name}</td>
                                </tr>

                                <tr>
                                    <td>Email</td>
                                    <td>{this.state.email}</td>
                                </tr>
                            </tbody>
                        </h2>
                    </table>
                </div>
            </div>
        )
    }
}
