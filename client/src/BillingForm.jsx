import React from 'react'

const BillingForm = (props) => {
  return (
   <div>
     <h1>Billing Information</h1>
    <form>
      <label> Credit Card Number
        <input onChange={props.handleInputChange} name="creditcard" value={props.creditcard}/>
      </label>
      <label> Expiration Date
        <input onChange={props.handleInputChange} name="expirationdate" value={props.expirationdate}/>
      </label>
      <label> CVV
        <input onChange={props.handleInputChange} name="cvv" value={props.cvv}/>
      </label>
      <label> Billing ZIP Code
        <input onChange={props.handleInputChange} name="billingZIP"value={props.billingZIP}/>
      </label>
    </form>
    <button onClick={props.complete}>Complete</button>
   </div>
  )
}
export default BillingForm