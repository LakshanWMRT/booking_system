import React, { Component } from 'react'

import {Link,withRouter} from 'react-router-dom'


class NavBar extends Component {

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }



    render() {
        const loginRegLink=(
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <Link to ="/login" className='nav-link'>
                        <h1><img src="https://img.icons8.com/ios/50/000000/login-rounded-right--v1.png"/>Login</h1>
                    </Link>
                </li>
                <li className='nav nav-tabs'>
                    <Link to ="/register" className='nav-link'>
                        <h1><img src="https://img.icons8.com/pastel-glyph/64/000000/petition.png"/>Register</h1>
                    </Link>
                </li>
            </ul>
        )
        const userLink =(
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <Link to ="/profile" className='nav-link'>
                        <h1><img src="https://img.icons8.com/small/16/000000/gender-neutral-user.png"/>User</h1>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ="/uploads" className='nav-link'>
                        <h1><img src="https://img.icons8.com/small/16/000000/edit.png"/>Add Booking</h1>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ="/bookings" className='nav-link'>
                        <h1><img src="https://img.icons8.com/small/16/000000/edit.png"/>Booking List</h1>
                    </Link>
                </li>
                <li className='nav-item'>
                    <a href='' onClick={this.logOut.bind(this)} className='nav-link'>
                    <h1><img src="https://img.icons8.com/small/16/000000/exit.png"/>Logout</h1>
                    </a>
                </li>
            </ul>
        )

        return(
            <nav className='navbar navbar-expand-lg navbar-light rounded'>
                <button className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbar1'
                        aria-controls='navbar1'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse justify-content-md-center' id='navbar1'>
                    <ul className='nav nav-tabs'>
                        <li className='nav-item'>
                            <Link to ="/" className='nav-link'>
                                <h1><img src="https://img.icons8.com/ios-filled/50/000000/android-tablet.png"/>Home</h1>
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink:loginRegLink }
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar);