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
      className={`flex justify-center items-center bg-netflix-red rounded-sm text-sm text-netflix-white font-bold px-6 py-3 md:px-6 md:py-3 ${styles}`}
    >
      {' '}
      {leftIcon} {children} {rightIcon}
    </button>
  )
}

export default Button
