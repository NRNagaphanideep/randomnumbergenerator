// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    initiateRandomNumber: 0,
  }

  onRandomNumberGenerator = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({initiateRandomNumber: newRandomNumber})
  }

  render() {
    const {initiateRandomNumber} = this.state
    return (
      <div className="app-container">
        <div className="number-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onRandomNumberGenerator}
          >
            Generate
          </button>
          <p className="random-number">{initiateRandomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
