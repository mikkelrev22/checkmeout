import React from 'react'

const AccountForm = (props) => {
  return (
    <div> 
    <h1>Account Setup</h1>
    <form>
      <label> Name
        <input onChange={props.handleInputChange} name="name" value={props.name}/>
      </label>
      <label> E-mail
        <input onChange={props.handleInputChange} name="email" value={props.email}/>
      </label>
      <label> Password
        <input onChange={props.handleInputChange} name="password" value={props.password}/>
      </label>
    </form>
    <button onClick={props.showShippingForm}>Next</button>
    </div> 
  )
}

export default AccountForm