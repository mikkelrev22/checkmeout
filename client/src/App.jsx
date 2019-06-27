import React from 'react'
import AccountForm from './AccountForm.jsx'
import ShippingForm from './ShippingForm.jsx'
import BillingForm from './BillingForm.jsx'


class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
        accountform: false,
        shippingform: false,
        billingform: false,
        name: '',
        email: '',
        password: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        shippingZIP: '',
        phonenumber: '',
        creditcard: '',
        expirationdate: '',
        cvv: '',
        billingZIP: ''
    }
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this)
    this.showShippingForm = this.showShippingForm.bind(this)
    this.showBillingForm = this.showBillingForm.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleCheckoutClick(){
    this.setState({
        accountform: true,
        shippingform: false,
        billingform: false,
    })
  }
  showShippingForm(){
      this.setState({
        accountform: false,
        shippingform: true,
        billingform: false
      })
  }
  showBillingForm(){
    this.setState({
      accountform: false,
      shippingform: false,
      billingform: true
    })
 }
 handleInputChange(event){
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
        [name]: value
    })
    console.log(this.state)
 }
 complete(){

 }

  render() {
    return (
      <div>
          <div>
          <button onClick ={this.handleCheckoutClick}>Checkout</button>
          </div>
          <div>  
                {this.state.accountform &&
            <AccountForm handleInputChange= {this.handleInputChange} showShippingForm={this.showShippingForm} accountform={this.state.accountform}/>
                 }
                 {this.state.shippingform &&
            <ShippingForm handleInputChange= {this.handleInputChange} showBillingForm={this.showBillingForm} shippingform={this.state.shippingform}/>
                 }
                 {this.state.billingform &&
            <BillingForm handleInputChange= {this.handleInputChange} billingform={this.state.billingform} complete={this.complete}/>
                 }
          </div>
      </div>  
  )
  }
}
export default App
