// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsListValue, withdrawalAmount} = props
  const {value}=denominationsListValue

  const onWithdrwaAmount = () => {
    withdrawalAmount(value)
  }

  return (
    <li className="list-container">
      <button type="button" onClick={onWithdrwaAmount} className="withdraw-btn">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
