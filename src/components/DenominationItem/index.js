// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsListItems, updatedAmount} = props
  const {value} = denominationsListItems
  const onChangeAmount = () => {
    updatedAmount(value)
  }
  return (
    <li>
      <button type="button" className="button-1" onClick={onChangeAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
