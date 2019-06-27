import React from 'react'

const BillingForm = (props) => {
  return (
   <div>
     <h1>Billing Information</h1>
    <form onSubmit={props.handleInputChange}>
      <label> Credit Card#
        <input name="creditcard"/>
      </label>
      <label> Expiration Date
        <input name="expirationdate"/>
      </label>
      <label> CVV
        <input name="cvv"/>
      </label>
      <label> Billing ZIP Code
        <input name="billingZIP"/>
      </label>
    </form>
    <button onClick={props.complete}>Complete</button>
   </div>
  )
}
export default BillingForm