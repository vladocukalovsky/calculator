import React from 'react'
import PropTypes from 'prop-types'

import './result.scss'

const Result = ({
  result
}) => (
  <div className="Result">
    {result && result.join('')}
  </div>
)

Result.propTypes = {
  result: PropTypes.array.isRequired
}

export default Result
