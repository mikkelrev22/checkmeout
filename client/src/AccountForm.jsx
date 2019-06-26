import React from 'react'

const AccountForm = (props) => {
  return (
    <div> 
    <h1>Account Setup</h1>
    <form>
      <label> Name
        <input/>
      </label>
      <label> E-mail
        <input/>
      </label>
      <label> Password
        <input/>
      </label>
    </form>
    <button onClick={props.showShippingForm}>Next</button>
    </div> 
  )
}

export default AccountForm