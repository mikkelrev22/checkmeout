import React from 'react'

const BillingForm = (props) => {
  return (
   <div>
     <h1>Billing Information</h1>
    <form>
      <label> Credit Card#
        <input/>
      </label>
      <label> Expiration Date
        <input/>
      </label>
      <label> CVV
        <input/>
      </label>
      <label> Billing ZIP Code
        <input/>
      </label>
    </form>
   </div>
  )
}
export default BillingForm