import './index.css'

const TabsList = props => {
  const {tabItem, onToggleTabItem, isActive} = props
  const {tabId, displayText} = tabItem
  const onClickTabItem = () => {
    onToggleTabItem(tabId)
  }
  return (
    <li>
      <button
        type="button"
        className={`tab-button ${isActive ? 'highlight-text' : ''}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabsList
