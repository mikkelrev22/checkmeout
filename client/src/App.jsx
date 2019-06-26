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
        billingform: false
    }
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this)
    this.showShippingForm = this.showShippingForm.bind(this)
    this.showBillingForm = this.showBillingForm.bind(this)
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

  render() {
    return (
      <div>
          <div>
          <button onClick ={this.handleCheckoutClick}>Checkout</button>
          </div>
          <div>  
                {this.state.accountform &&
            <AccountForm showShippingForm={this.showShippingForm} accountform={this.state.accountform}/>
                 }
                 {this.state.shippingform &&
            <ShippingForm showBillingForm={this.showBillingForm} shippingform={this.state.shippingform}/>
                 }
                 {this.state.billingform &&
            <BillingForm billingform={this.state.billingform}/>
                 }
          </div>
      </div>  
  )
  }
}
export default App
