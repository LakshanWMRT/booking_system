import React, { Component } from 'react'

export default class
    extends Component {
    render() {
        return (
            <div>
                <tr>
                    <td>
                        {this.props.obj.route}
                    </td>
                
                    <td>
                        {this.props.obj.driver_name}
                    </td>
                
                    <td>
                        {this.props.obj.Date}
                    </td>
                
                    <td>
                        <button className='btn btn-primary'>View</button>
                    </td>
                </tr>
            </div>
        )
    }
}
