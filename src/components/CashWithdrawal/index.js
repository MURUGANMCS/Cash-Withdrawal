// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  constructor(props) {
    super(props)
    this.state = {denominationsList: props.denominationsList, balance: 2000}
  }

  withdrawalAmount = value => {
    const {balance} = this.state
    if (balance >= value) {
      this.setState(prevState => ({balance: prevState.balance - value}))
    }
  }

  render() {
    const {denominationsList, balance} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <p className="logo">S</p>
            <p className="user-name">Sarah Williams</p>
          </div>

          <div className="balance-container">
            <p className="your-balance-details">Your Balance</p>
            <div className="balance-amount-container">
              <p className="amount">{balance}</p>
              <p className="your-balance-details-in-rupees">In Rupees</p>
            </div>
          </div>

          <div>
            <p className="withdraw">Withdraw</p>
            <p className="sum-in-rupees-details">CHOOSE SUM (IN RUPEES)</p>

            <ul className="list-container">
              {denominationsList.map(list => (
                <DenominationItem
                  denominationsListValue={list.value}
                  key={list.id}
                  withdrawalAmount={this.withdrawalAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
