import React from 'react'

const AccountForm = (props) => {
  return (
    <div> 
    <h1>Account Setup</h1>
    <form onSubmit={props.handleInputChange}>
      <label> Name
        <input name="name"/>
      </label>
      <label> E-mail
        <input name="email"/>
      </label>
      <label> Password
        <input name="password"/>
      </label>
    </form>
    <button onClick={props.showShippingForm}>Next</button>
    </div> 
  )
}

export default AccountForm