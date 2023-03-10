import {Component} from 'react'

import {evaluate} from 'mathjs'

import {v4 as uuidv4} from 'uuid'

import HistoryList from '../HistoryList'

import Header from '../Header'

import './index.css'

class Calculator extends Component {
  state = {calculatorHistory: [], input: ''}

  componentDidMount() {
    this.getMyReminderData()
  }

  getMyReminderData = () => {
    const stringifiedHistoryList = localStorage.getItem('myHistory')
    const parsedHistoryList = JSON.parse(stringifiedHistoryList)
    if (parsedHistoryList === null) {
      this.setState({calculatorHistory: []})
    } else {
      this.setState({calculatorHistory: parsedHistoryList})
    }
  }

  handleClick = event => {
    const {input} = this.state
    this.setState({input: input.concat(event.target.name)})
  }

  clear = () => {
    this.setState({input: ''})
  }

  backspace = () => {
    const {input} = this.state
    this.setState({input: input.slice(0, -1)})
  }

  save = () => {
    const {calculatorHistory} = this.state
    localStorage.setItem('myHistory', JSON.stringify(calculatorHistory))
  }

  calculate = () => {
    const {input} = this.state
    let result = ''
    try {
      result = Math.floor(evaluate(input))
    } catch (err) {
      result = 'Error'
    }
    const historyItem = `${input} = ${result}`
    this.setState({
      input: result.toString(),
    })
    const date = new Date()
    const options = {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }
    const formattedDate = date.toLocaleString('en-US', options)
    const data = {
      id: uuidv4(),
      historyItem,
      date: formattedDate,
    }
    this.setState(prevState => ({
      calculatorHistory: [...prevState.calculatorHistory, data],
    }))
  }

  onClickDeleteButton = id => {
    const {calculatorHistory} = this.state
    const filteredData = calculatorHistory.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({calculatorHistory: filteredData})
  }

  render() {
    const {input, calculatorHistory} = this.state
    return (
      <>
        <Header />
        <div className="bg-container">
          <div className="calculator-history-container">
            <div className="calculator">
              <h1 className="main-head">Calculator</h1>
              <div className="main-container">
                <form>
                  <div className="input-display">
                    <input
                      type="text"
                      name="display"
                      value={input}
                      placeholder="0"
                    />
                  </div>
                </form>
                <div>
                  <div>
                    <button type="button" value="AC" onClick={this.clear}>
                      AC
                    </button>
                    <button type="button" value="AC" onClick={this.backspace}>
                      DE
                    </button>
                    <button
                      name="."
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      .
                    </button>
                    <button
                      name="/"
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      /
                    </button>
                  </div>

                  <div>
                    <button
                      name="7"
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      7
                    </button>
                    <button
                      name="8"
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      8
                    </button>
                    <button
                      name="9"
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      9
                    </button>
                    <button
                      name="*"
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      *
                    </button>
                  </div>

                  <div>
                    <button
                      name="4"
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      4
                    </button>
                    <button
                      name="5"
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      5
                    </button>
                    <button
                      name="6"
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      6
                    </button>
                    <button
                      name="-"
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      -
                    </button>
                  </div>

                  <div>
                    <button
                      name="1"
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      1
                    </button>
                    <button
                      name="2"
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      2
                    </button>
                    <button
                      name="3"
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      3
                    </button>
                    <button
                      name="+"
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      +
                    </button>
                  </div>

                  <div>
                    <button
                      name="^"
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      ^
                    </button>
                    <button
                      name="0"
                      type="button"
                      value="AC"
                      onClick={this.handleClick}
                    >
                      0
                    </button>
                    <button
                      className="equal"
                      type="button"
                      value="AC"
                      onClick={this.calculate}
                    >
                      =
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="historyContainer">
              <div className="head-button-container">
                <h1 className="main-head">History</h1>
                <button
                  className="saveHistory"
                  type="submit"
                  onClick={this.save}
                >
                  Save
                </button>
              </div>
              <div className="historyListContainer">
                <ul>
                  {calculatorHistory.map(eachItem => (
                    <HistoryList
                      historyListItem={eachItem}
                      key={eachItem.id}
                      onClickDeleteButton={this.onClickDeleteButton}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Calculator
