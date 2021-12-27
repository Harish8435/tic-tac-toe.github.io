import React from 'react'
import '../App.css'

function Box({ val, selectBox }) {
    return (
        <div className='box' onClick={selectBox}>{val}</div>
    )
}

export default Box
