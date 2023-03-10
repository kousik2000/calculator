import './index.css'

const HistoryList = props => {
  const {historyListItem, onClickDeleteButton} = props
  const {id, historyItem, date} = historyListItem

  const onDeleteButton = () => {
    onClickDeleteButton(id)
  }

  return (
    <li className="item-list-container">
      <div className="item-container">
        <p className="description">{historyItem}</p>
        <p className="description description1">{date}</p>
      </div>
      <div className="delete-container">
        <button className="button" type="button" onClick={onDeleteButton}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default HistoryList
