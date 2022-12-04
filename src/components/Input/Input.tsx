import {ChangeEvent, FC, forwardRef, useState,} from 'react'
import cn from 'classnames'

import s from './input.module.scss'

interface InputProps {
    onChange?: (text: string) => void
    placeholder?: string
    className?: string
    inputClassName?: string
    label?: string
    isRequired?: boolean
}

const Input: FC<InputProps> = ({
                                   onChange,
                                   placeholder,
                                   className,
                                   inputClassName,
                                   label,
                                   isRequired,
                                   ...props
                               }) => {
    const [value, setValue] = useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        onChange && onChange(e.currentTarget.value)
    }

    return (
        <label className={cn(s.container, className)}>
            {label && (
                <span className={s.labelText}>
            {label} {isRequired && <span>*</span>}
          </span>
            )}
            <div
                className={cn(
                    s.wrapper,
                    inputClassName
                )}
            >

                <input
                    className={cn(s.input)}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required={isRequired}
                    {...props}
                />

            </div>
        </label>
    )
}

export default Input
