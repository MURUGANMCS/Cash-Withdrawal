// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsListValue, withdrawalAmount} = props

  const onWithdrwaAmount = () => {
    withdrawalAmount(denominationsListValue)
  }

  return (
    <li className="list-container">
      <button type="button" onClick={onWithdrwaAmount} className="withdraw-btn">
        {denominationsListValue}
      </button>
    </li>
  )
}

export default DenominationItem
