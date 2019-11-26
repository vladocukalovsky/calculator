export const CALCULATOR_ACTION_CLEAR = 'clear'
export const CALCULATOR_ACTION_EQUAL = 'equal'

export const CALCULATOR_BUTTON_ROWS = [
  [
    {value: '7', label: '7'},
    {value: '8', label: '8'},
    {value: '9', label: '9'},
    {value: '/', label: '/'}
  ],
  [
    {value: '4', label: '4'},
    {value: '5', label: '5'},
    {value: '6', label: '6'},
    {value: '*', label: '*'}
  ],
  [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '-', label: '-'}
  ],
  [
    {value: CALCULATOR_ACTION_CLEAR, label: 'CE'},
    {value: '0', label: '0'},
    {value: CALCULATOR_ACTION_EQUAL, label: '='},
    {value: '+', label: '+'}
  ]
]

export const CALCULATOR_OPERATORS = ['/', '*', '-', '+']
