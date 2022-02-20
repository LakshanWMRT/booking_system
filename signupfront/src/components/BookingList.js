import React, { Component } from 'react'
import axios  from 'axios'
import TableRow from './TableRow'



export default class BookingList extends Component {
    constructor(props) {
        
        super(props)
        this.state = {
            routes: []
        }


    }

    componentDidMount() {

        axios.get('https://localhost:5000/bookings')
            .then(Response => {
                this.setState({ routes: Response.data })
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    TabRow() {
        return this.state.routes.map(function (obj, key) {
            return <TableRow obj={obj} key={key} />
        })
    }


    render() {
        return (
            <div>
                <h1 align='center'>Booking List</h1>
                <h2>
                    <table className='table table-striped' style={{ marginTop: 20 }}>
                        <tread>
                            <tr>
                                <th>Route name</th>
                                <th>Driver Name</th>
                                <th>Date</th>
                            </tr>
                            <tbody>
                                {this.TabRow()}
                            </tbody>
                        </tread>
                    </table>
                </h2>
            </div>
        )
    }
}

