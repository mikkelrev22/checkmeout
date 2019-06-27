import React from 'react'

const ShippingForm = (props) => {
  return (
    <div>
     <h1>Billing Information</h1>
      <form>
       <label> Shipping Address
        <input onChange={props.handleInputChange} name="address1" value={props.address1}/>
        <input onChange={props.handleInputChange} name="address2" value={props.address2}/>
       </label>
       <label> City, State, ZIP
        <input onChange={props.handleInputChange} name="city" value={props.city}/>
        <input onChange={props.handleInputChange} name="state" value={props.state}/>
        <input onChange={props.handleInputChange} name="shippingZIP" value={props.shippingZIP}/>
       </label>
       <label> Phone Number
        <input onChange={props.handleInputChange} name="phonenumber" value={props.phonenumber}/>
       </label>
      </form>  
      <button onClick={props.showBillingForm}>Next</button>
    </div>  
  )
}
export default ShippingForm