import React from 'react'
import propTypes from 'prop-types'

const Message =({msg})=>{
    
    return(
        <div className='alert alert-info alert-dismissible' role='alert'>
            {msg}
            <button type='button' className='close' data-dismiss='alert' aria-label='Close'>
            <span area-aria-hidden='true'>&times;</span>
            </button>
        </div>
    )
}

Message.prototype={
    msg :propTypes.string.isRequired
}

export default Message
