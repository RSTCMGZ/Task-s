import React from 'react'

export default function  CaptionWithText(props) {
  return (
    <div className='mb-3'>
    <label   htmlFor="">
    {props.caption}
    </label>
    <br/>
    <input className='form-control' type="text"  />
 
    </div>
  )
}

