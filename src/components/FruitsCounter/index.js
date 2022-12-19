import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {count: 0, count2: 0}

  onMangoIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count, count2} = this.state

    return (
      <div className="container">
        <h1 className="head">
          Bob ate <span className="span1">{count}</span> mangoes
          <span className="span2">{count2}</span>bananas
        </h1>
        <div className="cards-container">
          <div className="card">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button
              className="button"
              type="button"
              onClick={this.onMangoIncrement}
            >
              Eat Mango
            </button>
          </div>
          <div className="card">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
            <button
              className="button"
              type="button"
              onClick={this.onBananaIncrement}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
