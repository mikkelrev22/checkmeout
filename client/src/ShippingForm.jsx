import React from 'react'

const ShippingForm = (props) => {
  return (
    <div>
     <h1>Billing Information</h1>
      <form>
       <label> Shipping Address
        <input/>
       </label>
       <label> City, State, ZIP
        <input/>
       </label>
       <label> Phone Number
        <input/>
       </label>
      </form>  
      <button onClick={props.showBillingForm}>Next</button>
    </div>  
  )
}
export default ShippingForm