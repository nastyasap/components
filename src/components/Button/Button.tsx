import {FC} from 'react';
import cn from 'classnames'

import s from './button.module.scss'

export type ButtonColor = 'green' | 'blue' | 'black' | 'burgundy' | 'darkBlue' | 'darkGrey'

interface ButtonProps {
    text: string
    handler?: () => void
    disabled?: boolean
    variant?: 'primary' | 'outline'
    round?: boolean
    icon?: string
    iconPosition?: 'before text' | 'after text' | 'both'
    className?: string
    width?: string
    color?: ButtonColor
    size?: 'small' | 'medium' | 'large'
}

const Button: FC<ButtonProps> = ({
                                     text,
                                     width,
                                     color,
                                     disabled,
                                     round,
                                     className,
                                     handler,
                                     variant = 'primary',
                                     size = 'medium',
                                     icon,
                                     iconPosition
                                 }) => {
    const buttonClass = cn(
        s.button,
        round && s.round,
        !round && s[variant],
        color && s[color],
        s[size],
        {[s.disabled]: disabled},
        className
    )
    return (
        <button className={buttonClass} onClick={handler} style={{width}}>{text}</button>
    )
}

export default Button