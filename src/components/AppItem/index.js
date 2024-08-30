// Write your code here
import './index.css'

const AppItem = props => {
  const {appitem} = props
  const {imageUrl, appName} = appitem
  return (
    <li className="list-item">
      <img src={imageUrl} alt={appName} className="app-image"/>
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
