import {useHistory} from 'react-router-dom'
import './index.css'

const NotFound = () => {
  const history = useHistory()

  const returnToHome = () => {
    history.replace('/login')
  }

  return (
    <div className="notfound">
      <img
        className="image"
        src="https://img.freepik.com/free-vector/warning-concept-illustration_114360-1551.jpg?w=740&t=st=1678429469~exp=1678430069~hmac=00934c04de524320e44e792653e56c91d3af8f49f44afd60a53cbccda0a0c664"
        alt="notfound"
      />
      <button type="submit" onClick={returnToHome} className="notfoundButton">
        Return to Home
      </button>
    </div>
  )
}

export default NotFound
