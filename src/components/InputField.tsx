interface Props {
  type: string
  placeholder: string
  styles?: string
  required?: boolean
  minLength?: number
  value: string | number
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const InputField: React.FC<Props> = ({ styles, ...rest }) => {
  return (
    <input
      {...rest}
      className={`w-full text-sm text-netflix-black max-w-lg border-0 rounded-sm ${styles}`}
    />
  )
}

export default InputField
