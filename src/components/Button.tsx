import React from 'react'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  leftIcon?: any
  rightIcon?: any
  styles?: string
  disabled?: boolean
}

const Button: React.FC<Props> = ({
  children,
  type = 'button',
  onClick,
  leftIcon = null,
  rightIcon = null,
  disabled,
  styles,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`btn-netflix ${styles}`}
    >
      {leftIcon} {children} {rightIcon}
    </button>
  )
}

export default Button
