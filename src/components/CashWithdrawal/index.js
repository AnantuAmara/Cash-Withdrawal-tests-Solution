// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  updatedAmount = value => {
    const {amount} = this.state

    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state

    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="container-2">
          <div className="name-container">
            <button type="button" className="btn-1">
              S
            </button>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="blns-container">
            <p className="heading-1">Your Balance</p>
            <div>
              <p className="heading-2">{amount}</p>
              <p className="paragraph-2">In Rupees</p>
            </div>
          </div>
          <p className="heading-3">Withdraw</p>
          <p className="paragraph-3">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(each => (
              <DenominationItem
                denominationsListItems={each}
                updatedAmount={this.updatedAmount}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
