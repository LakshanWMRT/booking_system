import React from 'react'
import propTypes from 'prop-types'

const Progress=({percentage})=>{
    return(
        <div className='progress'>
            <div    className='progress-bar progress-bar-stripped bg-success'
                    role='progressbar'
                    style={{width:`${percentage}%`}}
            >
                    {percentage}%
            </div>
        </div>
    )
}

Progress.prototype={
    percentage:propTypes.number.isRequired
}

export default Progress
