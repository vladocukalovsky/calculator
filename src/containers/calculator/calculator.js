import React, { Component } from 'react'
import {
  evaluate,
  format,
  isNumber
} from 'mathjs'

import Result from '../../components/calculator/result/result'
import Button from '../../components/calculator/button/button'

import {
  CALCULATOR_ACTION_CLEAR,
  CALCULATOR_ACTION_EQUAL,
  CALCULATOR_BUTTON_ROWS,
  CALCULATOR_OPERATORS
} from '../../config/constants/calculator'

import './calculator.scss'

class Calculator extends Component {
  state = {
    operations: []
  }

  handleButtonClick = value => {
    switch (value) {
      case CALCULATOR_ACTION_CLEAR: {
        this.setState({
          operations: []
        })
        break
      }
      case CALCULATOR_ACTION_EQUAL: {
        this.calculate()
        break
      }
      default: {
        this.processValue(value)
      }
    }
  }

  calculate = () => {
    const { operations } = this.state
    let result = operations.join('')

    if (result) {
      result = evaluate(result)
      result = format(result, { precision: 10 })
      result = String(result)

      this.setState({
        operations: [result]
      })
    }
  }

  processValue = value => {
    let { operations } = this.state
    const lastValue = operations[operations.length - 1]

    if (isNumber(lastValue) && isNumber(value)) {
      operations[operations.length - 1] = lastValue.concat(value)
    } else {
      if (lastValue !== value) {
        if (CALCULATOR_OPERATORS.includes(value) && CALCULATOR_OPERATORS.includes(lastValue)) {
          operations[operations.length - 1] = value
        } else if (!(operations.length === 0 && CALCULATOR_OPERATORS.includes(value))) {
          operations = operations.concat(value)
        }
      }
    }

    this.setState({
      operations: operations
    })
  }

  getButtons = () => {
    return CALCULATOR_BUTTON_ROWS.map((row, index) => {
      const rowButtons = row.map((data, i) => (
          <Button onClick={() => this.handleButtonClick(data.value)} label={data.label} key={`button-${index}-${i}`} />
      ))
      return <div className="row" key={`row-${index}`}>{rowButtons}</div>
    })
  }

  render() {
    const { operations } = this.state
    return (
      <div className="Calculator">
        <Result result={operations}/>
        <div className="Buttons">
          {this.getButtons()}
        </div>
      </div>
    )
  }
}

export default Calculator
