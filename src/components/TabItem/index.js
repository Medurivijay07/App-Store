// Write your code here
import './index.css'

const TabItem = props => {
  const {tabslist, changeTab, isActive} = props
  const {tabId, displayText} = tabslist
  const onClickingTab = () => {
    changeTab(tabId)
  }
  const tabstyle = isActive ? 'underline-tab' : 'normal-button'

  return (
    <li className="tab-item">
      <button type="button" className={tabstyle} onClick={onClickingTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
