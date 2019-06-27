import React from 'react'

const ShippingForm = (props) => {
  return (
    <div>
     <h1>Billing Information</h1>
      <form onSubmit={props.handleInputChange}>
       <label> Shipping Address
        <input name="address1"/>
        <input name="address2"/>
       </label>
       <label> City, State, ZIP
        <input name="city"/>
        <input name="state"/>
        <input name="shippingZIP"/>
       </label>
       <label> Phone Number
        <input name="phonenumber"/>
       </label>
      </form>  
      <button onClick={props.showBillingForm}>Next</button>
    </div>  
  )
}
export default ShippingForm