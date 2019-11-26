import React from 'react'
import PropTypes from 'prop-types'

import './button.scss'

const Button = ({
  onClick,
  label
}) => (
  <div className="Button" onClick={onClick}>
    {label}
  </div>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
